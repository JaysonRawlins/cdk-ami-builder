import { awscdk } from 'projen';

import { NpmAccess } from 'projen/lib/javascript';


const cdkVersion = '2.150.0';
const minNodeVersion = '20.9.0';
const jsiiVersion = '~5.4.0';
const constructsVersion = '10.3.2';
const projenVersion = '0.91.6';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Jayson Rawlins',
  description: 'Creates an EC2 AMI using an Image Builder Pipeline and returns the AMI ID.',
  keywords: ['ami', 'imagebuilder', 'image builder', 'ec2'],
  authorAddress: 'jayson.rawlins@gmail.com',
  packageName: '@jjrawlins/cdk-ami-builder',
  minNodeVersion: minNodeVersion,
  cdkVersion: cdkVersion,
  constructsVersion: constructsVersion,
  projenVersion: projenVersion,
  lambdaOptions: {
    runtime: awscdk.LambdaRuntime.NODEJS_20_X,
  },
  defaultReleaseBranch: 'main',
  license: 'Apache-2.0',
  jsiiVersion: jsiiVersion,
  name: '@jjrawlins/cdk-ami-builder',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/jjrawlins/cdk-ami-builder.git',
  githubOptions: {
    mergify: false,
    pullRequestLint: false,
  },
  depsUpgrade: false,
  deps: [
    'projen',
    'constructs',
    'crypto-js',
    'lodash',
  ],
  devDeps: [
    '@types/axios',
    '@aws-sdk/types',
    '@types/node',
    '@types/lodash',
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
    '@types/aws-lambda',
    '@types/js-yaml',
    'js-yaml',
    'lodash.merge',
    '@types/crypto-js',
    'crypto-js',
    'cdk-iam-floyd',
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
  publishToPypi: {
    distName: 'jjrawlins_cdk-ami-builder',
    module: 'jjrawlins_cdk_ami_builder',
  },
  publishToGo: {
    moduleName: 'github.com/jjrawlins/cdk-ami-builder',
  },
});

project.github!.actions.set('actions/checkout', 'actions/checkout@v4');
project.github!.actions.set('actions/setup-node', 'actions/setup-node@v4');
project.github!.actions.set('actions/upload-artifact', 'actions/upload-artifact@v4');
project.github!.actions.set('actions/download-artifact', 'actions/download-artifact@v4');

project.synth();
