//go:build no_runtime_type_checking

package cdkamibuilder

// Building without runtime type checking enabled, so all the below just return nil

func (j *jsiiProxy_IInputParameter) validateSetDefaultParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_IInputParameter) validateSetDescriptionParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_IInputParameter) validateSetTypeParameters(val *string) error {
	return nil
}

