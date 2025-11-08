package cdkamibuilder

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Phases for the component.
type IPhases interface {
	Name() *string
	SetName(n *string)
	Steps() *[]IStepCommands
	SetSteps(s *[]IStepCommands)
}

// The jsii proxy for IPhases
type jsiiProxy_IPhases struct {
	_ byte // padding
}

func (j *jsiiProxy_IPhases) Name() *string {
	var returns *string
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPhases)SetName(val *string) {
	if err := j.validateSetNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"name",
		val,
	)
}

func (j *jsiiProxy_IPhases) Steps() *[]IStepCommands {
	var returns *[]IStepCommands
	_jsii_.Get(
		j,
		"steps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPhases)SetSteps(val *[]IStepCommands) {
	if err := j.validateSetStepsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"steps",
		val,
	)
}

