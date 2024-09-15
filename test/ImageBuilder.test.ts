import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { IpAddresses, SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { ImagePipeline } from '../src';

describe('Image Building Tests', () => {


  test('ImageBuildingSimpleTest', () => {
    const app = new App();
    const testStack = new Stack(app, 'TestStack',
      {
        env: {
          account: '5555555555',
          region: 'eu-central-1',
        },
      });
    const vpc = new Vpc(testStack, 'Vpc', {
      ipAddresses: IpAddresses.cidr('17.0.0.0/16'),
      maxAzs: 2,
      subnetConfiguration: [
        {
          name: 'Public',
          subnetType: SubnetType.PUBLIC,
          cidrMask: 24,
        },
        {
          name: 'Private',
          subnetType: SubnetType.PRIVATE_WITH_EGRESS,
          cidrMask: 24,
        },
      ],
      natGateways: 1,
    });

    new ImagePipeline(testStack, 'ImagePipelineTest', {
      parentImage: 'ami-09694bfab577e90b0',
      vpc: vpc,
      components: [
        {
          name: 'TestComponent',
          description: 'Test Component',
          componentVersion: '1.0.0',
          platform: 'Linux',
          componentDocument: {
            name: 'TestComponent',
            description: 'Test Component',
            schemaVersion: '1.0',
            phases: [{
              name: 'build',
              steps: [
                {
                  name: 'hello',
                  action: 'ExecuteBash',
                  inputs: {
                    commands: [
                      'echo "Hello World"',
                    ],
                  },
                },
              ],
            }],
          },
        },
      ],
    });

    const template = Template.fromStack(testStack);
    // Expected patterns
    const account = '5555555555';
    const region = 'eu-central-1';
    const bucketMatch = new RegExp(`cdk-[0-9a-z]{9}-assets-${account}-${region}`);
    const assetMatch = /[0-9a-f]{64}\.zip/;
    const assetBucket = 'cdk-123456789-assets-5555555555-eu-central-1';
    const assetKey = '1234567890123456789012345678901234567890123456789012345678901234.zip';

    expect.addSnapshotSerializer({
      test: (val) => typeof val === 'string'
                && (val.match(bucketMatch) != null
                    || val.match(assetMatch) != null),
      print: (val) => {
        // Substitute both the bucket part and the asset zip part
        let sval = `${val}`;
        sval = sval.replace(bucketMatch, assetBucket);
        sval = sval.replace(assetMatch, assetKey);
        return `"${sval}"`;
      },
    });
    const recipeMatch = new RegExp(/[\w\d]+-ImageRecipe-[a-fA-F0-9]{20,40}-[\d]-[\d]-[\d]/);
    const recipeName = 'TestStack-ImageRecipe-3a999ee333d4f4b8959821499f063ec6-0-0-1';
    expect.addSnapshotSerializer({
      test: (val) => typeof val === 'string'
                && (val.match(recipeMatch) != null),
      print: (val) => {
        // Substitute both the bucket part and the asset zip part
        let sval = `${val}`;
        sval = sval.replace(recipeMatch, recipeName);
        return `"${sval}"`;
      },
    });

    expect(template).toMatchSnapshot();

  });
});
