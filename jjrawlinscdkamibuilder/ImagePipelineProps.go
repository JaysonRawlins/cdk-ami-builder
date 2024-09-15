package jjrawlinscdkamibuilder

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awsec2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
)

type ImagePipelineProps struct {
	// List of component props.
	Components *[]IComponentProps `field:"required" json:"components" yaml:"components"`
	// The source (parent) image that the image recipe uses as its base environment.
	//
	// The value can be the parent image ARN or an Image Builder AMI ID.
	ParentImage *string `field:"required" json:"parentImage" yaml:"parentImage"`
	// Vpc to use for the Image Builder Pipeline.
	Vpc awsec2.Vpc `field:"required" json:"vpc" yaml:"vpc"`
	// Additional policies to add to the instance profile associated with the Instance Configurations.
	AdditionalPolicies *[]awsiam.ManagedPolicy `field:"optional" json:"additionalPolicies" yaml:"additionalPolicies"`
	// Flag indicating whether the debug image pipeline is enabled or not.
	//
	// This variable is optional. Default value is false.
	//  Functionally, this will flag to return as finished immediately after first check to see if the image pipeline has finished.
	//  This is useful for debugging the image pipeline.  However, there will be no AMI value returned.
	DebugImagePipeline *bool `field:"optional" json:"debugImagePipeline" yaml:"debugImagePipeline"`
	// This variable represents an array of shared account IDs.
	//
	// It is optional and readonly.
	// If it is provided, this AMI will be visible to the accounts in the array.
	//  In order to share the AMI with other accounts, you must specify a KMS key ID for the EBS volume configuration as AWS does not allow sharing AMIs encrypted with the default AMI encryption key.
	DistributionAccountIds *[]*string `field:"optional" json:"distributionAccountIds" yaml:"distributionAccountIds"`
	// The alias of the KMS key used for encryption and decryption of content in the distribution.
	//
	// This property is optional and readonly.
	// The default encryption key is not compatible with cross-account AMI sharing.
	// If you specify distributionAccountIds, you must specify a non-default encryption key using this property. Otherwise, Image Builder will throw an error.
	// Keep in mind that the KMS key in the distribution account must allow the EC2ImageBuilderDistributionCrossAccountRole role to use the key.
	DistributionKmsKeyAlias *string `field:"optional" json:"distributionKmsKeyAlias" yaml:"distributionKmsKeyAlias"`
	DistributionRegions *[]*string `field:"optional" json:"distributionRegions" yaml:"distributionRegions"`
	// Subnet ID for the Infrastructure Configuration.
	EbsVolumeConfigurations *[]*VolumeProps `field:"optional" json:"ebsVolumeConfigurations" yaml:"ebsVolumeConfigurations"`
	// Email used to receive Image Builder Pipeline Notifications via SNS.
	Email *string `field:"optional" json:"email" yaml:"email"`
	// Set to true if you want to enable continuous vulnerability scans through AWS Inpector.
	EnableVulnScans *bool `field:"optional" json:"enableVulnScans" yaml:"enableVulnScans"`
	// Image recipe version (Default: 0.0.1).
	ImageRecipeVersion *string `field:"optional" json:"imageRecipeVersion" yaml:"imageRecipeVersion"`
	// List of instance types used in the Instance Configuration (Default: [ 't3.medium', 'm5.large', 'm5.xlarge' ]).
	InstanceTypes *[]*string `field:"optional" json:"instanceTypes" yaml:"instanceTypes"`
	// Platform type Linux or Windows (Default: Linux).
	Platform *string `field:"optional" json:"platform" yaml:"platform"`
	// Name of the instance profile that will be associated with the Instance Configuration.
	ProfileName *string `field:"optional" json:"profileName" yaml:"profileName"`
	// List of security group IDs for the Infrastructure Configuration.
	SecurityGroupIds *[]*string `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	SecurityGroups *[]*string `field:"optional" json:"securityGroups" yaml:"securityGroups"`
	SubnetId *string `field:"optional" json:"subnetId" yaml:"subnetId"`
	// UserData script that will override default one (if specified).
	// Default: - none.
	//
	UserDataScript *string `field:"optional" json:"userDataScript" yaml:"userDataScript"`
	// Store vulnerability scans through AWS Inspector in ECR using this repo name (if option is enabled).
	VulnScansRepoName *string `field:"optional" json:"vulnScansRepoName" yaml:"vulnScansRepoName"`
	// Store vulnerability scans through AWS Inspector in ECR using these image tags (if option is enabled).
	VulnScansRepoTags *[]*string `field:"optional" json:"vulnScansRepoTags" yaml:"vulnScansRepoTags"`
}

