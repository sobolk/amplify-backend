import { describe, it, mock } from 'node:test';
import {
  AuthClientConfigContributor,
  CustomClientConfigContributor,
  DataClientConfigContributor,
  StorageClientConfigContributor,
  VersionContributor,
} from './client_config_contributor_v1.js';
import {
  ClientConfig,
  clientConfigTypesV1_4,
} from '../client-config-types/client_config.js';
import assert from 'node:assert';
import {
  UnifiedBackendOutput,
  authOutputKey,
  customOutputKey,
  graphqlOutputKey,
  storageOutputKey,
} from '@aws-amplify/backend-output-schemas';
import { ModelIntrospectionSchemaAdapter } from '../model_introspection_schema_adapter.js';
import { S3Client } from '@aws-sdk/client-s3';
import { AmplifyClient } from '@aws-sdk/client-amplify';
import { CloudFormationClient } from '@aws-sdk/client-cloudformation';

const stubClientProvider = {
  getS3Client: () => new S3Client(),
  getAmplifyClient: () => new AmplifyClient(),
  getCloudFormationClient: () => new CloudFormationClient(),
};

void describe('auth client config contributor v1', () => {
  void it('returns an empty object if output has no auth output', () => {
    const contributor = new AuthClientConfigContributor();
    assert.deepStrictEqual(
      contributor.contribute({
        [graphqlOutputKey]: {
          version: '1',
          payload: {
            awsAppsyncApiEndpoint: 'testApiEndpoint',
            awsAppsyncRegion: 'us-east-1',
            awsAppsyncAuthenticationType: 'API_KEY',
            awsAppsyncAdditionalAuthenticationTypes: 'API_KEY',
            awsAppsyncApiKey: 'testApiKey',
            awsAppsyncApiId: 'testApiId',
            amplifyApiModelSchemaS3Uri: 'testApiSchemaUri',
          },
        },
      }),
      {},
    );
  });

  void it('returns translated config when output has auth', () => {
    const contributor = new AuthClientConfigContributor();
    assert.deepStrictEqual(
      contributor.contribute({
        [authOutputKey]: {
          version: '1',
          payload: {
            identityPoolId: 'testIdentityPoolId',
            userPoolId: 'testUserPoolId',
            webClientId: 'testWebClientId',
            authRegion: 'testRegion',
            allowUnauthenticatedIdentities: 'true',
          },
        },
      }),
      {
        auth: {
          user_pool_id: 'testUserPoolId',
          user_pool_client_id: 'testWebClientId',
          aws_region: 'testRegion',
          identity_pool_id: 'testIdentityPoolId',
          unauthenticated_identities_enabled: true,
        },
      } as Partial<clientConfigTypesV1_4.AWSAmplifyBackendOutputs>,
    );
  });

  void it('returns translated config without requiring allowUnauthenticatedIdentities', () => {
    const contributor = new AuthClientConfigContributor();
    assert.deepStrictEqual(
      contributor.contribute({
        [authOutputKey]: {
          version: '1',
          payload: {
            identityPoolId: 'testIdentityPoolId',
            userPoolId: 'testUserPoolId',
            webClientId: 'testWebClientId',
            authRegion: 'testRegion',
          },
        },
      }),
      {
        auth: {
          user_pool_id: 'testUserPoolId',
          user_pool_client_id: 'testWebClientId',
          aws_region: 'testRegion',
          identity_pool_id: 'testIdentityPoolId',
        },
      } as Partial<clientConfigTypesV1_4.AWSAmplifyBackendOutputs>,
    );
  });

  void it('returns default password length if not specified but other policies are provided', () => {
    const contributor = new AuthClientConfigContributor();
    assert.deepStrictEqual(
      contributor.contribute({
        [authOutputKey]: {
          version: '1',
          payload: {
            identityPoolId: 'testIdentityPoolId',
            userPoolId: 'testUserPoolId',
            webClientId: 'testWebClientId',
            authRegion: 'testRegion',
            passwordPolicyRequirements:
              '["REQUIRES_NUMBERS","REQUIRES_LOWERCASE","REQUIRES_SYMBOLS","REQUIRES_UPPERCASE"]',
          },
        },
      }),
      {
        auth: {
          user_pool_id: 'testUserPoolId',
          user_pool_client_id: 'testWebClientId',
          aws_region: 'testRegion',
          identity_pool_id: 'testIdentityPoolId',
          password_policy: {
            min_length: 8,
            require_lowercase: true,
            require_numbers: true,
            require_symbols: true,
            require_uppercase: true,
          },
        },
      } as Partial<clientConfigTypesV1_4.AWSAmplifyBackendOutputs>,
    );
  });

  void it('returns default password policies if only password length policy is provided', () => {
    const contributor = new AuthClientConfigContributor();
    assert.deepStrictEqual(
      contributor.contribute({
        [authOutputKey]: {
          version: '1',
          payload: {
            identityPoolId: 'testIdentityPoolId',
            userPoolId: 'testUserPoolId',
            webClientId: 'testWebClientId',
            authRegion: 'testRegion',
            passwordPolicyMinLength: '42',
          },
        },
      }),
      {
        auth: {
          user_pool_id: 'testUserPoolId',
          user_pool_client_id: 'testWebClientId',
          aws_region: 'testRegion',
          identity_pool_id: 'testIdentityPoolId',
          password_policy: {
            min_length: 42,
            require_lowercase: false,
            require_numbers: false,
            require_symbols: false,
            require_uppercase: false,
          },
        },
      } as Partial<clientConfigTypesV1_4.AWSAmplifyBackendOutputs>,
    );
  });

  void it('returns translated config when output has auth with zero-config attributes', () => {
    const groups = [
      {
        ADMINS: {
          precedence: 0,
        },
      },
      {
        EDITORS: {
          precedence: 1,
        },
      },
    ];
    const contributor = new AuthClientConfigContributor();
    assert.deepStrictEqual(
      contributor.contribute({
        [authOutputKey]: {
          version: '1',
          payload: {
            identityPoolId: 'testIdentityPoolId',
            userPoolId: 'testUserPoolId',
            webClientId: 'testWebClientId',
            authRegion: 'testRegion',
            passwordPolicyMinLength: '15',
            passwordPolicyRequirements:
              '["REQUIRES_NUMBERS","REQUIRES_LOWERCASE","REQUIRES_UPPERCASE"]',
            mfaTypes: '["SMS","TOTP"]',
            mfaConfiguration: 'OPTIONAL',
            verificationMechanisms: '["email","phone_number"]',
            usernameAttributes: '["email"]',
            signupAttributes: '["email"]',
            allowUnauthenticatedIdentities: 'true',
            oauthClientId: 'testWebClientId', // same as webClientId
            oauthCognitoDomain: 'testDomain',
            oauthScope: '["email","profile"]',
            oauthRedirectSignIn: 'http://callback.com,http://callback2.com',
            oauthRedirectSignOut: 'http://logout.com,http://logout2.com',
            oauthResponseType: 'code',
            socialProviders: `["GOOGLE","FACEBOOK","SIGN_IN_WITH_APPLE","LOGIN_WITH_AMAZON","GITHUB","DISCORD"]`,
            groups: JSON.stringify(groups),
          },
        },
      }),
      {
        auth: {
          user_pool_id: 'testUserPoolId',
          user_pool_client_id: 'testWebClientId',
          aws_region: 'testRegion',
          identity_pool_id: 'testIdentityPoolId',
          unauthenticated_identities_enabled: true,
          mfa_configuration: 'OPTIONAL',
          mfa_methods: ['SMS', 'TOTP'],
          password_policy: {
            require_lowercase: true,
            require_numbers: true,
            require_symbols: false,
            require_uppercase: true,
            min_length: 15,
          },
          standard_required_attributes: ['email'],
          username_attributes: ['email'],
          user_verification_types: ['email', 'phone_number'],
          oauth: {
            identity_providers: [
              'GOOGLE',
              'FACEBOOK',
              'SIGN_IN_WITH_APPLE',
              'LOGIN_WITH_AMAZON',
            ], //Only first class supported idp providers
            domain: 'testDomain',
            scopes: ['email', 'profile'],
            redirect_sign_in_uri: [
              'http://callback.com',
              'http://callback2.com',
            ],
            redirect_sign_out_uri: ['http://logout.com', 'http://logout2.com'],
            response_type: 'code',
          },
          groups: [
            {
              ADMINS: {
                precedence: 0,
              },
            },
            {
              EDITORS: {
                precedence: 1,
              },
            },
          ],
        },
      } as Partial<clientConfigTypesV1_4.AWSAmplifyBackendOutputs>,
    );
  });

  void it('returns translated config when output has oauth settings but no social providers', () => {
    const groups = [
      {
        ADMINS: {
          precedence: 0,
        },
      },
      {
        EDITORS: {
          precedence: 1,
        },
      },
    ];
    const contributor = new AuthClientConfigContributor();
    assert.deepStrictEqual(
      contributor.contribute({
        [authOutputKey]: {
          version: '1',
          payload: {
            identityPoolId: 'testIdentityPoolId',
            userPoolId: 'testUserPoolId',
            webClientId: 'testWebClientId',
            authRegion: 'testRegion',
            passwordPolicyMinLength: '15',
            passwordPolicyRequirements:
              '["REQUIRES_NUMBERS","REQUIRES_LOWERCASE","REQUIRES_UPPERCASE"]',
            mfaTypes: '["SMS","TOTP"]',
            mfaConfiguration: 'OPTIONAL',
            verificationMechanisms: '["email","phone_number"]',
            usernameAttributes: '["email"]',
            signupAttributes: '["email"]',
            allowUnauthenticatedIdentities: 'true',
            oauthClientId: 'testWebClientId', // same as webClientId
            oauthCognitoDomain: 'testDomain',
            oauthScope: '["email","profile"]',
            oauthRedirectSignIn: 'http://callback.com,http://callback2.com',
            oauthRedirectSignOut: 'http://logout.com,http://logout2.com',
            oauthResponseType: 'code',
            groups: JSON.stringify(groups),
          },
        },
      }),
      {
        auth: {
          user_pool_id: 'testUserPoolId',
          user_pool_client_id: 'testWebClientId',
          aws_region: 'testRegion',
          identity_pool_id: 'testIdentityPoolId',
          unauthenticated_identities_enabled: true,
          mfa_configuration: 'OPTIONAL',
          mfa_methods: ['SMS', 'TOTP'],
          password_policy: {
            require_lowercase: true,
            require_numbers: true,
            require_symbols: false,
            require_uppercase: true,
            min_length: 15,
          },
          standard_required_attributes: ['email'],
          username_attributes: ['email'],
          user_verification_types: ['email', 'phone_number'],
          oauth: {
            identity_providers: [],
            domain: 'testDomain',
            scopes: ['email', 'profile'],
            redirect_sign_in_uri: [
              'http://callback.com',
              'http://callback2.com',
            ],
            redirect_sign_out_uri: ['http://logout.com', 'http://logout2.com'],
            response_type: 'code',
          },
          groups: [
            {
              ADMINS: {
                precedence: 0,
              },
            },
            {
              EDITORS: {
                precedence: 1,
              },
            },
          ],
        },
      } as Partial<clientConfigTypesV1_4.AWSAmplifyBackendOutputs>,
    );
  });

  void describe('auth outputs with mfa', () => {
    const groups = [
      {
        ADMINS: {
          precedence: 0,
        },
      },
      {
        EDITORS: {
          precedence: 1,
        },
      },
    ];
    const contribution = {
      version: '1' as const,
      payload: {
        identityPoolId: 'testIdentityPoolId',
        userPoolId: 'testUserPoolId',
        webClientId: 'testWebClientId',
        authRegion: 'testRegion',
        passwordPolicyMinLength: '15',
        passwordPolicyRequirements:
          '["REQUIRES_NUMBERS","REQUIRES_LOWERCASE","REQUIRES_UPPERCASE"]',
        mfaTypes: '["SMS","TOTP"]',
        mfaConfiguration: 'OPTIONAL',
        verificationMechanisms: '["email","phone_number"]',
        usernameAttributes: '["email"]',
        signupAttributes: '["email"]',
        allowUnauthenticatedIdentities: 'true',
        oauthClientId: 'testWebClientId', // same as webClientId
        oauthCognitoDomain: 'testDomain',
        oauthScope: '["email","profile"]',
        oauthRedirectSignIn: 'http://callback.com,http://callback2.com',
        oauthRedirectSignOut: 'http://logout.com,http://logout2.com',
        oauthResponseType: 'code',
        groups: JSON.stringify(groups),
      },
    };

    const expected = {
      auth: {
        user_pool_id: 'testUserPoolId',
        user_pool_client_id: 'testWebClientId',
        aws_region: 'testRegion',
        identity_pool_id: 'testIdentityPoolId',
        unauthenticated_identities_enabled: true,
        mfa_configuration: 'OPTIONAL',
        mfa_methods: ['SMS', 'TOTP'],
        password_policy: {
          require_lowercase: true,
          require_numbers: true,
          require_symbols: false,
          require_uppercase: true,
          min_length: 15,
        },
        standard_required_attributes: ['email'],
        username_attributes: ['email'],
        user_verification_types: ['email', 'phone_number'],
        oauth: {
          identity_providers: [],
          domain: 'testDomain',
          scopes: ['email', 'profile'],
          redirect_sign_in_uri: ['http://callback.com', 'http://callback2.com'],
          redirect_sign_out_uri: ['http://logout.com', 'http://logout2.com'],
          response_type: 'code',
        },
        groups: [
          {
            ADMINS: {
              precedence: 0,
            },
          },
          {
            EDITORS: {
              precedence: 1,
            },
          },
        ],
      },
    } as Pick<clientConfigTypesV1_4.AWSAmplifyBackendOutputs, 'auth'>;

    void it('returns translated config when mfa is disabled', () => {
      const contributor = new AuthClientConfigContributor();

      contribution.payload.mfaConfiguration = 'OFF';
      expected.auth!.mfa_configuration = 'NONE';

      assert.deepStrictEqual(
        contributor.contribute({ [authOutputKey]: contribution }),
        expected,
      );
    });

    void it('returns translated config when mfa is optional', () => {
      const contributor = new AuthClientConfigContributor();

      contribution.payload.mfaConfiguration = 'OPTIONAL';
      expected.auth!.mfa_configuration = 'OPTIONAL';

      assert.deepStrictEqual(
        contributor.contribute({ [authOutputKey]: contribution }),
        expected,
      );
    });

    void it('returns translated config when mfa is required', () => {
      const contributor = new AuthClientConfigContributor();

      contribution.payload.mfaConfiguration = 'ON';
      expected.auth!.mfa_configuration = 'REQUIRED';

      assert.deepStrictEqual(
        contributor.contribute({ [authOutputKey]: contribution }),
        expected,
      );
    });
  });
});

void describe('data client config contributor v1', () => {
  void it('returns an empty object if output has no graphql output', async () => {
    const modelSchemaAdapter = new ModelIntrospectionSchemaAdapter(
      stubClientProvider,
    );

    mock.method(
      modelSchemaAdapter,
      'getModelIntrospectionSchemaFromS3Uri',
      () => undefined,
    );
    const contributor = new DataClientConfigContributor(modelSchemaAdapter);
    const contribution = await contributor.contribute({
      [authOutputKey]: {
        version: '1',
        payload: {
          identityPoolId: 'testIdentityPoolId',
          userPoolId: 'stuff',
          authRegion: 'testRegion ',
          webClientId: 'clientId',
          allowUnauthenticatedIdentities: 'true',
        },
      },
    });
    assert.deepStrictEqual(contribution, {});
  });

  void it('returns translated config when output has graphql', async () => {
    const modelSchemaAdapter = new ModelIntrospectionSchemaAdapter(
      stubClientProvider,
    );

    mock.method(
      modelSchemaAdapter,
      'getModelIntrospectionSchemaFromS3Uri',
      () => undefined,
    );
    const contributor = new DataClientConfigContributor(modelSchemaAdapter);
    const contribution = await contributor.contribute({
      [graphqlOutputKey]: {
        version: '1',
        payload: {
          awsAppsyncApiEndpoint: 'testApiEndpoint',
          awsAppsyncRegion: 'us-east-1',
          awsAppsyncAuthenticationType: 'API_KEY',
          awsAppsyncAdditionalAuthenticationTypes: 'API_KEY',
          awsAppsyncConflictResolutionMode: undefined,
          awsAppsyncApiKey: 'testApiKey',
          awsAppsyncApiId: 'testApiId',
          amplifyApiModelSchemaS3Uri: 'testApiSchemaUri',
        },
      },
    });
    assert.deepStrictEqual(contribution, {
      data: {
        api_key: 'testApiKey',
        default_authorization_type: 'API_KEY',
        authorization_types: ['API_KEY'],
        url: 'testApiEndpoint',
        aws_region: 'us-east-1',
      },
    } as Partial<clientConfigTypesV1_4.AWSAmplifyBackendOutputs>);
  });

  void it('returns translated config with model introspection when resolvable', async () => {
    const modelSchemaAdapter = new ModelIntrospectionSchemaAdapter(
      stubClientProvider,
    );

    mock.method(
      modelSchemaAdapter,
      'getModelIntrospectionSchemaFromS3Uri',
      () => ({
        version: 1,
        models: {},
        nonModels: {},
        enums: {},
      }),
    );
    const contributor = new DataClientConfigContributor(modelSchemaAdapter);
    const contribution = await contributor.contribute({
      [graphqlOutputKey]: {
        version: '1',
        payload: {
          awsAppsyncApiEndpoint: 'testApiEndpoint',
          awsAppsyncRegion: 'us-east-1',
          awsAppsyncAuthenticationType: 'API_KEY',
          awsAppsyncAdditionalAuthenticationTypes: 'API_KEY',
          awsAppsyncConflictResolutionMode: 'AUTO_MERGE',
          awsAppsyncApiKey: 'testApiKey',
          awsAppsyncApiId: 'testApiId',
          amplifyApiModelSchemaS3Uri: 'testApiSchemaUri',
        },
      },
    });
    assert.deepStrictEqual(contribution, {
      data: {
        api_key: 'testApiKey',
        default_authorization_type: 'API_KEY',
        authorization_types: ['API_KEY'],
        url: 'testApiEndpoint',
        aws_region: 'us-east-1',
        model_introspection: {
          version: 1,
          models: {},
          nonModels: {},
          enums: {},
        },
      },
    } as Partial<clientConfigTypesV1_4.AWSAmplifyBackendOutputs>);
  });
});

void describe('storage client config contributor v1', () => {
  void it('returns an empty object if output has no storage output', () => {
    const contributor = new StorageClientConfigContributor();
    assert.deepStrictEqual(
      contributor.contribute({
        [graphqlOutputKey]: {
          version: '1',
          payload: {
            awsAppsyncApiEndpoint: 'testApiEndpoint',
            awsAppsyncRegion: 'us-east-1',
            awsAppsyncAuthenticationType: 'API_KEY',
            awsAppsyncAdditionalAuthenticationTypes: 'API_KEY',
            awsAppsyncApiKey: 'testApiKey',
            awsAppsyncApiId: 'testApiId',
            amplifyApiModelSchemaS3Uri: 'testApiSchemaUri',
          },
        },
      }),
      {},
    );
  });

  void it('returns translated config when output has storage', () => {
    const contributor = new StorageClientConfigContributor();
    const buckets = JSON.stringify([
      JSON.stringify({
        name: 'testName',
        bucketName: 'testBucketName',
        storageRegion: 'testRegion',
        paths: {
          'path/*': {
            guest: ['get', 'list'],
            authenticated: ['read', 'write', 'delete'],
            groupsADMIN: ['read', 'write', 'list', 'delete'],
            // eslint-disable-next-line spellcheck/spell-checker
            entityidentity: ['read', 'write'],
          },
        },
      }),
    ]);
    assert.deepStrictEqual(
      contributor.contribute({
        [storageOutputKey]: {
          version: '1',
          payload: {
            bucketName: 'testBucketName',
            storageRegion: 'testRegion',
            buckets,
          },
        },
      }),
      {
        storage: {
          aws_region: 'testRegion',
          bucket_name: 'testBucketName',
          buckets: [
            {
              name: 'testName',
              bucket_name: 'testBucketName',
              aws_region: 'testRegion',
              paths: {
                'path/*': {
                  guest: ['get', 'list'],
                  authenticated: ['read', 'write', 'delete'],
                  groupsADMIN: ['read', 'write', 'list', 'delete'],
                  // eslint-disable-next-line spellcheck/spell-checker
                  entityidentity: ['read', 'write'],
                },
              },
            },
          ],
        },
      },
    );
  });
});

void describe('Custom client config contributor v1', () => {
  const customClientConfigContributor = new CustomClientConfigContributor();

  void it('contributes custom output when present', () => {
    const customOutputs: Partial<ClientConfig> = {
      auth: {
        aws_region: 'sampleRegion',
        identity_pool_id: 'sampleIdentityPoolId',
        user_pool_client_id: 'sampleUserPoolClientId',
        user_pool_id: 'userPoolId',
      },
      custom: {
        output1: 'val1',
        output2: 'val2',
      },
    };
    const backendOutput: UnifiedBackendOutput = {
      [customOutputKey]: {
        version: '1',
        payload: {
          customOutputs: JSON.stringify(customOutputs),
        },
      },
    };

    const contribution =
      customClientConfigContributor.contribute(backendOutput);

    assert.deepEqual(contribution, customOutputs);
  });

  void it('contributes empty if no custom outputs are present', () => {
    const backendOutput: UnifiedBackendOutput = {};

    const contribution =
      customClientConfigContributor.contribute(backendOutput);

    assert.deepEqual(contribution, {});
  });
});

void describe('Custom client config contributor v1', () => {
  void it('contributes the version correctly', () => {
    assert.deepEqual(new VersionContributor().contribute(), { version: '1.4' });
  });
});
