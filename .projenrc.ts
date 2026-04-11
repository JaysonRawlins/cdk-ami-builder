import { awscdk, DependencyType, TextFile } from 'projen';

import { GithubCredentials, workflows } from 'projen/lib/github';
import { NpmAccess, UpgradeDependenciesSchedule } from 'projen/lib/javascript';

const cdkCliVersion = '2.1029.2';
const minNodeVersion = '20.0.0';
const devNodeVersion = '20.19.0';
const workflowNodeVersion = '20.x';
const jsiiVersion = '~5.8.0';
const cdkVersion = '2.85.0'; // Minimum CDK Version Required
const minProjenVersion = '0.95.6'; // Does not affect consumers of the library
const minConstructsVersion = '10.0.5'; // Minimum version to support CDK v2 and does affect consumers of the library
const devConstructsVersion = '10.0.5'; // Pin for local dev/build to avoid jsii type conflicts
// Pinned SHA for actions/create-github-app-token
const createGithubAppTokenVersion = '3ff1caaa28b64c9cc276ce0a02e2ff584f3900c5';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Jayson Rawlins',
  description: 'Creates an EC2 AMI using an Image Builder Pipeline and returns the AMI ID.',
  keywords: ['ami', 'imagebuilder', 'image builder', 'ec2'],
  authorAddress: 'jayson.rawlins@gmail.com',
  packageName: '@jjrawlins/cdk-ami-builder',
  minNodeVersion: minNodeVersion,
  cdkVersion: cdkVersion,
  cdkCliVersion: cdkCliVersion,
  projenVersion: `^${minProjenVersion}`,
  lambdaOptions: {
    runtime: awscdk.LambdaRuntime.NODEJS_22_X,
  },
  defaultReleaseBranch: 'main',
  license: 'Apache-2.0',
  jsiiVersion: jsiiVersion,
  name: '@jjrawlins/cdk-ami-builder',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/JaysonRawlins/cdk-ami-builder.git',
  githubOptions: {
    projenCredentials: GithubCredentials.fromApp({
      appIdSecret: 'PROJEN_APP_ID',
      privateKeySecret: 'PROJEN_APP_PRIVATE_KEY',
    }),
    mergify: false,
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: [
          'feat',
          'fix',
          'docs',
          'style',
          'refactor',
          'perf',
          'test',
          'chore',
          'revert',
          'ci',
          'build',
          'deps',
          'wip',
          'release',
        ],
      },
    },
  },
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflowOptions: {
      schedule: UpgradeDependenciesSchedule.expressions(['0 9 * * 1']),
    },
  },
  publishToPypi: {
    distName: 'jjrawlins-cdk-ami-builder',
    module: 'jjrawlins_cdk_ami_builder',
  },
  publishToGo: {
    moduleName: 'github.com/JaysonRawlins/cdk-ami-builder',
    packageName: 'cdkamibuilder',
  },
  publishToNuget: {
    packageId: 'JJRawlins.CdkAmiBuilder',
    dotNetNamespace: 'JJRawlins.CdkAmiBuilder',
  },
  peerDeps: [
    `aws-cdk-lib@>=${cdkVersion} <3.0.0`,
    `constructs@>=${minConstructsVersion} <11.0.0`,
  ],
  deps: [ // Does affect consumers of the library
    'crypto-js',
    'lodash',
  ],
  devDeps: [ // Does not affect consumers of the library
    `aws-cdk@${cdkCliVersion}`,
    `aws-cdk-lib@${cdkVersion}`,
    '@aws-sdk/types',
    '@types/node',
    '@types/lodash',
  ],
  bundledDeps: [ // Will be bundled into the library for consumers
    '@aws-sdk/client-sqs',
    '@aws-sdk/client-ec2',
    '@aws-sdk/client-ssm',
    '@aws-sdk/client-sns',
    '@aws-sdk/client-ecs',
    '@aws-sdk/client-kms',
    '@aws-sdk/client-s3',
    '@aws-sdk/client-secrets-manager',
    '@aws-sdk/client-sfn',
    '@types/aws-lambda',
    '@types/js-yaml',
    'js-yaml',
    'lodash.merge',
    '@types/crypto-js',
    'crypto-js',
    'lodash',
  ],
  gitignore: [
    'cdk.out',
    'cdk.out/*',
    'assets',
    'cdk.context.json',
    'tsconfig.json',
    '.dccache',
  ],
  npmAccess: NpmAccess.PUBLIC,
  releaseToNpm: true,
  npmTrustedPublishing: true, // Use OIDC instead of NPM_TOKEN (requires npm 11.5.1+ / Node 24+)
});

// Add Yarn resolutions to ensure patched transitive versions
project.package.addField('resolutions', {
  'brace-expansion': '1.1.12',
  'form-data': '^4.0.4',
  '@eslint/plugin-kit': '^0.3.4',
  'aws-cdk-lib': `>=${cdkVersion} <3.0.0`,
  // Pin constructs for local dev/build to a single version to avoid jsii conflicts
  'constructs': devConstructsVersion,
  'projen': `>=${minProjenVersion} <1.0.0`,
});

// Allow Node 20+ for consumers (CDK constructs work on any modern Node).
project.package.addField('engines', {
  node: `>=${minNodeVersion}`,
});

// Ensure 'constructs' is only a peer dependency (avoid duplicates that cause jsii conflicts)
project.deps.removeDependency('constructs');
project.deps.addDependency(`constructs@>=${minConstructsVersion} <11.0.0`, DependencyType.PEER);

project.github!.tryFindWorkflow('upgrade-main')!.file!.addOverride('jobs.upgrade.steps.1.with.node-version', workflowNodeVersion);
project.github!.tryFindWorkflow('upgrade-main')!.file!.addOverride('jobs.upgrade.permissions.id-token', 'write');
project.github!.tryFindWorkflow('upgrade-main')!.file!.addOverride('jobs.upgrade.permissions.packages', 'write');
project.github!.tryFindWorkflow('upgrade-main')!.file!.addOverride('jobs.upgrade.permissions.pull-requests', 'write');
project.github!.tryFindWorkflow('upgrade-main')!.file!.addOverride('jobs.upgrade.permissions.contents', 'write');

project.github!.tryFindWorkflow('upgrade-main')!.file!.addOverride('jobs.pr.permissions.id-token', 'write');
project.github!.tryFindWorkflow('upgrade-main')!.file!.addOverride('jobs.pr.permissions.packages', 'write');
project.github!.tryFindWorkflow('upgrade-main')!.file!.addOverride('jobs.pr.permissions.pull-requests', 'write');
project.github!.tryFindWorkflow('upgrade-main')!.file!.addOverride('jobs.pr.permissions.contents', 'write');


/**
 * For the build job, we need to be able to read from packages and also need id-token permissions for OIDC to authenticate to the registry.
 * This is needed to be able to install dependencies from GitHub Packages during the build.
 */
project.github!.tryFindWorkflow('build')!.file!.addOverride('jobs.build.permissions.id-token', 'write');
project.github!.tryFindWorkflow('build')!.file!.addOverride('jobs.build.permissions.packages', 'read');
project.github!.tryFindWorkflow('build')!.file!.addOverride('jobs.build.steps.1.with.node-version', workflowNodeVersion);

/**
 * For the package jobs, we need to be able to write to packages and also need id-token permissions for OIDC to authenticate to the registry.
 */
project.github!.tryFindWorkflow('build')!.file!.addOverride('jobs.package-js.permissions.id-token', 'write');
project.github!.tryFindWorkflow('build')!.file!.addOverride('jobs.package-js.permissions.packages', 'write');
project.github!.tryFindWorkflow('build')!.file!.addOverride('jobs.package-js.steps.0.with.node-version', workflowNodeVersion);

project.github!.tryFindWorkflow('build')!.file!.addOverride('jobs.package-python.permissions.packages', 'write');
project.github!.tryFindWorkflow('build')!.file!.addOverride('jobs.package-python.permissions.id-token', 'write');
project.github!.tryFindWorkflow('build')!.file!.addOverride('jobs.package-python.steps.0.with.node-version', workflowNodeVersion);

project.github!.tryFindWorkflow('build')!.file!.addOverride('jobs.package-go.permissions.packages', 'write');
project.github!.tryFindWorkflow('build')!.file!.addOverride('jobs.package-go.permissions.id-token', 'write');
project.github!.tryFindWorkflow('build')!.file!.addOverride('jobs.package-go.steps.0.with.node-version', workflowNodeVersion);

project.github!.tryFindWorkflow('build')!.file!.addOverride('jobs.package-dotnet.permissions.packages', 'write');
project.github!.tryFindWorkflow('build')!.file!.addOverride('jobs.package-dotnet.permissions.id-token', 'write');
project.github!.tryFindWorkflow('build')!.file!.addOverride('jobs.package-dotnet.steps.0.with.node-version', workflowNodeVersion);

/** * For the release jobs, we need to be able to read from packages and also need id-token permissions for OIDC to authenticate to the registry.
 */
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release.permissions.id-token', 'write');
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release.permissions.packages', 'read');
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release.permissions.contents', 'write');

project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_npm.permissions.id-token', 'write');
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_npm.permissions.packages', 'read');
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_npm.permissions.contents', 'write');
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release.steps.2.with.node-version', workflowNodeVersion);
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_github.steps.0.with.node-version', workflowNodeVersion);

// npm Trusted Publishing requires npm 11.5.1+ which comes with Node.js 24+
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_npm.steps.0.with.node-version', '24');
// Add --ignore-engines to yarn install since Node 24 is outside the engines range (20.x)
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_npm.steps.4.run', 'cd .repo && yarn install --check-files --frozen-lockfile --ignore-engines');

// Override node-version for publish jobs that default to minNodeVersion (20.0.0)
// @eslint/plugin-kit@0.3.5 requires Node ^20.9.0, so 20.0.0 fails yarn install
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_pypi.steps.0.with.node-version', workflowNodeVersion);
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_nuget.steps.0.with.node-version', workflowNodeVersion);
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_golang.steps.0.with.node-version', workflowNodeVersion);

project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_pypi.permissions.id-token', 'write');
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_pypi.permissions.packages', 'read');
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_pypi.permissions.contents', 'write');

project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_golang.permissions.id-token', 'write');
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_golang.permissions.packages', 'read');
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_golang.permissions.contents', 'write');

project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_nuget.permissions.id-token', 'write');
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_nuget.permissions.packages', 'read');
project.github!.tryFindWorkflow('release')!.file!.addOverride('jobs.release_nuget.permissions.contents', 'write');

// Replace GO_GITHUB_TOKEN PAT with GitHub App installation token for Go module publishing
const releaseWorkflow = project.github!.tryFindWorkflow('release')!;
releaseWorkflow.file!.addOverride('jobs.release_golang.steps.10.name', 'Generate token');
releaseWorkflow.file!.addOverride('jobs.release_golang.steps.10.id', 'generate_token');
releaseWorkflow.file!.addOverride('jobs.release_golang.steps.10.uses', `actions/create-github-app-token@${createGithubAppTokenVersion}`);
releaseWorkflow.file!.addOverride('jobs.release_golang.steps.10.with', {
  'app-id': '${{ secrets.PROJEN_APP_ID }}',
  'private-key': '${{ secrets.PROJEN_APP_PRIVATE_KEY }}',
});
// Remove old Release step fields from step 10
releaseWorkflow.file!.addDeletionOverride('jobs.release_golang.steps.10.env');
releaseWorkflow.file!.addDeletionOverride('jobs.release_golang.steps.10.run');
// Step 11: actual release using the App token
releaseWorkflow.file!.addOverride('jobs.release_golang.steps.11', {
  name: 'Release',
  env: {
    GIT_USER_NAME: 'github-actions[bot]',
    GIT_USER_EMAIL: '41898282+github-actions[bot]@users.noreply.github.com',
    GITHUB_TOKEN: '${{ steps.generate_token.outputs.token }}',
  },
  run: [
    // publib constructs https://<token>@github.com/... which works for PATs but not GitHub App tokens.
    // App tokens require the x-access-token: username prefix.
    'git config --global url."https://x-access-token:${GITHUB_TOKEN}@github.com/".insteadOf "https://${GITHUB_TOKEN}@github.com/"',
    'npx -p publib@latest publib-golang',
  ].join('\n'),
});

// PyPI Trusted Publishing — replace TWINE_USERNAME/TWINE_PASSWORD with OIDC
releaseWorkflow.file!.addDeletionOverride('jobs.release_pypi.steps.10.env.TWINE_USERNAME');
releaseWorkflow.file!.addDeletionOverride('jobs.release_pypi.steps.10.env.TWINE_PASSWORD');
releaseWorkflow.file!.addOverride('jobs.release_pypi.steps.10.env.PYPI_TRUSTED_PUBLISHER', 'true');

// NuGet Trusted Publishing — replace NUGET_API_KEY with OIDC
releaseWorkflow.file!.addDeletionOverride('jobs.release_nuget.steps.10.env.NUGET_API_KEY');
releaseWorkflow.file!.addOverride('jobs.release_nuget.steps.10.env.NUGET_TRUSTED_PUBLISHER', 'true');
releaseWorkflow.file!.addOverride('jobs.release_nuget.steps.10.env.NUGET_USERNAME', 'jjrawlins');

// Prevent release workflow from triggering on Go module commits
releaseWorkflow.file!.addOverride('on.push.paths-ignore', [
  'cdkamibuilder/**',
]);

// Fix tag existence check to use exact ref match (prevents Go module tags like
// cdkamibuilder/v0.0.190 from falsely matching when checking for v0.0.190)
releaseWorkflow.file!.addOverride('jobs.release.steps.5.run', [
  'TAG=$(cat dist/releasetag.txt)',
  '([ ! -z "$TAG" ] && git ls-remote -q --exit-code --tags origin "refs/tags/$TAG" && (echo "exists=true" >> $GITHUB_OUTPUT)) || (echo "exists=false" >> $GITHUB_OUTPUT)',
  'cat $GITHUB_OUTPUT',
].join('\n'));

// Dependency review on PRs — blocks merge if new high/critical vulnerabilities are introduced
// Works with existing Dependabot security updates to create a merge gate
const securityWorkflow = project.github!.addWorkflow('security');
securityWorkflow.on({
  pullRequest: {
    branches: ['main'],
  },
});
securityWorkflow.addJobs({
  'dependency-review': {
    name: 'Dependency Review',
    runsOn: ['ubuntu-latest'],
    permissions: {
      contents: workflows.JobPermission.READ,
      pullRequests: workflows.JobPermission.WRITE,
    },
    steps: [
      {
        name: 'Checkout',
        uses: 'actions/checkout@v5',
      },
      {
        name: 'Dependency Review',
        uses: 'actions/dependency-review-action@v4',
        with: {
          'fail-on-severity': 'high',
          'comment-summary-in-pr': 'always',
        },
      },
    ],
  },
});

new TextFile(project, '.tool-versions', {
  lines: [
    '# ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".',
    `nodejs ${devNodeVersion}`,
    'yarn 1.22.22',
  ],
});

// Add post-compile step to copy JSON files
project.compileTask.exec('cp -r src/StateMachineFiles lib/');

project.synth();
