package layerborncdkamibuilder

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Build commands for the component.
type IActionCommands interface {
	Commands() *[]*string
	SetCommands(c *[]*string)
}

// The jsii proxy for IActionCommands
type jsiiProxy_IActionCommands struct {
	_ byte // padding
}

func (j *jsiiProxy_IActionCommands) Commands() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"commands",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IActionCommands)SetCommands(val *[]*string) {
	if err := j.validateSetCommandsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"commands",
		val,
	)
}

