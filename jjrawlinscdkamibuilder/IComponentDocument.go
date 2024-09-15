package jjrawlinscdkamibuilder

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Component data.
type IComponentDocument interface {
	Description() *string
	SetDescription(d *string)
	Name() *string
	SetName(n *string)
	Phases() *[]IPhases
	SetPhases(p *[]IPhases)
	SchemaVersion() *string
	SetSchemaVersion(s *string)
}

// The jsii proxy for IComponentDocument
type jsiiProxy_IComponentDocument struct {
	_ byte // padding
}

func (j *jsiiProxy_IComponentDocument) Description() *string {
	var returns *string
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IComponentDocument)SetDescription(val *string) {
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_IComponentDocument) Name() *string {
	var returns *string
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IComponentDocument)SetName(val *string) {
	_jsii_.Set(
		j,
		"name",
		val,
	)
}

func (j *jsiiProxy_IComponentDocument) Phases() *[]IPhases {
	var returns *[]IPhases
	_jsii_.Get(
		j,
		"phases",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IComponentDocument)SetPhases(val *[]IPhases) {
	if err := j.validateSetPhasesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"phases",
		val,
	)
}

func (j *jsiiProxy_IComponentDocument) SchemaVersion() *string {
	var returns *string
	_jsii_.Get(
		j,
		"schemaVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IComponentDocument)SetSchemaVersion(val *string) {
	_jsii_.Set(
		j,
		"schemaVersion",
		val,
	)
}

