import { describe, it } from 'node:test';
import assert from 'node:assert';
import { App, Stack } from 'aws-cdk-lib';
import { ConversationHandlerFunction } from './conversation_handler_construct';
import { Template } from 'aws-cdk-lib/assertions';
import path from 'path';
import { StackMetadataBackendOutputStorageStrategy } from '@aws-amplify/backend-output-storage';
import { ApplicationLogLevel } from 'aws-cdk-lib/aws-lambda';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import transform from 'lodash.transform';

void describe('Conversation Handler Function construct', () => {
  void it('creates handler with log group with JWT token redacting policy', () => {
    const app = new App();
    const stack = new Stack(app);
    new ConversationHandlerFunction(stack, 'conversationHandler', {
      models: [],
    });
    const template = Template.fromStack(stack);
    const logGroups = template.findResources('AWS::Logs::LogGroup');
    assert.strictEqual(Object.values(logGroups).length, 1);
    const logGroupLogicalId = Object.keys(logGroups)[0];
    const logGroup = Object.values(logGroups)[0];
    let expectedDataProtectionPolicy: Record<string, unknown> = {
      Name: 'data-protection-policy-cdk',
      Description: 'cdk generated data protection policy',
      Version: '2021-06-01',
      Configuration: {
        CustomDataIdentifier: [
          {
            Name: 'JWTToken',
            Regex: 'ey[A-Za-z0-9-_=]+\\.[A-Za-z0-9-_=]+\\.?[A-Za-z0-9-_.+/=]*',
          },
        ],
      },
      Statement: [
        {
          Sid: 'audit-statement-cdk',
          DataIdentifier: ['JWTToken'],
          Operation: {
            Audit: {
              FindingsDestination: {},
            },
          },
        },
        {
          Sid: 'redact-statement-cdk',
          DataIdentifier: ['JWTToken'],
          Operation: {
            // eslint-disable-next-line spellcheck/spell-checker
            Deidentify: {
              MaskConfig: {},
            },
          },
        },
      ],
    };
    if ('name' in logGroup.Properties.DataProtectionPolicy) {
      // we may run some tests with older CDK version.
      // in that case the expected keys are all lower case, see https://github.com/aws/aws-cdk/pull/33462
      const keysToCamelCase = (target: Record<string, unknown>) =>
        transform(
          target,
          (
            result: { [x: string | number]: unknown },
            val: unknown,
            key: string | number,
          ) => {
            if (typeof val === 'object') {
              val = keysToCamelCase(val as Record<string, unknown>);
            }
            if (typeof key === 'string') {
              key = `${key.slice(0, 1).toLowerCase()}${key.slice(1)}`;
            }
            result[key] = val;
          },
        );
      expectedDataProtectionPolicy = keysToCamelCase(
        expectedDataProtectionPolicy,
      );
    }
    assert.deepStrictEqual(
      logGroup.Properties.DataProtectionPolicy,
      expectedDataProtectionPolicy,
    );
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'index.handler',
      LoggingConfig: {
        LogGroup: {
          Ref: logGroupLogicalId,
        },
      },
    });
  });

  void it('creates handler with access to bedrock models', () => {
    const app = new App();
    const stack = new Stack(app);
    new ConversationHandlerFunction(stack, 'conversationHandler', {
      models: [
        {
          modelId: 'model1',
          region: 'region1',
        },
        {
          modelId: 'model2',
          region: 'region2',
        },
      ],
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Action: [
              'bedrock:InvokeModel',
              'bedrock:InvokeModelWithResponseStream',
            ],
            Effect: 'Allow',
            Resource: [
              'arn:aws:bedrock:region1::foundation-model/model1',
              'arn:aws:bedrock:region2::foundation-model/model2',
            ],
          },
        ],
      },
      Roles: [
        {
          // eslint-disable-next-line spellcheck/spell-checker
          Ref: 'conversationHandlerconversationHandlerFunctionServiceRole49C4C6FB',
        },
      ],
    });
  });

  void it('uses stack region if region is not specified', () => {
    const app = new App();
    const stack = new Stack(app);
    new ConversationHandlerFunction(stack, 'conversationHandler', {
      models: [
        {
          modelId: 'testModelId',
        },
      ],
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Action: [
              'bedrock:InvokeModel',
              'bedrock:InvokeModelWithResponseStream',
            ],
            Effect: 'Allow',
            Resource: {
              'Fn::Join': [
                '',
                [
                  'arn:aws:bedrock:',
                  {
                    Ref: 'AWS::Region',
                  },
                  '::foundation-model/testModelId',
                ],
              ],
            },
          },
        ],
      },
      Roles: [
        {
          // eslint-disable-next-line spellcheck/spell-checker
          Ref: 'conversationHandlerconversationHandlerFunctionServiceRole49C4C6FB',
        },
      ],
    });
  });

  void it('does not store output if output strategy is absent', () => {
    const app = new App();
    const stack = new Stack(app);
    new ConversationHandlerFunction(stack, 'conversationHandler', {
      models: [
        {
          modelId: 'testModelId',
        },
      ],
      outputStorageStrategy: undefined,
    });
    const template = Template.fromStack(stack);
    const output = template.findOutputs(
      'definedConversationHandlers',
    ).definedConversationHandlers;
    assert.ok(!output);
  });

  void it('stores output if output strategy is present', () => {
    const app = new App();
    const stack = new Stack(app);
    new ConversationHandlerFunction(stack, 'conversationHandler', {
      models: [
        {
          modelId: 'testModelId',
        },
      ],
      outputStorageStrategy: new StackMetadataBackendOutputStorageStrategy(
        stack,
      ),
    });
    const template = Template.fromStack(stack);
    const outputValue = template.findOutputs('definedConversationHandlers')
      .definedConversationHandlers.Value;
    assert.deepStrictEqual(outputValue, {
      'Fn::Join': [
        '',
        [
          '["',
          {
            /* eslint-disable spellcheck/spell-checker */
            Ref: 'conversationHandlerconversationHandlerFunction45BC2E1F',
            /* eslint-enable spellcheck/spell-checker */
          },
          '"]',
        ],
      ],
    });
  });

  void it('throws if entry is not absolute', () => {
    const app = new App();
    const stack = new Stack(app);
    assert.throws(() => {
      new ConversationHandlerFunction(stack, 'conversationHandler', {
        entry: './test-assets/custom_handler.js',
        models: [],
      });
    });
  });

  void it('creates handler with custom handler', () => {
    const app = new App();
    const stack = new Stack(app);
    new ConversationHandlerFunction(stack, 'conversationHandler', {
      entry: path.resolve(__dirname, './test-assets/custom_handler.js'),
      models: [],
    });
    const template = Template.fromStack(stack);
    // This is a shallow assertion to check if synth does not fail.
    // Testing actual body of custom handler requires higher level testing strategy.
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'index.handler',
    });
  });

  void describe('memory property', () => {
    void it('sets valid memory', () => {
      const app = new App();
      const stack = new Stack(app);
      new ConversationHandlerFunction(stack, 'conversationHandler', {
        models: [],
        memoryMB: 234,
      });
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Lambda::Function', {
        MemorySize: 234,
      });
    });

    void it('sets default memory', () => {
      const app = new App();
      const stack = new Stack(app);
      new ConversationHandlerFunction(stack, 'conversationHandler', {
        models: [],
      });
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Lambda::Function', {
        MemorySize: 512,
      });
    });

    void it('throws on memory below 128 MB', () => {
      assert.throws(() => {
        const app = new App();
        const stack = new Stack(app);
        new ConversationHandlerFunction(stack, 'conversationHandler', {
          models: [],
          memoryMB: 127,
        });
      }, new Error('memoryMB must be a whole number between 128 and 10240 inclusive'));
    });

    void it('throws on memory above 10240 MB', () => {
      assert.throws(() => {
        const app = new App();
        const stack = new Stack(app);
        new ConversationHandlerFunction(stack, 'conversationHandler', {
          models: [],
          memoryMB: 10241,
        });
      }, new Error('memoryMB must be a whole number between 128 and 10240 inclusive'));
    });

    void it('throws on fractional memory', () => {
      assert.throws(() => {
        const app = new App();
        const stack = new Stack(app);
        new ConversationHandlerFunction(stack, 'conversationHandler', {
          models: [],
          memoryMB: 256.2,
        });
      }, new Error('memoryMB must be a whole number between 128 and 10240 inclusive'));
    });
  });

  void describe('timeout property', () => {
    void it('sets valid timeout', () => {
      const app = new App();
      const stack = new Stack(app);
      new ConversationHandlerFunction(stack, 'conversationHandler', {
        models: [],
        timeoutSeconds: 124,
      });
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Lambda::Function', {
        Timeout: 124,
      });
    });

    void it('sets default timeout', () => {
      const app = new App();
      const stack = new Stack(app);
      new ConversationHandlerFunction(stack, 'conversationHandler', {
        models: [],
      });
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Lambda::Function', {
        Timeout: 60,
      });
    });

    void it('throws on timeout below 1', () => {
      assert.throws(() => {
        const app = new App();
        const stack = new Stack(app);
        new ConversationHandlerFunction(stack, 'conversationHandler', {
          models: [],
          timeoutSeconds: 0,
        });
      }, new Error('timeoutSeconds must be a whole number between 1 and 900 inclusive'));
    });

    void it('throws on timeout above 15 minutes', () => {
      assert.throws(() => {
        const app = new App();
        const stack = new Stack(app);
        new ConversationHandlerFunction(stack, 'conversationHandler', {
          models: [],
          timeoutSeconds: 60 * 15 + 1,
        });
      }, new Error('timeoutSeconds must be a whole number between 1 and 900 inclusive'));
    });

    void it('throws on fractional memory', () => {
      assert.throws(() => {
        const app = new App();
        const stack = new Stack(app);
        new ConversationHandlerFunction(stack, 'conversationHandler', {
          models: [],
          memoryMB: 256.2,
        });
      }, new Error('memoryMB must be a whole number between 128 and 10240 inclusive'));
    });
  });

  void describe('logging options', () => {
    void it('sets log level', () => {
      const app = new App();
      const stack = new Stack(app);
      new ConversationHandlerFunction(stack, 'conversationHandler', {
        models: [],
        logging: {
          level: ApplicationLogLevel.DEBUG,
        },
      });
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Lambda::Function', {
        LoggingConfig: {
          ApplicationLogLevel: 'DEBUG',
          LogFormat: 'JSON',
        },
      });
    });

    void it('sets log retention', () => {
      const app = new App();
      const stack = new Stack(app);
      new ConversationHandlerFunction(stack, 'conversationHandler', {
        models: [],
        logging: {
          retention: RetentionDays.ONE_YEAR,
        },
      });
      const template = Template.fromStack(stack);

      template.hasResourceProperties('AWS::Logs::LogGroup', {
        RetentionInDays: 365,
      });
    });
  });
});
