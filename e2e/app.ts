import { App, CfnOutput, Stack } from 'aws-cdk-lib';
import { IpAddresses, SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { ImagePipeline } from '../src';

const app = new App();
const stack = new Stack(app, 'CdkAmiBuilderE2ETest', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION || 'us-east-2',
  },
});

const runId = app.node.tryGetContext('runId') || '1';

const vpc = new Vpc(stack, 'E2EVpc', {
  ipAddresses: IpAddresses.cidr('10.250.0.0/16'),
  maxAzs: 2,
  subnetConfiguration: [
    { name: 'Public', subnetType: SubnetType.PUBLIC, cidrMask: 24 },
    { name: 'Private', subnetType: SubnetType.PRIVATE_WITH_EGRESS, cidrMask: 24 },
  ],
  natGateways: 1,
});

const parentImage = StringParameter.valueForStringParameter(
  stack,
  '/aws/service/ami-amazon-linux-latest/al2023-ami-kernel-default-x86_64',
);

const pipeline = new ImagePipeline(stack, 'E2EPipeline', {
  vpc,
  parentImage,
  components: [
    {
      name: 'E2E-Test-Component',
      platform: 'Linux',
      componentDocument: {
        schemaVersion: '1.0',
        phases: [
          {
            name: 'build',
            steps: [
              {
                name: 'HelloWorld',
                action: 'ExecuteBash',
                inputs: { commands: ['echo "E2E test build step"'] },
              },
            ],
          },
        ],
      },
    },
  ],
  imageRecipeVersion: `0.0.${runId}`,
  instanceTypes: ['t3.medium'],
});

new CfnOutput(stack, 'ImageId', { value: pipeline.imageId });
new CfnOutput(stack, 'PipelineArn', { value: pipeline.imagePipelineArn });

app.synth();
