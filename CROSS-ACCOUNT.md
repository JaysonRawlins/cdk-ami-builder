### Cross Account Distribution

https://docs.aws.amazon.com/imagebuilder/latest/userguide/cross-account-dist.html

#### IAM Role in Destination Account

It can be a bit tricky trying ot share an IAM role across accounts. The following stack can be used to create the role
in the destination account.

You will need the library ` 'cdk-iam-floyd',` in your `package.json` file.

```typescript
import { Arn, CfnOutput, Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { ManagedPolicy, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import * as floyd from 'cdk-iam-floyd';
import { Construct } from 'constructs';

interface EC2ImageBuilderDistributionCrossAccountRoleStackProps extends StackProps {
    sourceAccountId: string;
}

export class EC2ImageBuilderDistributionCrossAccountRoleStack extends Stack {
    constructor(scope: Construct, id: string, props: EC2ImageBuilderDistributionCrossAccountRoleStackProps) {
        super(scope, id, props);

        const compositePrincipal = new iam.CompositePrincipal(new ServicePrincipal('imagebuilder.amazonaws.com'));
        compositePrincipal.addPrincipals(new iam.ArnPrincipal(Arn.format({
            account: props.sourceAccountId,
            partition: 'aws',
            service: 'iam',
            resource: 'role',
            region: '',
            resourceName: 'aws-service-role/imagebuilder.amazonaws.com/AWSServiceRoleForImageBuilder',
        })));

        compositePrincipal.addPrincipals(new ServicePrincipal('ec2.amazonaws.com'));

        //`arn:aws:iam::${props.sourceAccountId}:role/aws-service-role/imagebuilder.amazonaws.com/AWSServiceRoleForImageBuilder`));


        let EC2TagsPermission = new floyd.PolicyStatement();
        EC2TagsPermission.effect = iam.Effect.ALLOW;
        EC2TagsPermission.addActions('ec2:DeleteTags', 'ec2:CreateTags');
        EC2TagsPermission.addResources('arn:aws:ec2:*::snapshot/*', 'arn:aws:ec2:*::image/*');

        let ECRImagePermission = new floyd.PolicyStatement();
        ECRImagePermission.effect = iam.Effect.ALLOW;
        ECRImagePermission.addActions('ecr:BatchGetImage', 'ecr:BatchDeleteImage');
        ECRImagePermission.addResources('arn:aws:ecr:*:*:repository/*');

        let ImageBuilderEC2TagServicePermission = new floyd.PolicyStatement();
        ImageBuilderEC2TagServicePermission.effect = iam.Effect.ALLOW;
        ImageBuilderEC2TagServicePermission.addActions('ec2:DescribeImages', 'tag:GetResources', 'imagebuilder:DeleteImage');
        ImageBuilderEC2TagServicePermission.addResources('*');

        let role: iam.Role;
        role = new iam.Role(this, 'IamRole', {
            description: 'EC2 ImageBuilder Distribution Cross Account Role',
            path: '/',
            assumedBy: compositePrincipal,
            roleName: 'EC2ImageBuilderDistributionCrossAccountRole',
            managedPolicies: [
                ManagedPolicy.fromAwsManagedPolicyName('Ec2ImageBuilderCrossAccountDistributionAccess'),
            ],
            inlinePolicies: {
                EC2ImageBuilderLifecycleExecutionPolicy: new iam.PolicyDocument({
                    statements: [
                        EC2TagsPermission,
                        ECRImagePermission,
                        ImageBuilderEC2TagServicePermission,
                        new floyd.Ec2().allow().toDeleteSnapshot().on('arn:aws:ec2:*:*:snapshot/*'),
                        new floyd.Ec2().allow()
                            .toEnableImageDeprecation()
                            .toDeregisterImage()
                            .toDescribeImageAttribute()
                            .toDisableImageDeprecation().on(
                            Arn.format({
                                account: props.sourceAccountId,
                                partition: 'aws',
                                service: 'ec2',
                                resource: 'image',
                                region: '',
                                resourceName: '*',
                            }),
                        ),
                    ],
                }),
                AllowRoleToPerformEC2OperationsOnBehalfOfTheDestinationAccount: new iam.PolicyDocument({
                    statements: [
                        new floyd.Ec2().allow().toCreateTags().on('arn:aws:ec2:*:*:launch-template/*'),
                        new floyd.Ec2().allow()
                            .toDescribeImages()
                            .toCopyImage()
                            .toModifyImageAttribute()
                            .toDescribeLaunchTemplates().onAllResources(),
                        new floyd.Ec2({}).allow()
                            .toCreateLaunchTemplate()
                            .toCreateLaunchTemplateVersion().onAllResources(),
                    ],
                }),
                AllowRoleToPerformKMSOperationsOnBehalfOfTheDestinationAccount: new iam.PolicyDocument({
                    statements: [
                        new floyd.Kms().allow()
                            .toEncrypt()
                            .toDecrypt()
                            .toReEncryptTo()
                            .toGenerateDataKey()
                            .toGenerateDataKeyWithoutPlaintext()
                            .toDescribeKey()
                            .toCreateKey()
                            .toCreateGrant()
                            .toListGrants()
                            .toRevokeGrant()
                            .onAllResources(),
                    ],
                }),
            },
            maxSessionDuration: Duration.hours(1),
        });

        new CfnOutput(this, 'RoleArn', {
            value: role.roleArn,
        });

    }
}
```

Creates a cross-account AWS Identity and Access Management (IAM) role used by the AWS EC2 Image Builder service to share
Amazon Machine Images (AMIs) between accounts.

## Structure

- The `EC2ImageBuilderDistributionCrossAccountRoleStack` class extends the Stack class in the AWS CDK library. It adds
  an extra property, `sourceAccountId`, to `StackProps`. This `sourceAccountId` is the AWS account ID from where the
  AMIs are being shared.

- This class sets up a composite principal composed of the `ServicePrincipal` for the `imagebuilder.amazonaws.com`
  service and the `ArnPrincipal` for the `iam` service of the source account, specifically for the service role needed
  by the Image Builder. Additionally, it adds the `ServicePrincipal` for the `ec2.amazonaws.com` service.

- Several IAM permissions (policy statements) are created with an 'Allow' effect:

    1. EC2 Tags Permissions: Grants permissions to create and delete tags on specific EC2 resources.

    2. ECR Image Permissions: Grants permissions for operations on ECR Images such as batch get and batch delete.

    3. ImageBuilder EC2 Tag Service Permissions: Grants permissions for describing EC2 images, `tag:GetResources`,
       and `imagebuilder:DeleteImage`.

    4. EC2 Operations:  Permissions for `DeleteSnapshot` operation on EC2 snapshots and allows various operations on
       Images.

    5. Cross Account EC2 Operations: Grants the role permission to perform EC2 operations on behalf of the destination
       account, such as creating tags, describing images, copying images, modifying image attributes, and describing
       launch templates.

    6. KMS Operations: Allows specified operations on KMS keys on behalf of the destination account.

- An IAM role named 'EC2ImageBuilderDistributionCrossAccountRole' is created with these permissions and principals and
  is assigned a maximum session duration of 1 hour.

- Finally, the CloudFormation output for the ARN of the created role is defined.

## Use

This cross-account IAM role can be assumed by the Image Builder service in the source account to perform specified
operations via permissions provided by the attached policies in the destination account. This is a key part of AWS
resource sharing practices, where a role in one account is assumed by a service user in another for the latter to
facilitate its operations (here, AMI sharing).
