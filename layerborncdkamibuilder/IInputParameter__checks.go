//go:build !no_runtime_type_checking

package layerborncdkamibuilder

import (
	"fmt"
)

func (j *jsiiProxy_IInputParameter) validateSetDefaultParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_IInputParameter) validateSetDescriptionParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_IInputParameter) validateSetTypeParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

