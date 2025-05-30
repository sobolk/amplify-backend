import { TestProjectBase } from './test_project_base.js';
import fsp from 'fs/promises';
import { createEmptyAmplifyProject } from './create_empty_amplify_project.js';
import { CloudFormationClient } from '@aws-sdk/client-cloudformation';
import { TestProjectCreator } from './test_project_creator.js';
import { BackendIdentifier } from '@aws-amplify/plugin-types';
import {
  ClientConfig,
  ClientConfigFileBaseName,
  ClientConfigFormat,
  getClientConfigPath,
} from '@aws-amplify/client-config';
import assert from 'node:assert';
import { AmplifyClient } from '@aws-sdk/client-amplify';
import { e2eToolingClientConfig } from '../e2e_tooling_client_config.js';

/**
 * Creates minimal test projects with custom outputs.
 */
export class CustomOutputsTestProjectCreator implements TestProjectCreator {
  readonly name = 'custom-outputs';

  /**
   * Creates project creator.
   */
  constructor(
    private readonly cfnClient: CloudFormationClient = new CloudFormationClient(
      e2eToolingClientConfig,
    ),
    private readonly amplifyClient: AmplifyClient = new AmplifyClient(
      e2eToolingClientConfig,
    ),
  ) {}

  createProject = async (e2eProjectDir: string): Promise<TestProjectBase> => {
    const { projectName, projectRoot, projectAmplifyDir } =
      await createEmptyAmplifyProject(this.name, e2eProjectDir);

    const project = new CustomOutputsTestProject(
      projectName,
      projectRoot,
      projectAmplifyDir,
      this.cfnClient,
      this.amplifyClient,
    );
    await fsp.cp(
      project.sourceProjectAmplifyDirURL,
      project.projectAmplifyDirPath,
      {
        recursive: true,
      },
    );
    return project;
  };
}

/**
 * The minimal test with typescript idioms.
 */
class CustomOutputsTestProject extends TestProjectBase {
  readonly sourceProjectDirPath = '../../src/test-projects/custom-outputs';

  readonly sourceProjectAmplifyDirSuffix = `${this.sourceProjectDirPath}/amplify`;

  readonly sourceProjectAmplifyDirURL: URL = new URL(
    this.sourceProjectAmplifyDirSuffix,
    import.meta.url,
  );

  /**
   * Create a test project instance.
   */
  constructor(
    name: string,
    projectDirPath: string,
    projectAmplifyDirPath: string,
    cfnClient: CloudFormationClient,
    amplifyClient: AmplifyClient,
  ) {
    super(
      name,
      projectDirPath,
      projectAmplifyDirPath,
      cfnClient,
      amplifyClient,
    );
  }

  assertPostDeployment = async (
    backendId: BackendIdentifier,
  ): Promise<void> => {
    await super.assertPostDeployment(backendId);

    const clientConfigPath = await getClientConfigPath(
      ClientConfigFileBaseName.DEFAULT,
      this.projectDirPath,
      ClientConfigFormat.JSON,
    );
    const clientConfig: ClientConfig = JSON.parse(
      await fsp.readFile(clientConfigPath, 'utf-8'),
    );

    assert.strictEqual(
      clientConfig.auth?.user_pool_id,
      'fakeCognitoUserPoolId',
    );
    assert.strictEqual(
      clientConfig.custom?.someConstant1,
      'someHardCodedValue1',
    );
    assert.strictEqual(
      clientConfig.custom?.someConstant2,
      'someHardCodedValue2',
    );
    assert.ok(clientConfig.custom?.restApiUrl);
    assert.ok(
      /^https:\/\/\S+\.execute-api\.\S+\.amazonaws\.com\/prod\//.test(
        (clientConfig.custom?.restApiUrl as string) ?? 'undefined',
      ),
    );
  };
}
