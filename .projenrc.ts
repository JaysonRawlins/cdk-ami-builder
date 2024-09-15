import { awscdk } from 'projen';

import { NpmAccess } from 'projen/lib/javascript';


const cdkVersion = '2.141.0';
const constructsVersion = '10.3.0';
const minNodeVersion = '20.0.0';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Jayson Rawlins',
  description: 'Creates an EC2 AMI using an Image Builder Pipeline and returns the AMI ID.',
  keywords: ['ami', 'imagebuilder', 'image builder', 'ec2'],
  authorAddress: 'jayson.rawlins@gmail.com',
  packageName: '@jjrawlins/cdk-ami-builder',
  minNodeVersion: minNodeVersion,
  cdkVersion: cdkVersion,
  constructsVersion: constructsVersion,
  lambdaOptions: {
    runtime: awscdk.LambdaRuntime.NODEJS_18_X,
  },
  defaultReleaseBranch: 'main',
  license: 'Apache-2.0',
  jsiiVersion: '~5.0.0',
  name: '@jjrawlins/cdk-ami-builder',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/jjrawlins/cdk-ami-builder-construct.git',
  githubOptions: {
    mergify: false,
    pullRequestLint: false,
  },
  depsUpgrade: false,
  deps: [
    `aws-cdk-lib@^${cdkVersion}`,
    '@types/node@^20',
    'crypto-js',
  ],
  devDeps: [
    `aws-cdk-lib@^${cdkVersion}`,
    `aws-cdk@^${cdkVersion}`,
    '@types/js-yaml',
    '@types/lodash.merge',
    '@types/crypto-js',
    '@types/node@^18',
  ],
  bundledDeps: [
    '@aws-sdk/client-sqs',
    '@aws-sdk/client-ec2',
    '@aws-sdk/client-ssm',
    '@aws-sdk/client-sns',
    '@aws-sdk/client-ecs',
    '@aws-sdk/client-kms',
    '@aws-sdk/client-s3',
    '@aws-sdk/client-secrets-manager',
    '@aws-sdk/client-sfn',
    '@types/node@^18',
    '@types/aws-lambda',
    '@types/js-yaml',
    'js-yaml',
    'lodash.merge',
    '@types/crypto-js',
    'crypto-js',
    'cdk-iam-floyd',
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
  publishToPypi: {
    distName: 'jjrawlins.cdk-ami-builder',
    module: 'jjrawlins.cdk_ami_builder',
  },
  publishToGo: {
    moduleName: 'github.com/jjrawlins/cdk-ami-builder-construct',
  },
});

project.synth();
