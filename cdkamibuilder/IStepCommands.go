package cdkamibuilder

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

type IStepCommands interface {
	Action() *string
	SetAction(a *string)
	Inputs() IActionCommands
	SetInputs(i IActionCommands)
	Name() *string
	SetName(n *string)
}

// The jsii proxy for IStepCommands
type jsiiProxy_IStepCommands struct {
	_ byte // padding
}

func (j *jsiiProxy_IStepCommands) Action() *string {
	var returns *string
	_jsii_.Get(
		j,
		"action",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStepCommands)SetAction(val *string) {
	if err := j.validateSetActionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"action",
		val,
	)
}

func (j *jsiiProxy_IStepCommands) Inputs() IActionCommands {
	var returns IActionCommands
	_jsii_.Get(
		j,
		"inputs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStepCommands)SetInputs(val IActionCommands) {
	_jsii_.Set(
		j,
		"inputs",
		val,
	)
}

func (j *jsiiProxy_IStepCommands) Name() *string {
	var returns *string
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStepCommands)SetName(val *string) {
	if err := j.validateSetNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"name",
		val,
	)
}

