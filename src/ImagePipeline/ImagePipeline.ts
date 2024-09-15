import * as fs from 'fs';
import * as path from 'node:path';

import {
  Arn,
  aws_iam as iam,
  aws_imagebuilder as imagebuilder,
  aws_sns as sns,
  aws_sns_subscriptions as subscriptions,
  CustomResource,
  Duration,
  RemovalPolicy,
  Stack,
} from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Role } from 'aws-cdk-lib/aws-iam';
import { Key } from 'aws-cdk-lib/aws-kms';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { Statement } from 'cdk-iam-floyd';
import { Construct } from 'constructs';
import * as CryptoJS from 'crypto-js';
import * as yaml from 'js-yaml';
import { CheckStateMachineStatusFunction } from '../Lambdas/CheckStateMachineStatus/CheckStateMachineStatus-function';
import { StartStateMachineFunction } from '../Lambdas/StartStateMachine/StartStateMachine-function';
import { StateMachine } from '../StateMachine';

export interface IEbsParameters {
  /**
     * Size of the volume in GiB
     */
  volumeSize: number;
  /**
     * Type of the volume
     *
     * @default gp2
     */
  volumeType?: string;
  /**
     * KMS Key Alias for the volume
     * If not specified, the default AMI encryption key alias will be used
     * Custom KMS Keys Alias need to exist in the other accounts for distribution to work correctly.
     * @default alias/aws/ebs
     */
  kmsKeyId?: string;
  /**
     * Whether the volume is encrypted
     *
     * @default true
     */
  encrypted?: boolean;
  /**
     * Whether the volume is deleted when the instance is terminated
     *
     * @default true
     */
  deleteOnTermination?: boolean;
}

export interface VolumeProps {
  /**
     * Name of the volume
     */
  readonly deviceName: string;
  /**
     * EBS Block Store Parameters
     *
     * By default, the 'kmsKeyId' of EBS volume is set to 'amiEncryptionKey.keyId',
     * and 'encrypted' is set to 'true'. If you wish to use a different KMS Key,
     * you may do so. However, please make sure that the necessary permissions
     * and compliance requirements for the KMS Key are already set up.
     */
  readonly ebs: IEbsParameters;
}

/**
 * Build commands for the component
 */
export interface IActionCommands {
  commands: string[];
}

export interface IStepCommands {
  name: string; // ^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$/
  action: 'ExecuteBash' | 'ExecutePowerShell' | 'UpdateOS';
  inputs?: IActionCommands;
}

/**
 * Phases for the component
 */
export interface IPhases {
  name: 'build' | 'validate' | 'test';
  steps: IStepCommands[];
}

export interface IInputParameter {
  type: string;
  default: string;
  description: string;
}

export type IParameters = Record<string, IInputParameter>;

/**
 * Component data
 */
export interface IComponentDocument {
  name?: string;
  description?: string;
  schemaVersion?: string;
  phases: IPhases[];
}

/**
 * Component props
 */
export interface IComponentProps {
  name?: string;
  description?: string;
  componentVersion?: string;
  schemaVersion?: string;
  parameters?: IParameters;
  platform?: 'Linux' | 'Windows';
  componentDocument: IComponentDocument;
}

export interface ImagePipelineProps {
  readonly subnetId?: string;
  readonly securityGroups?: string[];
  readonly distributionRegions?: string[];
  /**
     * Vpc to use for the Image Builder Pipeline
     */
  readonly vpc: Vpc;
  /**
     * List of component props
     */
  readonly components: IComponentProps[];
  /**
     * Name of the instance profile that will be associated with the Instance Configuration.
     */
  readonly profileName?: string;
  /**
     * Additional policies to add to the instance profile associated with the Instance Configurations
     */
  readonly additionalPolicies?: iam.ManagedPolicy[];

  /**
     * UserData script that will override default one (if specified)
     *
     * @default - none
     */
  readonly userDataScript?: string;
  /**
     * Image recipe version (Default: 0.0.1)
     */
  readonly imageRecipeVersion?: string;

  /**
     * The source (parent) image that the image recipe uses as its base environment. The value can be the parent image ARN or an Image Builder AMI ID
     */
  readonly parentImage: string;

  /**
     * List of instance types used in the Instance Configuration (Default: [ 't3.medium', 'm5.large', 'm5.xlarge' ])
     */
  readonly instanceTypes?: string[];
  /**
     * Platform type Linux or Windows (Default: Linux)
     */
  readonly platform?: 'Linux' | 'Windows';
  /**
     * Email used to receive Image Builder Pipeline Notifications via SNS
     */
  readonly email?: string;
  /**
     * List of security group IDs for the Infrastructure Configuration
     */
  readonly securityGroupIds?: string[];
  /**
     * Subnet ID for the Infrastructure Configuration
     */
  readonly ebsVolumeConfigurations?: VolumeProps[];
  /**
     * Set to true if you want to enable continuous vulnerability scans through AWS Inpector
     */
  readonly enableVulnScans?: boolean;
  /**
     * Store vulnerability scans through AWS Inspector in ECR using this repo name (if option is enabled)
     */
  readonly vulnScansRepoName?: string;
  /**
     * Store vulnerability scans through AWS Inspector in ECR using these image tags (if option is enabled)
     */
  readonly vulnScansRepoTags?: string[];

  /**
     * This variable represents an array of shared account IDs.
     * It is optional and readonly.
     * If it is provided, this AMI will be visible to the accounts in the array.
     *  In order to share the AMI with other accounts, you must specify a KMS key ID for the EBS volume configuration as AWS does not allow sharing AMIs encrypted with the default AMI encryption key.
     * @type {Array<string>}
     * @readonly
     */
  readonly distributionAccountIds?: string[];

  /**
     * Flag indicating whether the debug image pipeline is enabled or not.
     * This variable is optional. Default value is false.
     *  Functionally, this will flag to return as finished immediately after first check to see if the image pipeline has finished.
     *  This is useful for debugging the image pipeline.  However, there will be no AMI value returned.
     *
     * @type {boolean}
     * @readonly
     */
  readonly debugImagePipeline?: boolean;

  /**
     * The alias of the KMS key used for encryption and decryption of content in the distribution.
     * This property is optional and readonly.
     * The default encryption key is not compatible with cross-account AMI sharing.
     * If you specify distributionAccountIds, you must specify a non-default encryption key using this property. Otherwise, Image Builder will throw an error.
     * Keep in mind that the KMS key in the distribution account must allow the EC2ImageBuilderDistributionCrossAccountRole role to use the key.
     * @type {string}
     * @readonly
     */
  readonly distributionKmsKeyAlias?: string;
}

export class ImagePipeline extends Construct {
  imageRecipeComponents: imagebuilder.CfnImageRecipe.ComponentConfigurationProperty[];
  imagePipelineArn: string;
  imageId: string;

  constructor(scope: Construct, id: string, props: ImagePipelineProps) {
    super(scope, id);
    let infrastructureConfig: imagebuilder.CfnInfrastructureConfiguration;
    let imageRecipe: imagebuilder.CfnImageRecipe;
    this.imageRecipeComponents = [];
    this.imageId = '';
    this.imagePipelineArn = '';
    const account = Stack.of(this).account;
    const region = Stack.of(this).region;
    const stackName = Stack.of(this).stackName;
    const topicKmsKey = new Key(this, 'TopicKmsKey', {
      description: 'KMS Key used to encrypt the SNS topic',
      alias: `/ami-builder/${stackName}-TopicKmsKey`,
    });
    // Construct code below
    const topic = new sns.Topic(this, 'ImageBuilderTopic', {
      displayName: 'Image Builder Notify',
      masterKey: topicKmsKey,
    });

    if (props.email != null) {
      topic.addSubscription(new subscriptions.EmailSubscription(props.email));
    }

    const role = new iam.Role(this, 'Role', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
      description: 'IAM role used as part of an Image Builder pipeline',
    });

    role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('EC2InstanceProfileForImageBuilder'));
    role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('EC2InstanceProfileForImageBuilderECRContainerBuilds'));
    role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'));
    if (typeof props.additionalPolicies !== 'undefined' && props.additionalPolicies.length >= 1) {
      for (const policy of props.additionalPolicies) {
        role.addManagedPolicy(policy);
      }
    }

    const instanceProfileName = props.profileName ?? `${stackName}-InstanceProfile`;
    const infraConfigName = `${stackName}-InfrastructureConfiguration`;
    const imageRecipeName = `${stackName}-ImageRecipe`;
    const imageRecipeVersion = props.imageRecipeVersion ?? '0.0.1';
    const pipelineBaseName = `${stackName}-ImagePipeline`;
    const pipelineName = `${pipelineBaseName}-${imageRecipeVersion.replace(/\./g, '-')}`;

    // Use the first volume configuration's KMS key ID as the effective KMS key ID
    // If the first volume configuration does not have a KMS key ID, use the default AMI encryption key
    // Keep in mind though that default AMI encryption key is not compatible with cross-account AMI sharing
    const distributionKeyAlias = props.distributionKmsKeyAlias ?? 'alias/aws/ebs';
    const ebsVolumeEffectiveKmsAlias = props.ebsVolumeConfigurations?.[0]?.ebs?.kmsKeyId
      ? props.ebsVolumeConfigurations![0].ebs.kmsKeyId
      : (props.distributionKmsKeyAlias ?? 'alias/aws/ebs');
    const distributionAccountIds = props.distributionAccountIds ?? [];
    const distributionRegions = props.distributionRegions ?? [];

    if ((props.distributionRegions?.length === 0 && props.distributionAccountIds?.length) ||
      (props.distributionRegions?.length && props.distributionAccountIds?.length === 0)) {
      throw new Error('distributionRegions must be specified if distributionAccountIds is specified');
    }

    if ((props.distributionRegions?.length && props.distributionAccountIds?.length) && props.distributionKmsKeyAlias === 'alias/aws/ebs') {
      throw new Error('If distributionRegions and distributionAccountIds are specified, distributionKmsKeyAlias must be specified');
    }

    const profile = new iam.CfnInstanceProfile(this, 'InstanceProfile', {
      roles: [role.roleName],
      instanceProfileName: instanceProfileName,
    });

    const defaultGroup = new ec2.SecurityGroup(this, 'SecurityGroup', {
      vpc: props.vpc,
      allowAllOutbound: true,
    });

    if (props.securityGroups == null || props.subnetId == null) {
      infrastructureConfig = new imagebuilder.CfnInfrastructureConfiguration(this, 'InfrastructureConfiguration', {
        instanceProfileName: instanceProfileName,
        name: infraConfigName,
        description: 'Infrastructure Configuration for Image Builder',
        instanceTypes: props.instanceTypes ?? ['t3.medium', 'm5.large', 'm5.xlarge'],
        snsTopicArn: topic.topicArn,
        securityGroupIds: [defaultGroup.securityGroupId],
        subnetId: props.vpc.publicSubnets[0].subnetId,
      });

    } else {
      infrastructureConfig = new imagebuilder.CfnInfrastructureConfiguration(this, 'InfrastructureConfiguration', {
        instanceProfileName: instanceProfileName,
        name: infraConfigName,
        description: 'Infrastructure Configuration for Image Builder',
        instanceTypes: props.instanceTypes ?? ['t3.medium', 'm5.large', 'm5.xlarge'],
        snsTopicArn: topic.topicArn,
        securityGroupIds: props.securityGroups,
        subnetId: props.subnetId,
      });
    }
    infrastructureConfig.addDependency(profile);

    /**
         * Image recipe configuration
         */
    let imageRecipeProps: imagebuilder.CfnImageRecipeProps;
    imageRecipeProps = {
      components: [],
      name: imageRecipeName,
      parentImage: props.parentImage,
      version: imageRecipeVersion ?? '0.0.1',
    };
    if (props.userDataScript) {
      imageRecipeProps = {
        ...imageRecipeProps,
        additionalInstanceConfiguration: {
          userDataOverride: props.userDataScript,
        },
      };
    }

    if (props.ebsVolumeConfigurations?.[0].ebs) {
      // Go over each configuration and set the default
      for (const config of props.ebsVolumeConfigurations!) {
        // If encryption is not set, enable it
        if (config.ebs.encrypted === undefined) {
          config.ebs.encrypted = true;
        }

        // If KMS Key ID is not set, use the default
        if (!config.ebs.kmsKeyId) {
          config.ebs.kmsKeyId = ebsVolumeEffectiveKmsAlias;
        }

        // If deleteOnTermination is not set, enable it
        if (!config.ebs.deleteOnTermination) {
          config.ebs.deleteOnTermination = true;
        }
      }
      imageRecipeProps = {
        ...imageRecipeProps,
        blockDeviceMappings: props.ebsVolumeConfigurations,
      };
    } else {
      imageRecipeProps = {
        ...imageRecipeProps,
        blockDeviceMappings: [
          {
            deviceName: '/dev/sda1',
            ebs: {
              kmsKeyId: 'alias/aws/ebs',
              encrypted: true,
              volumeSize: 30,
              volumeType: 'gp3',
              deleteOnTermination: true,
            },
          },
        ],
      };
    }
    imageRecipe = new imagebuilder.CfnImageRecipe(this, 'ImageRecipe', imageRecipeProps);

    props.components.forEach((component: IComponentProps, index: number) => {
      const componentName = component.name?.replace(/ /g, '-');
      component.name = componentName;
      const componentHash = this.stringToMD5(JSON.stringify(component));
      const componentDocumentHash = this.stringToMD5(JSON.stringify(component.componentDocument));
      const componentDocument: IComponentDocument = {
        name: componentName ?? `${stackName}-${componentDocumentHash}-${index}`,
        description: component.description,
        schemaVersion: component.schemaVersion ?? '1.0',
        phases: component.componentDocument.phases,
      };
      const data = yaml.dump(componentDocument);
      let newComponent = new imagebuilder.CfnComponent(this, component.name ?? `Component-${index}`, {
        name: component.name ?? `${stackName.toLowerCase()}-${componentHash}-${index}`,
        description: component.description,
        platform: component.platform ?? 'Linux',
        version: component.componentVersion ?? props.imageRecipeVersion ?? '0.0.1',
        data: data,
      });

      // add the component to the Image Recipe
      this.imageRecipeComponents.push({ componentArn: newComponent.attrArn });
      imageRecipe.components = this.imageRecipeComponents;
    });

    const imageRecipeHash = this.stringToMD5(JSON.stringify(this.imageRecipeComponents));
    imageRecipe.name = `${imageRecipeName}-${imageRecipeHash}-${imageRecipeVersion.replace(/\./g, '-')}`;

    let imagePipelineProps: imagebuilder.CfnImagePipelineProps;
    imagePipelineProps = {
      infrastructureConfigurationArn: infrastructureConfig.attrArn,
      name: pipelineName,
      description: 'Image pipeline',
      imageRecipeArn: imageRecipe.attrArn,
    };
    if (props.enableVulnScans) {
      imagePipelineProps = {
        ...imagePipelineProps,
        imageScanningConfiguration: {
          imageScanningEnabled: props.enableVulnScans,
          ecrConfiguration: {
            repositoryName: props.vulnScansRepoName,
            containerTags: props.vulnScansRepoTags,
          },
        },
      };
    }
    if (distributionAccountIds.length > 0 && distributionRegions.length > 0) {
      const distributionsList: imagebuilder.CfnDistributionConfiguration.DistributionProperty[] = [];
      distributionRegions.forEach(distributionRegion => {
        const distributionConfig: any = {
          region: distributionRegion,
          amiDistributionConfiguration: {
            //Capital case here because it's an object of type any, but capital case is what is expected in CloudFormation
            //https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-amidistributionconfiguration.html
            Name: `${imageRecipeName}-${distributionRegion}-{{imagebuilder:buildDate}}`,
            Description: `copy AMI ${imageRecipeName} to ${distributionRegion}`,
            TargetAccountIds: distributionAccountIds,
            LaunchPermissionConfiguration: {
              UserIds: distributionAccountIds,
            },
            KmsKeyId: distributionKeyAlias, //using default AWS-managed key if one isn't given is prohibited
          },
        };
        distributionsList.push(distributionConfig);
      });
      const amiDistributionConfiguration = new imagebuilder.CfnDistributionConfiguration(this, 'amiDistributionConfiguration', {
        name: `${imageRecipeName}-distribution-config-${imageRecipeVersion.replace(/\./g, '-')}`,
        description: `Cross account distribution settings for ${imageRecipeName}`,
        distributions: distributionsList,
      });
      imagePipelineProps = {
        ...imagePipelineProps,
        distributionConfigurationArn: amiDistributionConfiguration.attrArn,
      };
    }

    const imageBuildPipeline = new imagebuilder.CfnImagePipeline(this, 'ImagePipeline', imagePipelineProps);
    this.imagePipelineArn = imageBuildPipeline.attrArn;

    const startStateMachineFunction = new StartStateMachineFunction(this, 'StartStateMachineFunction',
      {
        description: 'StartStateMachineFunction',
        memorySize: 128,
        timeout: Duration.minutes(12),
        initialPolicy: [
          new Statement.States().allow()
            .toStartExecution()
            .toGetExecutionHistory()
            .toListExecutions()
            .toDescribeExecution()
            .onAllResources(),
          new Statement.Imagebuilder().allow()
            .toListImagePipelines()
            .toStartImagePipelineExecution()
            .toGetImage()
            .onAllResources(),
          new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: [
              'kms:*',
            ],
            // arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}/
            resources: [Arn.format({
              service: 'kms',
              resource: 'alias/aws/ebs',
              account: '*',
              region: '*',
              partition: 'aws',
            })],
          }),
        ],
      });

    const checkStateMachineStatusFunction = new CheckStateMachineStatusFunction(this, 'CheckStateMachineStatusFunction', {
      description: 'CheckStateMachineStatusFunction',
      memorySize: 128,
      timeout: Duration.minutes(12),
      initialPolicy: [
        new Statement.States().allow()
          .toDescribeExecution()
          .toListExecutions()
          .toGetExecutionHistory()
          .onAllResources(),
        new Statement.Imagebuilder().allow()
          .toListImagePipelines()
          .toStartImagePipelineExecution()
          .toGetImage()
          .onAllResources(),
        new Statement.Ec2().allow()
          .toModifyImageAttribute()
          .onAllResources(),
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: [
            'kms:*',
          ],
          resources: [Arn.format({
            service: 'kms',
            resource: 'alias/aws/ebs',
            account: '*',
            region: '*',
            partition: 'aws',
          })],
        }),
      ],
    });

    const provider = new Provider(this, 'ResourceProvider', {
      onEventHandler: startStateMachineFunction,
      isCompleteHandler: checkStateMachineStatusFunction,
      totalTimeout: Duration.minutes(60),
      queryInterval: Duration.minutes(2),
    });

    const stateMachineRole = new Role(this, 'StateMachineRole', {
      assumedBy: new iam.ServicePrincipal('states.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaRole'),
      ],
      inlinePolicies: {
        StateMachinePolicy: new iam.PolicyDocument({
          statements: [
            new Statement.Xray().allow()
              .toPutTraceSegments()
              .toPutTelemetryRecords()
              .toGetSamplingRules()
              .toGetSamplingTargets()
              .onAllResources(),
            new iam.PolicyStatement({
              effect: iam.Effect.ALLOW,
              actions: [
                'imagebuilder:*',
              ],
              resources: [`arn:aws:imagebuilder:${region ?? '*'}:${account ?? '*'}:image-pipeline/${pipelineBaseName.toLowerCase()}-*`],
            }),
            new Statement.Imagebuilder().allow()
              .toGetImage()
              .onAllResources(),
          ],
        }),
      },
    });

    const stateMachine = new StateMachine(this, 'StateMachine', {
      definition: JSON.parse(
        fs.readFileSync(path.join(
          __dirname, '..', 'StateMachineFiles', 'ImageBuildingStateMachine.json'), 'utf8').toString()),
      role: stateMachineRole,
    });

    const effectiveRemovalPolicy = props.debugImagePipeline === true ? RemovalPolicy.RETAIN_ON_UPDATE_OR_DELETE : RemovalPolicy.DESTROY;

    const componentsHash = this.stringToMD5(JSON.stringify(props.components));
    const imagePipeline = new CustomResource(this, 'CustomResource',
      {
        serviceToken: provider.serviceToken,
        properties: {
          ImagePipelineArn: imageBuildPipeline.attrArn,
          StateMachineArn: stateMachine.stateMachineArn,
          Version: props.imageRecipeVersion ?? '0.0.1',
          ComponentsHash: componentsHash,
          PhysicalResourceId: `${stackName}-ImagePipeline-${imageRecipeVersion.replace(/\./g, '-')}`,
          AmiKmsId: distributionKeyAlias,
          SharedAccountIds: distributionAccountIds.join(','),
          DebugImagePipeline: props.debugImagePipeline === true ? 'true' : 'false',
        },
        removalPolicy: effectiveRemovalPolicy,
      });

    this.imageId = imagePipeline.getAttString('AmiId');
  }

  private stringToMD5(inputString: string): string {
    return CryptoJS.MD5(inputString).toString();
  }

}

