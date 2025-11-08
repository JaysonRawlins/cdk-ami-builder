//go:build no_runtime_type_checking

package cdkamibuilder

// Building without runtime type checking enabled, so all the below just return nil

func (j *jsiiProxy_IComponentDocument) validateSetPhasesParameters(val *[]IPhases) error {
	return nil
}

