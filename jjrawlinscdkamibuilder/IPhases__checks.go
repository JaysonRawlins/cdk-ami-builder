//go:build !no_runtime_type_checking

package jjrawlinscdkamibuilder

import (
	"fmt"
)

func (j *jsiiProxy_IPhases) validateSetNameParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_IPhases) validateSetStepsParameters(val *[]IStepCommands) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

