import { execa } from 'execa';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as os from 'os';
import { after, afterEach, before, beforeEach, describe, it } from 'node:test';
import assert from 'assert';
import { glob } from 'glob';
import { testConcurrencyLevel } from './test_concurrency.js';
import { findBaselineCdkVersion } from '../cdk_version_finder.js';
import { amplifyAtTag } from '../constants.js';
import { NpmProxyController } from '../npm_proxy_controller.js';
import { RetryPredicates, runWithRetry } from '../retry.js';

void describe(
  'create-amplify script',
  { concurrency: testConcurrencyLevel },
  () => {
    let baselineCdkLibVersion: string;
    const npmProxyController = new NpmProxyController();

    before(async () => {
      await npmProxyController.setUp();

      // Prefixing with ~. Otherwise, npm is going to install desired version but
      // declare dependency with ^ in package json. So just in case removing that
      // ambiguity.
      // Testing with latest CDK is covered in canary checks.
      const baselineCdkVersions = await findBaselineCdkVersion();
      baselineCdkLibVersion = `~${baselineCdkVersions.cdkLib}`;
    });

    after(async () => {
      await npmProxyController.tearDown();
    });

    const startDelayIntervalMS = 1000 * 20; // start tests 20 seconds apart to avoid file hot spots

    const testCases = [
      {
        initialState: 'empty',
        startDelayMS: startDelayIntervalMS * 0,
      },
      {
        initialState: 'module',
        startDelayMS: startDelayIntervalMS * 1,
      },
      {
        initialState: 'commonjs',
        startDelayMS: startDelayIntervalMS * 2,
      },
    ];

    testCases.forEach(({ initialState, startDelayMS }) => {
      void describe('installs expected packages and scaffolds expected files', () => {
        let tempDir: string;
        beforeEach(async () => {
          tempDir = await fs.mkdtemp(
            path.join(os.tmpdir(), 'test-create-amplify'),
          );
        });

        afterEach(async () => {
          await fs.rm(tempDir, { recursive: true });
        });

        void it(`starting from ${initialState} project`, async () => {
          await new Promise((resolve) => setTimeout(resolve, startDelayMS));
          if (initialState != 'empty') {
            await fs.writeFile(
              path.join(tempDir, 'package.json'),
              JSON.stringify(
                {
                  name: 'test_name',
                  version: '0.0.1',
                  type: initialState,
                },
                null,
                2,
              ),
            );
          }

          await runWithRetry(async () => {
            await execa(
              'npm',
              ['create', amplifyAtTag, '--yes', '--', '--debug'],
              {
                cwd: tempDir,
                stdio: 'inherit',
              },
            );
          }, RetryPredicates.createAmplifyRetryPredicate);

          // Override CDK installation with baseline version
          await execa(
            'npm',
            ['install', '--save-dev', `aws-cdk-lib@${baselineCdkLibVersion}`],
            {
              cwd: tempDir,
              stdio: 'inherit',
            },
          );

          const packageJsonPath = path.resolve(tempDir, 'package.json');
          const packageJsonObject = JSON.parse(
            await fs.readFile(packageJsonPath, 'utf-8'),
          );

          assert.deepStrictEqual(
            Object.keys(packageJsonObject.devDependencies).sort(),
            [
              '@aws-amplify/backend',
              '@aws-amplify/backend-cli',
              'aws-cdk-lib',
              'constructs',
              'esbuild',
              'tsx',
              'typescript',
            ],
          );

          assert.strictEqual(
            packageJsonObject.devDependencies['aws-cdk-lib'],
            baselineCdkLibVersion,
          );

          assert.deepStrictEqual(
            Object.keys(packageJsonObject.dependencies).sort(),
            ['aws-amplify'],
          );

          const gitIgnorePath = path.resolve(tempDir, '.gitignore');
          const gitIgnoreContent = (await fs.readFile(gitIgnorePath, 'utf-8'))
            .split(os.EOL)
            .filter((s) => s.trim());
          assert.deepStrictEqual(gitIgnoreContent.sort(), [
            '# amplify',
            '.amplify',
            'amplify_outputs*',
            'amplifyconfiguration*',
            'node_modules',
          ]);

          const amplifyPathPrefix = path.join(tempDir, 'amplify');

          // Read tsconfig.json content, remove all comments, and make assertions
          const tsConfigPath = path.resolve(amplifyPathPrefix, 'tsconfig.json');
          const tsConfigContent = (
            await fs.readFile(tsConfigPath, 'utf-8')
          ).replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '');
          const tsConfigObject = JSON.parse(tsConfigContent);

          assert.equal(tsConfigObject.compilerOptions.module, 'es2022');
          assert.equal(
            tsConfigObject.compilerOptions.moduleResolution,
            'bundler',
          );
          assert.equal(tsConfigObject.compilerOptions.resolveJsonModule, true);
          assert.deepStrictEqual(tsConfigObject.compilerOptions.paths, {
            // The path here is coupled with backend-function's generated typedef file path
            '$amplify/*': ['../.amplify/generated/*'],
          });

          const pathPrefix = path.join(tempDir, 'amplify');

          const files = await glob(path.join(amplifyPathPrefix, '**', '*'), {
            nodir: true,
            windowsPathsNoEscape: true,
          });

          const expectedAmplifyFiles = [
            path.join('auth', 'resource.ts'),
            'backend.ts',
            path.join('data', 'resource.ts'),
            'package.json',
            'tsconfig.json',
          ];

          assert.deepStrictEqual(
            files.sort(),
            expectedAmplifyFiles.map((suffix) => path.join(pathPrefix, suffix)),
          );

          // assert that project compiles successfully
          await execa(
            'npx',
            [
              'tsc',
              '--noEmit',
              '--skipLibCheck',
              // pointing the project arg to the amplify backend directory will use the tsconfig present in that directory
              '--project',
              amplifyPathPrefix,
            ],
            {
              cwd: tempDir,
              stdio: 'inherit',
            },
          );
        });
      });
    });

    void describe('fails fast', () => {
      let tempDir: string;
      beforeEach(async () => {
        tempDir = await fs.mkdtemp(
          path.join(os.tmpdir(), 'test-create-amplify'),
        );
      });

      afterEach(async () => {
        await fs.rm(tempDir, { recursive: true });
      });

      void it('if amplify path already exists', async () => {
        const amplifyDirPath = path.join(tempDir, 'amplify');
        await fs.mkdir(amplifyDirPath, { recursive: true });

        const result = await execa('npm', ['create', amplifyAtTag, '--yes'], {
          cwd: tempDir,
          stdio: 'pipe',
          reject: false,
        });
        assert.equal(result.exitCode, 1);
        assert.ok(
          result.stdout
            .toLocaleString()
            .includes(
              'If you are trying to run an Amplify Gen 2 command inside an Amplify Gen 1 project we recommend creating the project in another directory',
            ),
        );
      });
    });
  },
);
