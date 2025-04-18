import { beforeEach, describe, it, mock } from 'node:test';
import { GenerateSchemaCommand } from './generate_schema_command.js';
import yargs, { CommandModule } from 'yargs';
import { TestCommandRunner } from '../../../test-utils/command_runner.js';
import assert from 'node:assert';
import { BackendIdentifier } from '@aws-amplify/plugin-types';
import { AppBackendIdentifierResolver } from '../../../backend-identifier/backend_identifier_resolver.js';
import { SandboxBackendIdResolver } from '../../sandbox/sandbox_id_resolver.js';
import { BackendIdentifierResolverWithFallback } from '../../../backend-identifier/backend_identifier_with_sandbox_fallback.js';
import { getSecretClientWithAmplifyErrorHandling } from '@aws-amplify/backend-secret';
import { SchemaGenerator } from '@aws-amplify/schema-generator';

void describe('generate graphql-client-code command', () => {
  const namespaceResolver = {
    resolve: () => Promise.resolve('testAppName'),
  };

  const defaultResolver = new AppBackendIdentifierResolver(namespaceResolver);
  const sandboxIdResolver = new SandboxBackendIdResolver(namespaceResolver);
  const fakeSandboxId = 'my-fake-app-my-fake-username';
  mock.method(sandboxIdResolver, 'resolve', () => ({
    name: fakeSandboxId,
  }));

  const backendIdentifierResolver = new BackendIdentifierResolverWithFallback(
    defaultResolver,
    sandboxIdResolver,
  );

  const secretClient = getSecretClientWithAmplifyErrorHandling();

  const schemaGenerator = new SchemaGenerator();
  const schemaGeneratorGenerateMethod = mock.method(
    schemaGenerator,
    'generate',
    () => {
      return 'TYPESCRIPT_DATA_SCHEMA';
    },
  );

  const generateSchemaCommand = new GenerateSchemaCommand(
    backendIdentifierResolver,
    secretClient,
    schemaGenerator,
  );

  const parser = yargs().command(
    generateSchemaCommand as unknown as CommandModule,
  );
  const commandRunner = new TestCommandRunner(parser);

  const secretClientGetSecret = mock.method(secretClient, 'getSecret', () => {
    return Promise.resolve({
      name: 'CONN_STRING',
      value: 'FAKE_SECRET_VALUE',
      lastUpdated: new Date(),
      version: '1',
    });
  });

  beforeEach(() => {
    schemaGeneratorGenerateMethod.mock.resetCalls();
    secretClientGetSecret.mock.resetCalls();
  });

  void it('uses the sandbox id by default if stack or branch are not provided', async () => {
    await commandRunner.runCommand(
      'schema-from-database --connection-uri-secret CONN_STRING --out schema.rds.ts',
    );

    assert.equal(
      (secretClientGetSecret.mock.calls[0].arguments[0] as BackendIdentifier)
        .name,
      fakeSandboxId,
    );

    assert.equal(schemaGeneratorGenerateMethod.mock.calls.length, 1);
    assert.deepStrictEqual(
      schemaGeneratorGenerateMethod.mock.calls[0].arguments[0],
      {
        connectionUri: {
          secretName: 'CONN_STRING',
          value: 'FAKE_SECRET_VALUE',
        },
        out: 'schema.rds.ts',
      },
    );
  });

  void it('uses sandbox by default with custom ssl certificate', async () => {
    await commandRunner.runCommand(
      'schema-from-database --connection-uri-secret CONN_STRING --out schema.rds.ts --ssl-cert-secret SSL_CERT',
    );

    assert.equal(
      (secretClientGetSecret.mock.calls[0].arguments[0] as BackendIdentifier)
        .name,
      fakeSandboxId,
    );

    assert.equal(schemaGeneratorGenerateMethod.mock.calls.length, 1);
    assert.deepStrictEqual(
      schemaGeneratorGenerateMethod.mock.calls[0].arguments[0],
      {
        connectionUri: {
          secretName: 'CONN_STRING',
          value: 'FAKE_SECRET_VALUE',
        },
        sslCert: {
          secretName: 'SSL_CERT',
          value: 'FAKE_SECRET_VALUE',
        },
        out: 'schema.rds.ts',
      },
    );
  });

  void it('generates and writes schema for stack', async () => {
    await commandRunner.runCommand(
      'schema-from-database --stack amplify-reasonableName-userName-sandbox-testHash --connection-uri-secret CONN_STRING --out schema.rds.ts',
    );
    assert.equal(secretClientGetSecret.mock.callCount(), 1);
    assert.deepEqual(secretClientGetSecret.mock.calls[0].arguments[0], {
      namespace: 'reasonableName',
      name: 'userName',
      type: 'sandbox',
      hash: 'testHash',
    });
    assert.equal(schemaGeneratorGenerateMethod.mock.callCount(), 1);
    assert.deepEqual(schemaGeneratorGenerateMethod.mock.calls[0].arguments[0], {
      connectionUri: {
        secretName: 'CONN_STRING',
        value: 'FAKE_SECRET_VALUE',
      },
      out: 'schema.rds.ts',
    });
  });

  void it('generates and writes schema for branch', async () => {
    await commandRunner.runCommand(
      'schema-from-database --branch branch_name --appId app_id --connection-uri-secret CONN_STRING --out schema.rds.ts',
    );
    assert.equal(secretClientGetSecret.mock.callCount(), 1);
    assert.equal(schemaGeneratorGenerateMethod.mock.callCount(), 1);
    assert.deepEqual(schemaGeneratorGenerateMethod.mock.calls[0].arguments[0], {
      connectionUri: {
        secretName: 'CONN_STRING',
        value: 'FAKE_SECRET_VALUE',
      },
      out: 'schema.rds.ts',
    });
  });

  void it('requires connection uri secret name', async () => {
    const command = await commandRunner.runCommand(
      'schema-from-database --branch branch_name --appId app_id',
    );
    assert.match(command, /Missing required argument: connection-uri-secret/);
  });

  void it('fails if both stack and branch are present', async () => {
    const output = await commandRunner.runCommand(
      'schema-from-database --stack foo --branch baz',
    );
    assert.match(output, /Arguments .* are mutually exclusive/);
  });

  void it('fails if branch is present but not app id', async () => {
    const output = await commandRunner.runCommand(
      'schema-from-database --branch baz',
    );
    assert.match(output, /Missing dependent arguments:/);
    assert.match(output, /branch -> app-id/);
  });

  void it('shows available options in help output', async () => {
    const output = await commandRunner.runCommand(
      'schema-from-database --help',
    );
    assert.match(output, /--stack/);
    assert.match(output, /--app-id/);
    assert.match(output, /--branch/);
    assert.match(output, /--out/);
    assert.match(output, /--connection-uri-secret/);
  });
});
