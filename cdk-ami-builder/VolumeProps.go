package cdk-ami-builder


type VolumeProps struct {
	// Name of the volume.
	DeviceName *string `field:"required" json:"deviceName" yaml:"deviceName"`
	// EBS Block Store Parameters.
	//
	// By default, the 'kmsKeyId' of EBS volume is set to 'amiEncryptionKey.keyId',
	// and 'encrypted' is set to 'true'. If you wish to use a different KMS Key,
	// you may do so. However, please make sure that the necessary permissions
	// and compliance requirements for the KMS Key are already set up.
	Ebs IEbsParameters `field:"required" json:"ebs" yaml:"ebs"`
}

