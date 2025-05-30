# @aws-amplify/backend

## 1.16.0

### Minor Changes

- d09014b: Add imported tables to data.
- 995c3de: Use Node 20 as default runtime in functions
- d09014b: integrate with aws cdk toolkit
- 119a05f: add addEnvironment for provided functions

### Patch Changes

- d50ffb7: updated tests and changed client config to v1.4
- 119a05f: update shape of AMPLIFY_SSM_ENV_CONFIG
- d8a7304: update api after bumping typescript
- Updated dependencies [2ba971d]
- Updated dependencies [8483297]
- Updated dependencies [baaaba9]
- Updated dependencies [d09014b]
- Updated dependencies [119a05f]
- Updated dependencies [a93aa54]
- Updated dependencies [d09014b]
- Updated dependencies [995c3de]
- Updated dependencies [d09014b]
- Updated dependencies [ece77e7]
- Updated dependencies [d50ffb7]
- Updated dependencies [d09014b]
- Updated dependencies [d09014b]
- Updated dependencies [1f44f11]
- Updated dependencies [d09014b]
- Updated dependencies [119a05f]
- Updated dependencies [d8a7304]
- Updated dependencies [96fe987]
  - @aws-amplify/backend-data@1.6.0
  - @aws-amplify/backend-function@1.14.0
  - @aws-amplify/platform-core@1.8.0
  - @aws-amplify/plugin-types@1.10.0
  - @aws-amplify/backend-auth@1.7.0
  - @aws-amplify/backend-output-storage@1.3.0
  - @aws-amplify/backend-storage@1.4.0
  - @aws-amplify/client-config@1.7.0
  - @aws-amplify/backend-secret@1.4.0
  - @aws-amplify/backend-output-schemas@1.6.0

## 1.15.0

### Minor Changes

- d854912: Add imported tables to data.
- 8f59d16: integrate with aws cdk toolkit

### Patch Changes

- Updated dependencies [f9f31c7]
- Updated dependencies [d854912]
- Updated dependencies [8f59d16]
- Updated dependencies [0cc2de3]
- Updated dependencies [b2f9042]
- Updated dependencies [9a00a6b]
  - @aws-amplify/backend-function@1.13.0
  - @aws-amplify/backend-data@1.5.0
  - @aws-amplify/plugin-types@1.9.0
  - @aws-amplify/backend-auth@1.6.0
  - @aws-amplify/backend-output-storage@1.2.0
  - @aws-amplify/backend-storage@1.3.0
  - @aws-amplify/client-config@1.6.0
  - @aws-amplify/platform-core@1.7.0
  - @aws-amplify/backend-secret@1.3.0
  - @aws-amplify/backend-output-schemas@1.5.0

## 1.14.3

### Patch Changes

- 99f5d0b: lint and format with new version of prettier
- 2102071: Upgrade CDK version to 2.180.0
- Updated dependencies [99f5d0b]
- Updated dependencies [fad46a4]
- Updated dependencies [2102071]
- Updated dependencies [cf79696]
  - @aws-amplify/backend-output-schemas@1.4.1
  - @aws-amplify/backend-output-storage@1.1.5
  - @aws-amplify/backend-function@1.12.3
  - @aws-amplify/backend-storage@1.2.6
  - @aws-amplify/backend-secret@1.2.0
  - @aws-amplify/client-config@1.5.8
  - @aws-amplify/platform-core@1.6.5
  - @aws-amplify/backend-auth@1.5.1
  - @aws-amplify/backend-data@1.4.1
  - @aws-amplify/plugin-types@1.8.1

## 1.14.2

### Patch Changes

- 3298c3a: update naming of storage access policies to also use stack
- Updated dependencies [dafb530]
- Updated dependencies [3298c3a]
- Updated dependencies [aec5e08]
  - @aws-amplify/platform-core@1.6.4
  - @aws-amplify/backend-storage@1.2.5

## 1.14.1

### Patch Changes

- 44c3769: paginate getParameter call when there are more than 10 parameters
- Updated dependencies [de90deb]
- Updated dependencies [44c3769]
- Updated dependencies [bc07307]
  - @aws-amplify/client-config@1.5.7
  - @aws-amplify/backend-function@1.12.2
  - @aws-amplify/platform-core@1.6.2

## 1.14.0

### Minor Changes

- ff2f2ce: add sms configuration and custom sms sender to auth

### Patch Changes

- ff2f2ce: fixed violations to cause propagation lint rule
- 501ec56: remove the workaround for no-misused-promises as it broke lambdas execution
- Updated dependencies [ff2f2ce]
- Updated dependencies [ff2f2ce]
- Updated dependencies [ff2f2ce]
- Updated dependencies [501ec56]
  - @aws-amplify/backend-function@1.12.1
  - @aws-amplify/backend-auth@1.5.0

## 1.13.0

### Minor Changes

- 3f521c3: add custom provided function support to define function

### Patch Changes

- c5d54c2: Update getAmplifyDataClient to have strict env type and remove narrowing logic
- Updated dependencies [c5d54c2]
- Updated dependencies [3f521c3]
- Updated dependencies [a712983]
  - @aws-amplify/backend-function@1.12.0
  - @aws-amplify/platform-core@1.5.1

## 1.12.0

### Minor Changes

- a7506f9: added data logging api to defineData
- a7506f9: adds support for architecture property on defineFunction

### Patch Changes

- Updated dependencies [a7506f9]
- Updated dependencies [a7506f9]
- Updated dependencies [a7506f9]
- Updated dependencies [a7506f9]
  - @aws-amplify/client-config@1.5.5
  - @aws-amplify/backend-function@1.11.0
  - @aws-amplify/platform-core@1.5.0
  - @aws-amplify/backend-data@1.4.0
  - @aws-amplify/plugin-types@1.7.0

## 1.11.0

### Minor Changes

- fbf209e: Add GraphQL API ID and Amplify environment name to custom JS resolver stash

### Patch Changes

- 07fe7d4: Allow apiKeyAuthorizationMode to be undefined if defaultAuthorizationMode is apiKey
- Updated dependencies [07fe7d4]
- Updated dependencies [fbf209e]
  - @aws-amplify/backend-data@1.3.0

## 1.10.0

### Minor Changes

- 560878f: updates layer to also use layername:version

### Patch Changes

- Updated dependencies [95942c5]
- Updated dependencies [3cf0738]
- Updated dependencies [f679cf6]
- Updated dependencies [d32e4cd]
- Updated dependencies [560878f]
- Updated dependencies [f193105]
  - @aws-amplify/platform-core@1.4.0
  - @aws-amplify/client-config@1.5.4
  - @aws-amplify/backend-function@1.10.0
  - @aws-amplify/backend-data@1.2.3

## 1.9.0

### Minor Changes

- 5cbe318: Add lambda data client
- 72b2fe0: Add support to `@aws-amplify/backend-function` for Node 22

  Add support to `@aws-amplify/backend-function` for Node 22, which is a [supported Lambda runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels) that was added in [`aws-cdk-lib/aws-lambda` version `2.168.0`](https://github.com/aws/aws-cdk/releases/tag/v2.168.0) on November 20th, 2024

- 65abf6a: Add options to control log settings

### Patch Changes

- 72b2fe0: update aws-cdk lib to ^2.168.0
- e0e62bd: Backend Secrets now use a single custom resource to reduce concurrent lambda executions.
- Updated dependencies [5cbe318]
- Updated dependencies [cfdc854]
- Updated dependencies [72b2fe0]
- Updated dependencies [72b2fe0]
- Updated dependencies [65abf6a]
- Updated dependencies [d227f96]
- Updated dependencies [f6ba240]
- Updated dependencies [d227f96]
  - @aws-amplify/backend-function@1.9.0
  - @aws-amplify/backend-data@1.2.2
  - @aws-amplify/platform-core@1.3.0
  - @aws-amplify/backend-output-storage@1.1.4
  - @aws-amplify/backend-storage@1.2.4
  - @aws-amplify/client-config@1.5.3
  - @aws-amplify/backend-auth@1.4.2
  - @aws-amplify/plugin-types@1.6.0

## 1.8.0

### Minor Changes

- f1db886: add resourceGroupName prop to function

### Patch Changes

- 97697a9: set removal policy for resources to destroy in sandbox deployments
- Updated dependencies [f1db886]
- Updated dependencies [71ef398]
  - @aws-amplify/backend-function@1.8.0
  - @aws-amplify/backend-storage@1.2.3
  - @aws-amplify/plugin-types@1.5.0
  - @aws-amplify/backend-auth@1.4.1
  - @aws-amplify/backend-data@1.2.1
  - @aws-amplify/platform-core@1.2.1

## 1.7.0

### Minor Changes

- 90a7c49: Add support for referenceAuth.

### Patch Changes

- 12cf209: update error mapping to catch when Lambda layer ARN regions do not match function region
- Updated dependencies [90a7c49]
- Updated dependencies [12cf209]
  - @aws-amplify/backend-auth@1.4.0
  - @aws-amplify/backend-data@1.2.0
  - @aws-amplify/plugin-types@1.4.0
  - @aws-amplify/backend-function@1.7.5

## 1.6.2

### Patch Changes

- 583a3f2: Fix detection of AmplifyErrors
- Updated dependencies [583a3f2]
  - @aws-amplify/platform-core@1.2.0
  - @aws-amplify/backend-data@1.1.7

## 1.6.1

### Patch Changes

- 4e97389: add validation if layer arn region does not match function region
- Updated dependencies [d0d8d4e]
- Updated dependencies [4e97389]
  - @aws-amplify/client-config@1.5.2
  - @aws-amplify/backend-function@1.7.4

## 1.6.0

### Minor Changes

- 11d62fe: Add support for custom Lambda function email senders in Auth construct

### Patch Changes

- b56d344: update aws-cdk lib to ^2.158.0
- Updated dependencies [11d62fe]
- Updated dependencies [b56d344]
  - @aws-amplify/backend-auth@1.3.0
  - @aws-amplify/backend-output-storage@1.1.3
  - @aws-amplify/backend-function@1.7.3
  - @aws-amplify/backend-storage@1.2.2
  - @aws-amplify/client-config@1.5.1
  - @aws-amplify/backend-data@1.1.6
  - @aws-amplify/plugin-types@1.3.1

## 1.5.2

### Patch Changes

- 601a2c1: dedupe environment variables in amplify env type generator
- Updated dependencies [601a2c1]
  - @aws-amplify/backend-function@1.7.2

## 1.5.1

### Patch Changes

- 5f46d8d: add user groups to outputs
- Updated dependencies [0d6489d]
- Updated dependencies [bd4ff4d]
- Updated dependencies [5f46d8d]
  - @aws-amplify/backend-data@1.1.5
  - @aws-amplify/backend-function@1.7.1
  - @aws-amplify/backend-output-schemas@1.4.0
  - @aws-amplify/client-config@1.5.0

## 1.5.0

### Minor Changes

- 4720412: Add minify option to defineFunction

### Patch Changes

- Updated dependencies [f87cc87]
- Updated dependencies [4720412]
  - @aws-amplify/backend-secret@1.1.4
  - @aws-amplify/backend-function@1.7.0

## 1.4.0

### Minor Changes

- f5d0ab4: adds support to reference existing layers in defineFunction

### Patch Changes

- Updated dependencies [f5d0ab4]
  - @aws-amplify/backend-function@1.6.0

## 1.3.2

### Patch Changes

- 0a5e51c: Stream conversation logs in sandbox
- Updated dependencies [0a5e51c]
  - @aws-amplify/backend-output-schemas@1.3.0

## 1.3.1

### Patch Changes

- d538ecc: add storage access rules to outputs
- Updated dependencies [d538ecc]
  - @aws-amplify/client-config@1.4.0
  - @aws-amplify/backend-output-schemas@1.2.1
  - @aws-amplify/backend-storage@1.2.1

## 1.3.0

### Minor Changes

- 87dbf41: expose stack property for backend, function resource, storage resource, and auth resource

### Patch Changes

- Updated dependencies [87dbf41]
- Updated dependencies [87dbf41]
  - @aws-amplify/backend-function@1.5.0
  - @aws-amplify/backend-auth@1.2.0
  - @aws-amplify/backend-storage@1.2.0
  - @aws-amplify/plugin-types@1.3.0

## 1.2.2

### Patch Changes

- e648e8e: added main field to package.json so these packages are resolvable
- Updated dependencies [ffc3b42]
- Updated dependencies [e648e8e]
- Updated dependencies [0ff73ec]
- Updated dependencies [c9c873c]
- Updated dependencies [8dd7286]
- Updated dependencies [e648e8e]
  - @aws-amplify/backend-data@1.1.4
  - @aws-amplify/backend-function@1.4.1
  - @aws-amplify/backend-storage@1.1.3
  - @aws-amplify/backend-secret@1.1.2
  - @aws-amplify/client-config@1.3.1
  - @aws-amplify/backend-auth@1.1.5
  - @aws-amplify/backend-output-storage@1.1.2
  - @aws-amplify/plugin-types@1.2.2

## 1.2.1

### Patch Changes

- d4c10fe: add check to `@aws-amplify/backend` entrypoint to throw early in a browser context
- Updated dependencies [99c8b6a]
- Updated dependencies [038b54d]
  - @aws-amplify/backend-function@1.4.0
  - @aws-amplify/platform-core@1.1.0

## 1.2.0

### Minor Changes

- 4ea9a5e: re-add the V1 of client config version

### Patch Changes

- Updated dependencies [4ea9a5e]
- Updated dependencies [c8d1f10]
- Updated dependencies [5b6ae85]
  - @aws-amplify/client-config@1.3.0
  - @aws-amplify/backend-data@1.1.3
  - @aws-amplify/platform-core@1.0.7

## 1.1.1

### Patch Changes

- a65371c: upgrade aws-cdk and aws-cdk-lib to ^2.152.0
- Updated dependencies [4cce19f]
- Updated dependencies [a65371c]
  - @aws-amplify/platform-core@1.0.6
  - @aws-amplify/backend-output-storage@1.1.1
  - @aws-amplify/backend-function@1.3.2
  - @aws-amplify/backend-storage@1.1.1
  - @aws-amplify/backend-auth@1.1.2
  - @aws-amplify/backend-data@1.1.1
  - @aws-amplify/plugin-types@1.2.1

## 1.1.0

### Minor Changes

- d9b83a1: support adding more than one bucket

### Patch Changes

- Updated dependencies [d9b83a1]
  - @aws-amplify/backend-output-schemas@1.2.0
  - @aws-amplify/backend-output-storage@1.1.0
  - @aws-amplify/backend-storage@1.1.0
  - @aws-amplify/client-config@1.2.0
  - @aws-amplify/plugin-types@1.2.0

## 1.0.5

### Patch Changes

- 3c698e0: upgrade AWS SDK packages to latest
- Updated dependencies [3c698e0]
- Updated dependencies [eab6ddb]
- Updated dependencies [320a86d]
  - @aws-amplify/backend-function@1.3.1
  - @aws-amplify/backend-secret@1.0.1
  - @aws-amplify/client-config@1.1.3
  - @aws-amplify/platform-core@1.0.5
  - @aws-amplify/plugin-types@1.1.1

## 1.0.4

### Patch Changes

- 0200d11: Bump baseline CDK version to 2.132.0 to support AWS SDK bundling
- Updated dependencies [4ec7cd8]
- Updated dependencies [545f61d]
- Updated dependencies [8968cf4]
- Updated dependencies [4b249ed]
- Updated dependencies [0200d11]
- Updated dependencies [1f4c6e0]
- Updated dependencies [0200d11]
- Updated dependencies [20bf679]
  - @aws-amplify/backend-auth@1.1.0
  - @aws-amplify/backend-storage@1.0.4
  - @aws-amplify/client-config@1.0.5
  - @aws-amplify/backend-function@1.1.0
  - @aws-amplify/backend-output-storage@1.0.2
  - @aws-amplify/backend-data@1.0.3
  - @aws-amplify/plugin-types@1.0.1

## 1.0.3

### Patch Changes

- 530bf2c: chore: disambiguate url imports and import from node:url explicitly
- Updated dependencies [1146bbd]
- Updated dependencies [530bf2c]
- Updated dependencies [925f97d]
  - @aws-amplify/client-config@1.0.3
  - @aws-amplify/backend-function@1.0.3
  - @aws-amplify/backend-storage@1.0.2
  - @aws-amplify/platform-core@1.0.1
  - @aws-amplify/backend-data@1.0.2

## 1.0.2

### Patch Changes

- 1dc61de: bumping client-config version
- Updated dependencies [1dc61de]
- Updated dependencies [f7b8089]
  - @aws-amplify/backend-auth@1.0.2
  - @aws-amplify/client-config@1.0.2

## 1.0.1

### Patch Changes

- Updated dependencies [86b639a]
- Updated dependencies [15c2b7c]
  - @aws-amplify/backend-function@1.0.1
  - @aws-amplify/backend-output-schemas@1.1.0
  - @aws-amplify/backend-data@1.0.1
  - @aws-amplify/backend-output-storage@1.0.1
  - @aws-amplify/backend-storage@1.0.1
  - @aws-amplify/client-config@1.0.1
  - @aws-amplify/backend-auth@1.0.1

## 1.0.0

### Major Changes

- 51195e2: Major version bump for all public pacakges.

### Patch Changes

- Updated dependencies [51195e2]
- Updated dependencies [dc193cd]
  - @aws-amplify/backend-auth@1.0.0
  - @aws-amplify/backend-data@1.0.0
  - @aws-amplify/backend-function@1.0.0
  - @aws-amplify/backend-output-schemas@1.0.0
  - @aws-amplify/backend-output-storage@1.0.0
  - @aws-amplify/backend-secret@1.0.0
  - @aws-amplify/backend-storage@1.0.0
  - @aws-amplify/client-config@1.0.0
  - @aws-amplify/platform-core@1.0.0
  - @aws-amplify/plugin-types@1.0.0

## 0.15.1

### Patch Changes

- 1f38466: Replace amplify command occurrences with ampx and related renaming
- Updated dependencies [1f38466]
- Updated dependencies [8dfab74]
  - @aws-amplify/client-config@0.9.7
  - @aws-amplify/backend-data@0.15.0

## 0.15.0

### Minor Changes

- ca58bc2: re-increment versions for PR# 1397

### Patch Changes

- Updated dependencies [ca58bc2]
  - @aws-amplify/backend-data@0.14.0
  - @aws-amplify/client-config@0.9.6

## 0.14.0

### Minor Changes

- c4a88d3: use latest data-schema

### Patch Changes

- Updated dependencies [a817f2d]
- Updated dependencies [c4a88d3]
  - @aws-amplify/client-config@0.9.5
  - @aws-amplify/backend-data@0.13.0

## 0.13.4

### Patch Changes

- ce5a5ac: Update types for configs not generated by Amplify when adding outputs
- Updated dependencies [c93ecde]
- Updated dependencies [8995e3b]
- Updated dependencies [ce5a5ac]
  - @aws-amplify/backend-auth@0.7.0
  - @aws-amplify/client-config@0.9.4
  - @aws-amplify/plugin-types@0.10.0
  - @aws-amplify/platform-core@0.5.1
  - @aws-amplify/backend-data@0.12.1
  - @aws-amplify/backend-function@0.9.1
  - @aws-amplify/backend-secret@0.4.6
  - @aws-amplify/backend-storage@0.7.1
  - @aws-amplify/backend-output-storage@0.4.1

## 0.13.3

### Patch Changes

- Updated dependencies [ba684bd]
- Updated dependencies [74d2cd4]
- Updated dependencies [d0f1452]
  - @aws-amplify/backend-data@0.12.0
  - @aws-amplify/backend-auth@0.6.1
  - @aws-amplify/client-config@0.9.3

## 0.13.2

### Patch Changes

- Updated dependencies [067ca74]
  - @aws-amplify/backend-storage@0.7.0
  - @aws-amplify/client-config@0.9.2

## 0.13.1

### Patch Changes

- Updated dependencies [d558832]
- Updated dependencies [1058383]
- Updated dependencies [dca2a00]
  - @aws-amplify/backend-auth@0.6.0
  - @aws-amplify/backend-function@0.9.0
  - @aws-amplify/backend-data@0.11.0
  - @aws-amplify/client-config@0.9.1

## 0.13.0

### Minor Changes

- c9f03ee: Re-export some plugin-types from submodule export @aws-amplify/backend/types/platform
- 8fd5c5c: bump data-schema deps to latest
- f76e983: Use updated metadata fields in form and model generation
- 911c4c6: chore!: update data-construct, data-schema, data-schema-types dependencies
- 4995bda: Introduce initial iteration of access control mechanism between backend resources.
  The APIs and functioality are NOT final and are subject to change without notice.
- 86ee40b: omit "getResourceAccessAcceptor" method from resources on defineBackend object

### Patch Changes

- ab7533d: Add output and configuration for customer owned lambdas
- 697d791: Use screaming snake case for SSM entries
- 7cbe58b: bump aws-cdk-lib to 2.127.0
- 7857f0a: backend-data: add js resolver support
- 7dc3132: add aspect on root stack to valid role trust policies
- 21f6292: Force release to beta tag
- 4e6287e: chore: bump @aws-amplify/data-schema version to 0.14.0
- 5e12247: feat(client-config): Generate client configuration based on a unified JSON schema
- 0e6f436: chore: bump data-schema packages version (0.16.0)
- Updated dependencies [6c6af9b]
- Updated dependencies [54c69c4]
- Updated dependencies [ab7533d]
- Updated dependencies [bdbf6e8]
- Updated dependencies [a777488]
- Updated dependencies [8fd5c5c]
- Updated dependencies [697d791]
- Updated dependencies [64e425c]
- Updated dependencies [a6f35a8]
- Updated dependencies [8d73779]
- Updated dependencies [95a040b]
- Updated dependencies [912034e]
- Updated dependencies [74cbda0]
- Updated dependencies [f76e983]
- Updated dependencies [91dae55]
- Updated dependencies [7cbe58b]
- Updated dependencies [915bf98]
- Updated dependencies [7857f0a]
- Updated dependencies [1e93535]
- Updated dependencies [26cdffd]
- Updated dependencies [ab05ae0]
- Updated dependencies [5969a32]
- Updated dependencies [f6489a8]
- Updated dependencies [aec89f9]
- Updated dependencies [7cbe58b]
- Updated dependencies [c760df4]
- Updated dependencies [ef111b4]
- Updated dependencies [75f69ea]
- Updated dependencies [cfc3bc4]
- Updated dependencies [268acd8]
- Updated dependencies [916d3f0]
- Updated dependencies [109cd1b]
- Updated dependencies [ab739ea]
- Updated dependencies [79cff6d]
- Updated dependencies [318335d]
- Updated dependencies [fe46848]
- Updated dependencies [6b81a42]
- Updated dependencies [db23a3f]
- Updated dependencies [394b72e]
- Updated dependencies [215d65d]
- Updated dependencies [cec91d5]
- Updated dependencies [5ebc1d4]
- Updated dependencies [592bd4f]
- Updated dependencies [b0ba24d]
- Updated dependencies [911c4c6]
- Updated dependencies [e15e9be]
- Updated dependencies [3adf7df]
- Updated dependencies [060b6e5]
- Updated dependencies [937086b]
- Updated dependencies [0d1b00e]
- Updated dependencies [aee7501]
- Updated dependencies [82006e5]
- Updated dependencies [2a69684]
- Updated dependencies [d95ab02]
- Updated dependencies [7f5edee]
- Updated dependencies [62dab44]
- Updated dependencies [4995bda]
- Updated dependencies [4cd282e]
- Updated dependencies [85e953f]
- Updated dependencies [f999897]
- Updated dependencies [4e6287e]
- Updated dependencies [173c4ba]
- Updated dependencies [a05933c]
- Updated dependencies [5e12247]
- Updated dependencies [4f66069]
- Updated dependencies [10c9447]
- Updated dependencies [48ff3bd]
- Updated dependencies [de311f8]
- Updated dependencies [6b217e6]
- Updated dependencies [bb5a446]
- Updated dependencies [b0b4dea]
- Updated dependencies [0e6f436]
  - @aws-amplify/backend-function@0.8.0
  - @aws-amplify/platform-core@0.5.0
  - @aws-amplify/backend-auth@0.5.0
  - @aws-amplify/backend-data@0.10.0
  - @aws-amplify/client-config@0.9.0
  - @aws-amplify/backend-output-schemas@0.7.0
  - @aws-amplify/backend-output-storage@0.4.0
  - @aws-amplify/backend-storage@0.6.0
  - @aws-amplify/plugin-types@0.9.0
  - @aws-amplify/backend-secret@0.4.5

## 0.13.0-beta.20

### Minor Changes

- 86ee40b: omit "getResourceAccessAcceptor" method from resources on defineBackend object

### Patch Changes

- Updated dependencies [ef111b4]
- Updated dependencies [db23a3f]
- Updated dependencies [173c4ba]
  - @aws-amplify/platform-core@0.5.0-beta.7
  - @aws-amplify/backend-function@0.8.0-beta.12
  - @aws-amplify/backend-storage@0.6.0-beta.10
  - @aws-amplify/backend-auth@0.5.0-beta.13
  - @aws-amplify/backend-data@0.10.0-beta.14
  - @aws-amplify/plugin-types@0.9.0-beta.3
  - @aws-amplify/backend-output-storage@0.4.0-beta.8
  - @aws-amplify/backend-secret@0.4.5-beta.7
  - @aws-amplify/client-config@0.9.0-beta.15

## 0.13.0-beta.19

### Patch Changes

- Updated dependencies [fe46848]
- Updated dependencies [4f66069]
  - @aws-amplify/client-config@0.9.0-beta.14

## 0.13.0-beta.18

### Patch Changes

- Updated dependencies [e15e9be]
- Updated dependencies [10c9447]
- Updated dependencies [de311f8]
- Updated dependencies [b0b4dea]
  - @aws-amplify/client-config@0.9.0-beta.13
  - @aws-amplify/backend-data@0.10.0-beta.13
  - @aws-amplify/backend-storage@0.6.0-beta.9
  - @aws-amplify/platform-core@0.5.0-beta.6
  - @aws-amplify/backend-auth@0.5.0-beta.12
  - @aws-amplify/backend-function@0.8.0-beta.11
  - @aws-amplify/backend-output-storage@0.4.0-beta.7
  - @aws-amplify/backend-secret@0.4.5-beta.6

## 0.13.0-beta.17

### Minor Changes

- 911c4c6: chore!: update data-construct, data-schema, data-schema-types dependencies

### Patch Changes

- Updated dependencies [1e93535]
- Updated dependencies [ab739ea]
- Updated dependencies [911c4c6]
- Updated dependencies [bb5a446]
  - @aws-amplify/backend-output-schemas@0.7.0-beta.1
  - @aws-amplify/client-config@0.9.0-beta.12
  - @aws-amplify/backend-data@0.10.0-beta.12
  - @aws-amplify/backend-function@0.8.0-beta.10
  - @aws-amplify/backend-output-storage@0.4.0-beta.6
  - @aws-amplify/backend-storage@0.6.0-beta.8
  - @aws-amplify/backend-auth@0.5.0-beta.11

## 0.13.0-beta.16

### Patch Changes

- Updated dependencies [6c6af9b]
- Updated dependencies [54c69c4]
- Updated dependencies [a6f35a8]
- Updated dependencies [5ebc1d4]
- Updated dependencies [48ff3bd]
- Updated dependencies [6b217e6]
  - @aws-amplify/backend-function@0.8.0-beta.9
  - @aws-amplify/platform-core@0.5.0-beta.5
  - @aws-amplify/backend-auth@0.5.0-beta.10
  - @aws-amplify/backend-data@0.10.0-beta.11
  - @aws-amplify/client-config@0.9.0-beta.11
  - @aws-amplify/backend-storage@0.6.0-beta.7
  - @aws-amplify/plugin-types@0.9.0-beta.2
  - @aws-amplify/backend-output-storage@0.4.0-beta.5
  - @aws-amplify/backend-secret@0.4.5-beta.5

## 0.13.0-beta.15

### Patch Changes

- @aws-amplify/backend-auth@0.5.0-beta.9

## 0.13.0-beta.14

### Minor Changes

- f76e983: Use updated metadata fields in form and model generation

### Patch Changes

- Updated dependencies [f76e983]
  - @aws-amplify/backend-data@0.10.0-beta.10

## 0.13.0-beta.13

### Patch Changes

- Updated dependencies [915bf98]
- Updated dependencies [394b72e]
- Updated dependencies [592bd4f]
  - @aws-amplify/backend-data@0.10.0-beta.9
  - @aws-amplify/client-config@0.9.0-beta.10
  - @aws-amplify/backend-auth@0.5.0-beta.8

## 0.13.0-beta.12

### Patch Changes

- Updated dependencies [95a040b]
- Updated dependencies [f6489a8]
- Updated dependencies [aec89f9]
- Updated dependencies [2a69684]
- Updated dependencies [62dab44]
  - @aws-amplify/backend-storage@0.6.0-beta.6
  - @aws-amplify/backend-data@0.10.0-beta.8
  - @aws-amplify/platform-core@0.5.0-beta.4
  - @aws-amplify/backend-function@0.8.0-beta.8
  - @aws-amplify/backend-auth@0.5.0-beta.7
  - @aws-amplify/backend-output-storage@0.4.0-beta.4
  - @aws-amplify/backend-secret@0.4.5-beta.4
  - @aws-amplify/client-config@0.9.0-beta.9

## 0.13.0-beta.11

### Patch Changes

- Updated dependencies [8d73779]
- Updated dependencies [0d1b00e]
  - @aws-amplify/client-config@0.9.0-beta.8
  - @aws-amplify/backend-function@0.8.0-beta.7

## 0.13.0-beta.10

### Patch Changes

- 4e6287e: chore: bump @aws-amplify/data-schema version to 0.14.0
- Updated dependencies [d95ab02]
- Updated dependencies [4e6287e]
  - @aws-amplify/client-config@0.9.0-beta.7
  - @aws-amplify/backend-data@0.10.0-beta.7

## 0.13.0-beta.9

### Patch Changes

- Updated dependencies [4cd282e]
  - @aws-amplify/client-config@0.9.0-beta.6

## 0.13.0-beta.8

### Patch Changes

- 5e12247: feat(client-config): Generate client configuration based on a unified JSON schema
- Updated dependencies [5e12247]
  - @aws-amplify/client-config@0.9.0-beta.5
  - @aws-amplify/platform-core@0.5.0-beta.3
  - @aws-amplify/plugin-types@0.9.0-beta.1
  - @aws-amplify/backend-auth@0.5.0-beta.6
  - @aws-amplify/backend-data@0.10.0-beta.6
  - @aws-amplify/backend-function@0.8.0-beta.6
  - @aws-amplify/backend-output-storage@0.4.0-beta.3
  - @aws-amplify/backend-secret@0.4.5-beta.3
  - @aws-amplify/backend-storage@0.6.0-beta.5

## 0.13.0-beta.7

### Patch Changes

- Updated dependencies [a05933c]
  - @aws-amplify/backend-function@0.8.0-beta.5

## 0.13.0-beta.6

### Minor Changes

- c9f03ee: Re-export some plugin-types from submodule export @aws-amplify/backend/types/platform

### Patch Changes

- Updated dependencies [91dae55]
- Updated dependencies [26cdffd]
- Updated dependencies [75f69ea]
- Updated dependencies [937086b]
  - @aws-amplify/backend-data@0.10.0-beta.5
  - @aws-amplify/backend-function@0.8.0-beta.4
  - @aws-amplify/platform-core@0.5.0-beta.2
  - @aws-amplify/backend-auth@0.5.0-beta.5
  - @aws-amplify/client-config@0.9.0-beta.4
  - @aws-amplify/backend-output-storage@0.4.0-beta.2
  - @aws-amplify/backend-secret@0.4.5-beta.2
  - @aws-amplify/backend-storage@0.6.0-beta.4

## 0.13.0-beta.5

### Patch Changes

- Updated dependencies [bdbf6e8]
- Updated dependencies [a777488]
- Updated dependencies [ab05ae0]
- Updated dependencies [268acd8]
- Updated dependencies [7f5edee]
- Updated dependencies [f999897]
  - @aws-amplify/backend-function@0.8.0-beta.3
  - @aws-amplify/backend-data@0.10.0-beta.4
  - @aws-amplify/backend-auth@0.5.0-beta.4
  - @aws-amplify/backend-storage@0.6.0-beta.3

## 0.13.0-beta.4

### Patch Changes

- 7857f0a: backend-data: add js resolver support
- 7dc3132: add aspect on root stack to valid role trust policies
- Updated dependencies [64e425c]
- Updated dependencies [912034e]
- Updated dependencies [7857f0a]
- Updated dependencies [5969a32]
- Updated dependencies [c760df4]
- Updated dependencies [916d3f0]
- Updated dependencies [79cff6d]
- Updated dependencies [318335d]
- Updated dependencies [215d65d]
- Updated dependencies [cec91d5]
- Updated dependencies [b0ba24d]
- Updated dependencies [3adf7df]
- Updated dependencies [aee7501]
- Updated dependencies [82006e5]
  - @aws-amplify/backend-storage@0.6.0-beta.2
  - @aws-amplify/backend-data@0.10.0-beta.3
  - @aws-amplify/client-config@0.9.0-beta.3
  - @aws-amplify/backend-function@0.8.0-beta.2
  - @aws-amplify/backend-auth@0.5.0-beta.3

## 0.13.0-beta.3

### Patch Changes

- @aws-amplify/client-config@0.8.1-beta.2

## 0.13.0-beta.2

### Minor Changes

- 4995bda: Introduce initial iteration of access control mechanism between backend resources.
  The APIs and functioality are NOT final and are subject to change without notice.

### Patch Changes

- ab7533d: Add output and configuration for customer owned lambdas
- 7cbe58b: bump aws-cdk-lib to 2.127.0
- Updated dependencies [ab7533d]
- Updated dependencies [7cbe58b]
- Updated dependencies [7cbe58b]
- Updated dependencies [cfc3bc4]
- Updated dependencies [109cd1b]
- Updated dependencies [4995bda]
- Updated dependencies [85e953f]
  - @aws-amplify/backend-output-schemas@0.7.0-beta.0
  - @aws-amplify/backend-output-storage@0.4.0-beta.1
  - @aws-amplify/backend-function@0.8.0-beta.1
  - @aws-amplify/backend-storage@0.6.0-beta.1
  - @aws-amplify/platform-core@0.5.0-beta.1
  - @aws-amplify/plugin-types@0.9.0-beta.0
  - @aws-amplify/backend-auth@0.5.0-beta.2
  - @aws-amplify/backend-data@0.10.0-beta.2
  - @aws-amplify/client-config@0.8.1-beta.1
  - @aws-amplify/backend-secret@0.4.5-beta.1

## 0.13.0-beta.1

### Patch Changes

- Updated dependencies [74cbda0]
  - @aws-amplify/backend-data@0.10.0-beta.1
  - @aws-amplify/platform-core@0.5.0-beta.0
  - @aws-amplify/backend-auth@0.4.8-beta.1
  - @aws-amplify/backend-function@0.7.2-beta.0
  - @aws-amplify/backend-output-storage@0.3.1-beta.0
  - @aws-amplify/backend-secret@0.4.5-beta.0
  - @aws-amplify/backend-storage@0.5.1-beta.0
  - @aws-amplify/client-config@0.8.1-beta.0

## 0.13.0-beta.0

### Minor Changes

- 8fd5c5c30: bump data-schema deps to latest

### Patch Changes

- 21f6292a1: Force release to beta tag
- Updated dependencies [8fd5c5c30]
  - @aws-amplify/backend-data@0.10.0-beta.0
  - @aws-amplify/backend-auth@0.4.8-beta.0

## 0.12.1

### Patch Changes

- Updated dependencies [adb50ecb6]
  - @aws-amplify/backend-function@0.7.1
  - @aws-amplify/backend-auth@0.4.7

## 0.12.0

### Minor Changes

- bded2772c: Added tags to CFN resources

### Patch Changes

- Updated dependencies [b1c3e0d49]
- Updated dependencies [6daae6be5]
  - @aws-amplify/client-config@0.8.0

## 0.11.0

### Minor Changes

- 85ced84f2: Add ability to add custom outputs

### Patch Changes

- Updated dependencies [ccde77a01]
- Updated dependencies [85ced84f2]
- Updated dependencies [348717b55]
- Updated dependencies [b73d76a78]
- Updated dependencies [84818e3c1]
  - @aws-amplify/backend-function@0.7.0
  - @aws-amplify/backend-output-schemas@0.6.0
  - @aws-amplify/backend-output-storage@0.3.0
  - @aws-amplify/client-config@0.7.0
  - @aws-amplify/plugin-types@0.8.0
  - @aws-amplify/backend-storage@0.5.0
  - @aws-amplify/backend-auth@0.4.6
  - @aws-amplify/backend-data@0.9.6
  - @aws-amplify/backend-secret@0.4.4
  - @aws-amplify/platform-core@0.4.4

## 0.10.3

### Patch Changes

- Updated dependencies [f2d829641]
  - @aws-amplify/backend-function@0.6.4
  - @aws-amplify/backend-auth@0.4.5

## 0.10.2

### Patch Changes

- Updated dependencies [0809ad36d]
- Updated dependencies [618a2ea71]
  - @aws-amplify/platform-core@0.4.3
  - @aws-amplify/backend-output-schemas@0.5.2
  - @aws-amplify/backend-auth@0.4.4
  - @aws-amplify/backend-data@0.9.5
  - @aws-amplify/backend-function@0.6.3
  - @aws-amplify/backend-output-storage@0.2.11
  - @aws-amplify/backend-secret@0.4.3
  - @aws-amplify/backend-storage@0.4.4

## 0.10.1

### Patch Changes

- d087313e9: Enhance functions to fallback to resolve shared secrets
- Updated dependencies [d087313e9]
  - @aws-amplify/backend-function@0.6.2
  - @aws-amplify/backend-auth@0.4.3
  - @aws-amplify/plugin-types@0.7.1
  - @aws-amplify/backend-data@0.9.4
  - @aws-amplify/backend-storage@0.4.3
  - @aws-amplify/backend-secret@0.4.2
  - @aws-amplify/platform-core@0.4.2
  - @aws-amplify/backend-output-storage@0.2.10

## 0.10.0

### Minor Changes

- 43740488a: Move pinning of CDK version from @aws-amplify/backend to customer's project

### Patch Changes

- 04f067837: Implement consistent dependency declaration check. Bumped dependencies where necessary.
- Updated dependencies [04f067837]
  - @aws-amplify/backend-output-schemas@0.5.1
  - @aws-amplify/backend-function@0.6.1
  - @aws-amplify/backend-secret@0.4.1
  - @aws-amplify/platform-core@0.4.1
  - @aws-amplify/backend-auth@0.4.2
  - @aws-amplify/backend-data@0.9.3
  - @aws-amplify/backend-storage@0.4.2
  - @aws-amplify/backend-output-storage@0.2.9

## 0.9.0

### Minor Changes

- 5678ab4d4: Consume parameter resolution changes from @aws-amplify/platform-core

### Patch Changes

- Updated dependencies [5678ab4d4]
- Updated dependencies [5678ab4d4]
  - @aws-amplify/platform-core@0.4.0
  - @aws-amplify/backend-function@0.6.0
  - @aws-amplify/backend-secret@0.4.0
  - @aws-amplify/backend-auth@0.4.1
  - @aws-amplify/backend-data@0.9.2
  - @aws-amplify/backend-output-storage@0.2.8

## 0.8.0

### Minor Changes

- e5da97e37: Implement function secret access

### Patch Changes

- Updated dependencies [8688aa00f]
- Updated dependencies [c885ff22d]
- Updated dependencies [e5da97e37]
- Updated dependencies [6a1c252e1]
- Updated dependencies [6a1c252e1]
- Updated dependencies [e5da97e37]
  - @aws-amplify/platform-core@0.3.4
  - @aws-amplify/backend-function@0.5.0
  - @aws-amplify/plugin-types@0.7.0
  - @aws-amplify/backend-output-schemas@0.5.0
  - @aws-amplify/backend-auth@0.4.0
  - @aws-amplify/backend-secret@0.3.4
  - @aws-amplify/backend-data@0.9.1
  - @aws-amplify/backend-storage@0.4.1
  - @aws-amplify/backend-output-storage@0.2.7

## 0.7.0

### Minor Changes

- 6714cd69c: Reinstate accessing all properties on backend construct objects
- fd6516c8b: Rework Backend platform type to allow accessing CDK constructs using backend.<name>.<constructName> rather than backend.resources.<name>.resources.<constructName>

### Patch Changes

- a6b51fc73: Remove excessive logging from branch linker.
- Updated dependencies [3b4fbbdc1]
- Updated dependencies [6714cd69c]
- Updated dependencies [2ab4b3149]
- Updated dependencies [b4e0a00a9]
- Updated dependencies [fd6516c8b]
  - @aws-amplify/backend-storage@0.4.0
  - @aws-amplify/backend-data@0.9.0
  - @aws-amplify/plugin-types@0.6.0
  - @aws-amplify/backend-function@0.4.0
  - @aws-amplify/backend-auth@0.3.7
  - @aws-amplify/backend-secret@0.3.3
  - @aws-amplify/platform-core@0.3.3

## 0.6.0

### Minor Changes

- c6c39d04c: Expose new `defineFunction` interface

### Patch Changes

- 5aca60c97: add link to docs in secrets jsdoc
- Updated dependencies [db775ad6e]
- Updated dependencies [c6c39d04c]
- Updated dependencies [c6c39d04c]
- Updated dependencies [308d1729a]
  - @aws-amplify/platform-core@0.3.2
  - @aws-amplify/backend-data@0.8.3
  - @aws-amplify/backend-function@0.3.0
  - @aws-amplify/plugin-types@0.5.0
  - @aws-amplify/backend-auth@0.3.6
  - @aws-amplify/backend-secret@0.3.2
  - @aws-amplify/backend-storage@0.3.2

## 0.5.5

### Patch Changes

- 5ed51cbd5: Upgrade aws-cdk to 2.110.1
- Updated dependencies [5ed51cbd5]
  - @aws-amplify/backend-output-storage@0.2.6
  - @aws-amplify/backend-function@0.2.5
  - @aws-amplify/backend-storage@0.3.1
  - @aws-amplify/platform-core@0.3.1
  - @aws-amplify/backend-auth@0.3.5
  - @aws-amplify/backend-data@0.8.2
  - @aws-amplify/plugin-types@0.4.2

## 0.5.4

### Patch Changes

- Updated dependencies [aabe5dd61]
- Updated dependencies [5f336ffbb]
- Updated dependencies [a2ed0ae14]
- Updated dependencies [85e619116]
  - @aws-amplify/platform-core@0.3.0
  - @aws-amplify/backend-data@0.8.1
  - @aws-amplify/backend-auth@0.3.4
  - @aws-amplify/backend-function@0.2.4
  - @aws-amplify/backend-output-storage@0.2.5
  - @aws-amplify/backend-secret@0.3.1

## 0.5.3

### Patch Changes

- Updated dependencies [f449188cf]
  - @aws-amplify/backend-data@0.8.0

## 0.5.2

### Patch Changes

- Updated dependencies [85bbab431]
- Updated dependencies [688db7bf8]
- Updated dependencies [70685f36b]
  - @aws-amplify/backend-data@0.7.0
  - @aws-amplify/backend-output-storage@0.2.3
  - @aws-amplify/platform-core@0.2.1
  - @aws-amplify/backend-auth@0.3.2
  - @aws-amplify/backend-function@0.2.2

## 0.5.1

### Patch Changes

- Updated dependencies [3cda50cb7]
  - @aws-amplify/backend-data@0.6.0

## 0.5.0

### Minor Changes

- 07b741dd3: change backend.getStack to backend.createStack

### Patch Changes

- bd8b5d1a5: update data/resource template; bump data-schema versions
- Updated dependencies [65fe3a8fd]
- Updated dependencies [cd5feeed0]
- Updated dependencies [07b0dfc9f]
- Updated dependencies [bd8b5d1a5]
  - @aws-amplify/plugin-types@0.4.1
  - @aws-amplify/backend-auth@0.3.1
  - @aws-amplify/backend-output-schemas@0.4.0
  - @aws-amplify/backend-data@0.5.1
  - @aws-amplify/backend-output-storage@0.2.2
  - @aws-amplify/backend-function@0.2.1

## 0.4.0

### Minor Changes

- 85a015b7: switch to using data-schema packages
- 71a63a16: Change stack naming strategy to include deployment type as a suffix

### Patch Changes

- Updated dependencies [85a015b7]
- Updated dependencies [8181509a]
- Updated dependencies [71a63a16]
  - @aws-amplify/backend-data@0.5.0
  - @aws-amplify/plugin-types@0.4.0
  - @aws-amplify/backend-output-schemas@0.3.0
  - @aws-amplify/backend-function@0.2.0
  - @aws-amplify/backend-storage@0.3.0
  - @aws-amplify/backend-secret@0.3.0
  - @aws-amplify/platform-core@0.2.0
  - @aws-amplify/backend-auth@0.3.0
  - @aws-amplify/backend-output-storage@0.2.1

## 0.3.4

### Patch Changes

- 8f03cd09: enable branch linker by default

## 0.3.3

### Patch Changes

- 14a18c6e: Rename backend-graphql to backend-data
- 68dc91e3: chore: support for JS backend apps
- a126d8df: bump amplify data versions
- Updated dependencies [6be68224]
- Updated dependencies [14a18c6e]
- Updated dependencies [68dc91e3]
- Updated dependencies [a126d8df]
  - @aws-amplify/backend-data@0.4.0
  - @aws-amplify/backend-function@0.1.4
  - @aws-amplify/platform-core@0.1.4

## 0.3.2

### Patch Changes

- 4acf0ad9: disable branch linker by default, add environment variables to control its behaviors
- Updated dependencies [3bff764b]
  - @aws-amplify/backend-graphql@0.3.2
  - @aws-amplify/plugin-types@0.3.1

## 0.3.1

### Patch Changes

- 1ec5c373: store attribution metadata in custom stacks
- 8cc8ffc6: handle non existing branch gracefully in branch linker on delete event
- 5b1b2385: updating getOrCreateStack to getStack
- Updated dependencies [1dd824cb]
- Updated dependencies [42127d0a]
  - @aws-amplify/backend-graphql@0.3.0

## 0.3.0

### Minor Changes

- 457b1662: getConstructFactory no longer throws an error if the factory is not found, and returns undefined instead.

### Patch Changes

- 79a6e09f: Change stackOutputKey to platformOutputKey
- e8a3d179: link branch to app in pipeline deployment
- 79a6e09f: Add aws_project_region to amplifyconfiguration.json
- cb861316: bundle AWS SDK in branch linker lambda
- Updated dependencies [79a6e09f]
- Updated dependencies [457b1662]
- Updated dependencies [79a6e09f]
- Updated dependencies [46e0aad6]
  - @aws-amplify/backend-output-schemas@0.2.1
  - @aws-amplify/plugin-types@0.3.0
  - @aws-amplify/backend-graphql@0.2.1
  - @aws-amplify/backend-auth@0.2.2
  - @aws-amplify/backend-function@0.1.2
  - @aws-amplify/backend-storage@0.2.1
  - @aws-amplify/backend-secret@0.2.1
  - @aws-amplify/platform-core@0.1.2

## 0.2.1

### Patch Changes

- 4e48e4ba: chore: add new defineBackend to better align with other backend factories
- Updated dependencies [d0119b25]
  - @aws-amplify/backend-auth@0.2.1

## 0.2.0

### Minor Changes

- 2216d37d: 1. Remove version from the backend secret feature. 2. Use max(secret_last_updated) to trigger secret fetcher.
- c5d18967: Re-export category entry points from @aws-amplify/backend and move shared test classes to new private package
- dc22fdf4: Integrate secret to Auth
- 407a09ff: Implements backend secret feature, include backend secret resolver and the backend-secret pkg.

### Patch Changes

- 98b17069: Provides sandbox secret CLI commands
- 0398b8e1: Bump graphql construct to 0.9.0 and remove some interface cruft
- 642e8d55: Remove grantPermission API from backend-secret
- b2b0c2da: force version bump
- baa7a905: Move types package from peer deps to deps
- 7296e9d9: Initial publish
- 9091c2bf: Fix import path verification on windows
- 34c3fd38: Update backend definition file path convention
- 3bda96ff: update methods to use arrow notation
- b4946f34: add jsdoc comments for `secret()`
- 36d93e46: add license to package.json
- 8f99476e: chore: upgrade aws-cdk to 2.103.0
- 47456c26: Remove ESM features from construct dependency packages and make corresponding updates in consumer packages
- f75fa531: Refactor OutputStorageStrategy into stateless shared dependency
- f6618771: add deployment type to stack outputs
- 755badc2: Upgrade aws-cdk-lib to have cdk custom resource provider run node 18
- 512f0778: move UniqueBackendIdentifier to platform-core package
- 59f5ea24: chore: upgrade aws-cdk to 2.100.0
- Updated dependencies [47456c26]
- Updated dependencies [bf24d363]
- Updated dependencies [ac3df080]
- Updated dependencies [98b17069]
- Updated dependencies [0398b8e1]
- Updated dependencies [642e8d55]
- Updated dependencies [b2b0c2da]
- Updated dependencies [18874854]
- Updated dependencies [66190beb]
- Updated dependencies [2216d37d]
- Updated dependencies [baa7a905]
- Updated dependencies [7296e9d9]
- Updated dependencies [53779253]
- Updated dependencies [915c0325]
- Updated dependencies [c5d18967]
- Updated dependencies [34c3fd38]
- Updated dependencies [2ef006f1]
- Updated dependencies [3bda96ff]
- Updated dependencies [41ae36e2]
- Updated dependencies [7103735b]
- Updated dependencies [db395e9c]
- Updated dependencies [f8df0ed6]
- Updated dependencies [3c36ace9]
- Updated dependencies [395c8f0d]
- Updated dependencies [ce008a2c]
- Updated dependencies [30820177]
- Updated dependencies [36d93e46]
- Updated dependencies [88fe36a1]
- Updated dependencies [8f99476e]
- Updated dependencies [b89c5397]
- Updated dependencies [d1295912]
- Updated dependencies [dc22fdf4]
- Updated dependencies [407a09ff]
- Updated dependencies [47456c26]
- Updated dependencies [b4f82717]
- Updated dependencies [ae9e9f10]
- Updated dependencies [f2394dbe]
- Updated dependencies [5b9aac15]
- Updated dependencies [fcc7d389]
- Updated dependencies [05f97b26]
- Updated dependencies [2525b582]
- Updated dependencies [f75fa531]
- Updated dependencies [f6618771]
- Updated dependencies [f201c94a]
- Updated dependencies [512f0778]
- Updated dependencies [bc419e41]
- Updated dependencies [883d9da7]
- Updated dependencies [59f5ea24]
  - @aws-amplify/backend-output-storage@0.2.0
  - @aws-amplify/backend-auth@0.2.0
  - @aws-amplify/backend-output-schemas@0.2.0
  - @aws-amplify/backend-secret@0.2.0
  - @aws-amplify/backend-graphql@0.2.0
  - @aws-amplify/backend-storage@0.2.0
  - @aws-amplify/plugin-types@0.2.0
  - @aws-amplify/backend-function@0.1.1
  - @aws-amplify/platform-core@0.1.1

## 0.2.0-alpha.12

### Patch Changes

- 47456c26: Remove ESM features from construct dependency packages and make corresponding updates in consumer packages
- Updated dependencies [47456c26]
- Updated dependencies [47456c26]
  - @aws-amplify/backend-output-storage@0.2.0-alpha.6
  - @aws-amplify/backend-output-schemas@0.2.0-alpha.8
  - @aws-amplify/platform-core@0.1.1-alpha.4

## 0.2.0-alpha.11

### Patch Changes

- 8f99476e: chore: upgrade aws-cdk to 2.103.0
- Updated dependencies [8f99476e]
  - @aws-amplify/backend-output-storage@0.2.0-alpha.5
  - @aws-amplify/plugin-types@0.2.0-alpha.11

## 0.2.0-alpha.10

### Patch Changes

- Updated dependencies [18874854]
- Updated dependencies [883d9da7]
  - @aws-amplify/plugin-types@0.2.0-alpha.10
  - @aws-amplify/backend-output-schemas@0.2.0-alpha.7
  - @aws-amplify/backend-output-storage@0.2.0-alpha.4

## 0.2.0-alpha.9

### Patch Changes

- 755badc2: Upgrade aws-cdk-lib to have cdk custom resource provider run node 18
- Updated dependencies [915c0325]
  - @aws-amplify/platform-core@0.1.1-alpha.3

## 0.2.0-alpha.8

### Patch Changes

- 642e8d55: Remove grantPermission API from backend-secret
- Updated dependencies [642e8d55]
  - @aws-amplify/backend-secret@0.2.0-alpha.5

## 0.2.0-alpha.7

### Patch Changes

- 59f5ea24: chore: upgrade aws-cdk to 2.100.0
- Updated dependencies [59f5ea24]
  - @aws-amplify/backend-output-storage@0.1.1-alpha.3
  - @aws-amplify/backend-secret@0.2.0-alpha.4
  - @aws-amplify/plugin-types@0.2.0-alpha.9

## 0.2.0-alpha.6

### Minor Changes

- 2216d37d: 1. Remove version from the backend secret feature. 2. Use max(secret_last_updated) to trigger secret fetcher.

### Patch Changes

- 36d93e46: add license to package.json
- Updated dependencies [2216d37d]
- Updated dependencies [36d93e46]
  - @aws-amplify/backend-secret@0.2.0-alpha.2
  - @aws-amplify/backend-output-schemas@0.2.0-alpha.5
  - @aws-amplify/backend-output-storage@0.1.1-alpha.2
  - @aws-amplify/platform-core@0.1.1-alpha.1
  - @aws-amplify/plugin-types@0.2.0-alpha.7

## 0.2.0-alpha.5

### Minor Changes

- dc22fdf4: Integrate secret to Auth

### Patch Changes

- 98b17069: Provides sandbox secret CLI commands
- 0398b8e1: Bump graphql construct to 0.9.0 and remove some interface cruft
- baa7a905: Move types package from peer deps to deps
- 34c3fd38: Update backend definition file path convention
- f6618771: add deployment type to stack outputs
- 512f0778: move UniqueBackendIdentifier to platform-core package
- Updated dependencies [98b17069]
- Updated dependencies [0398b8e1]
- Updated dependencies [baa7a905]
- Updated dependencies [dc22fdf4]
- Updated dependencies [f6618771]
- Updated dependencies [512f0778]
  - @aws-amplify/backend-secret@0.2.0-alpha.1
  - @aws-amplify/backend-output-storage@0.1.1-alpha.1
  - @aws-amplify/plugin-types@0.2.0-alpha.6
  - @aws-amplify/backend-output-schemas@0.2.0-alpha.4
  - @aws-amplify/platform-core@0.1.1-alpha.0

## 0.2.0-alpha.4

### Minor Changes

- 407a09ff: Implements backend secret feature, include backend secret resolver and the backend-secret pkg.

### Patch Changes

- 9091c2bf: Fix import path verification on windows
- 1dada824: chore: Update eslint config to new flat config type
- f75fa531: Refactor OutputStorageStrategy into stateless shared dependency
- Updated dependencies [ac3df080]
- Updated dependencies [53779253]
- Updated dependencies [1dada824]
- Updated dependencies [407a09ff]
- Updated dependencies [b4f82717]
- Updated dependencies [05f97b26]
- Updated dependencies [f75fa531]
  - @aws-amplify/backend-output-schemas@0.2.0-alpha.3
  - @aws-amplify/backend-output-storage@0.1.1-alpha.0
  - @aws-amplify/backend-secret@0.2.0-alpha.0
  - @aws-amplify/plugin-types@0.1.1-alpha.5

## 0.1.1-alpha.3

### Patch Changes

- Updated dependencies [ce008a2]
- Updated dependencies [f201c94]
  - @aws-amplify/backend-output-schemas@0.2.0-alpha.2
  - @aws-amplify/plugin-types@0.1.1-alpha.3

## 0.1.1-alpha.2

### Patch Changes

- b2b0c2d: force version bump
- Updated dependencies [b2b0c2d]
- Updated dependencies [395c8f0]
  - @aws-amplify/backend-output-schemas@0.1.1-alpha.1
  - @aws-amplify/plugin-types@0.1.1-alpha.2

## 0.1.1-alpha.1

### Patch Changes

- 3bda96f: update methods to use arrow notation
- Updated dependencies [2ef006f]
- Updated dependencies [3bda96f]
  - @aws-amplify/plugin-types@0.1.1-alpha.1

## 0.1.1-alpha.0

### Patch Changes

- 7296e9d: Initial publish
- Updated dependencies [7296e9d]
  - @aws-amplify/backend-output-schemas@0.1.1-alpha.0
  - @aws-amplify/plugin-types@0.1.1-alpha.0
