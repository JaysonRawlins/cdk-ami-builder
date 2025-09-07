//go:build no_runtime_type_checking

package cdk-ami-builder

// Building without runtime type checking enabled, so all the below just return nil

func validateImagePipeline_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_ImagePipeline) validateSetImageIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_ImagePipeline) validateSetImagePipelineArnParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_ImagePipeline) validateSetImageRecipeComponentsParameters(val *[]*awsimagebuilder.CfnImageRecipe_ComponentConfigurationProperty) error {
	return nil
}

func validateNewImagePipelineParameters(scope constructs.Construct, id *string, props *ImagePipelineProps) error {
	return nil
}

