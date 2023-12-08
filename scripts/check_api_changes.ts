import { glob } from 'glob';
import path from 'path';
import { existsSync } from 'fs';
import { ApiChangesValidator } from './components/api-changes-validator/api_changes_validator.js';

// extract the command args that should be run in each package
const runArgs = process.argv.slice(2);

const latestRepositoryPath = runArgs[0];
const baselineRepositoryPath = runArgs[1];
const workingDirectory = runArgs[2];

if (!latestRepositoryPath || !baselineRepositoryPath || !workingDirectory) {
  throw new Error(
    'Usage: tsx scripts/check_api_changes.ts <latestRepositoryPath> <baselineRepositoryPath> <workingDirectory>'
  );
}

console.log(
  `Validating API changes between latest ${latestRepositoryPath} and baseline ${baselineRepositoryPath}`
);

let baselinePackagePaths = await glob(`${baselineRepositoryPath}/packages/*`);
const clientConfigProject = baselinePackagePaths.find((item) =>
  item.includes('client-config')
);
if (clientConfigProject) {
  baselinePackagePaths.unshift(clientConfigProject);
}
baselinePackagePaths = baselinePackagePaths.slice(0, 2);
for (const baselinePackagePath of baselinePackagePaths) {
  const baselinePackageName = path.basename(baselinePackagePath);
  const baselinePackageApiReportPath = path.join(baselinePackagePath, 'API.md');
  if (!existsSync(baselinePackageApiReportPath)) {
    console.log(
      `Skipping ${baselinePackageName} as it does not have API.md file`
    );
    continue;
  }
  const latestPackagePath = path.join(
    latestRepositoryPath,
    'packages',
    baselinePackageName
  );
  if (!existsSync(latestPackagePath)) {
    throw new Error(
      `${baselinePackageName} does not exist in latest repository`
    );
  }

  console.log(`Validating API changes of ${baselinePackageName}`);
  await new ApiChangesValidator(
    baselinePackageName,
    baselinePackagePath,
    latestPackagePath,
    workingDirectory
  ).validate();
}
