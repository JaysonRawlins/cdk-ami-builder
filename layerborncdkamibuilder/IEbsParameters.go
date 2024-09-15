package layerborncdkamibuilder

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

type IEbsParameters interface {
	// Whether the volume is deleted when the instance is terminated.
	// Default: true.
	//
	DeleteOnTermination() *bool
	SetDeleteOnTermination(d *bool)
	// Whether the volume is encrypted.
	// Default: true.
	//
	Encrypted() *bool
	SetEncrypted(e *bool)
	// KMS Key Alias for the volume If not specified, the default AMI encryption key alias will be used Custom KMS Keys Alias need to exist in the other accounts for distribution to work correctly.
	// Default: alias/aws/ebs.
	//
	KmsKeyId() *string
	SetKmsKeyId(k *string)
	// Size of the volume in GiB.
	VolumeSize() *float64
	SetVolumeSize(v *float64)
	// Type of the volume.
	// Default: gp2.
	//
	VolumeType() *string
	SetVolumeType(v *string)
}

// The jsii proxy for IEbsParameters
type jsiiProxy_IEbsParameters struct {
	_ byte // padding
}

func (j *jsiiProxy_IEbsParameters) DeleteOnTermination() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"deleteOnTermination",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEbsParameters)SetDeleteOnTermination(val *bool) {
	_jsii_.Set(
		j,
		"deleteOnTermination",
		val,
	)
}

func (j *jsiiProxy_IEbsParameters) Encrypted() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"encrypted",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEbsParameters)SetEncrypted(val *bool) {
	_jsii_.Set(
		j,
		"encrypted",
		val,
	)
}

func (j *jsiiProxy_IEbsParameters) KmsKeyId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"kmsKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEbsParameters)SetKmsKeyId(val *string) {
	_jsii_.Set(
		j,
		"kmsKeyId",
		val,
	)
}

func (j *jsiiProxy_IEbsParameters) VolumeSize() *float64 {
	var returns *float64
	_jsii_.Get(
		j,
		"volumeSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEbsParameters)SetVolumeSize(val *float64) {
	if err := j.validateSetVolumeSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"volumeSize",
		val,
	)
}

func (j *jsiiProxy_IEbsParameters) VolumeType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"volumeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEbsParameters)SetVolumeType(val *string) {
	_jsii_.Set(
		j,
		"volumeType",
		val,
	)
}

