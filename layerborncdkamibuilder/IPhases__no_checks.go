//go:build no_runtime_type_checking

package layerborncdkamibuilder

// Building without runtime type checking enabled, so all the below just return nil

func (j *jsiiProxy_IPhases) validateSetNameParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_IPhases) validateSetStepsParameters(val *[]IStepCommands) error {
	return nil
}

