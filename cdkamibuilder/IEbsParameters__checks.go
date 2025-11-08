//go:build !no_runtime_type_checking

package cdkamibuilder

import (
	"fmt"
)

func (j *jsiiProxy_IEbsParameters) validateSetVolumeSizeParameters(val *float64) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

