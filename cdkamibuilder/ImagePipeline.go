package cdkamibuilder

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/JaysonRawlins/cdk-ami-builder/cdkamibuilder/jsii"

	"github.com/aws/aws-cdk-go/awscdk/v2/awsimagebuilder"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/JaysonRawlins/cdk-ami-builder/cdkamibuilder/internal"
)

type ImagePipeline interface {
	constructs.Construct
	ImageId() *string
	SetImageId(val *string)
	ImagePipelineArn() *string
	SetImagePipelineArn(val *string)
	ImageRecipeComponents() *[]*awsimagebuilder.CfnImageRecipe_ComponentConfigurationProperty
	SetImageRecipeComponents(val *[]*awsimagebuilder.CfnImageRecipe_ComponentConfigurationProperty)
	// The tree node.
	Node() constructs.Node
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for ImagePipeline
type jsiiProxy_ImagePipeline struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_ImagePipeline) ImageId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"imageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ImagePipeline) ImagePipelineArn() *string {
	var returns *string
	_jsii_.Get(
		j,
		"imagePipelineArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ImagePipeline) ImageRecipeComponents() *[]*awsimagebuilder.CfnImageRecipe_ComponentConfigurationProperty {
	var returns *[]*awsimagebuilder.CfnImageRecipe_ComponentConfigurationProperty
	_jsii_.Get(
		j,
		"imageRecipeComponents",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ImagePipeline) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}


func NewImagePipeline(scope constructs.Construct, id *string, props *ImagePipelineProps) ImagePipeline {
	_init_.Initialize()

	if err := validateNewImagePipelineParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_ImagePipeline{}

	_jsii_.Create(
		"@jjrawlins/cdk-ami-builder.ImagePipeline",
		[]interface{}{scope, id, props},
		&j,
	)

	return &j
}

func NewImagePipeline_Override(i ImagePipeline, scope constructs.Construct, id *string, props *ImagePipelineProps) {
	_init_.Initialize()

	_jsii_.Create(
		"@jjrawlins/cdk-ami-builder.ImagePipeline",
		[]interface{}{scope, id, props},
		i,
	)
}

func (j *jsiiProxy_ImagePipeline)SetImageId(val *string) {
	if err := j.validateSetImageIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageId",
		val,
	)
}

func (j *jsiiProxy_ImagePipeline)SetImagePipelineArn(val *string) {
	if err := j.validateSetImagePipelineArnParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imagePipelineArn",
		val,
	)
}

func (j *jsiiProxy_ImagePipeline)SetImageRecipeComponents(val *[]*awsimagebuilder.CfnImageRecipe_ComponentConfigurationProperty) {
	if err := j.validateSetImageRecipeComponentsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageRecipeComponents",
		val,
	)
}

// Checks if `x` is a construct.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
// Deprecated: use `x instanceof Construct` instead.
func ImagePipeline_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateImagePipeline_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@jjrawlins/cdk-ami-builder.ImagePipeline",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (i *jsiiProxy_ImagePipeline) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		i,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

