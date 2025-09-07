package cdk-ami-builder

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Component props.
type IComponentProps interface {
	ComponentDocument() IComponentDocument
	SetComponentDocument(c IComponentDocument)
	ComponentVersion() *string
	SetComponentVersion(c *string)
	Description() *string
	SetDescription(d *string)
	Name() *string
	SetName(n *string)
	Parameters() *map[string]IInputParameter
	SetParameters(p *map[string]IInputParameter)
	Platform() *string
	SetPlatform(p *string)
	SchemaVersion() *string
	SetSchemaVersion(s *string)
}

// The jsii proxy for IComponentProps
type jsiiProxy_IComponentProps struct {
	_ byte // padding
}

func (j *jsiiProxy_IComponentProps) ComponentDocument() IComponentDocument {
	var returns IComponentDocument
	_jsii_.Get(
		j,
		"componentDocument",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IComponentProps)SetComponentDocument(val IComponentDocument) {
	if err := j.validateSetComponentDocumentParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"componentDocument",
		val,
	)
}

func (j *jsiiProxy_IComponentProps) ComponentVersion() *string {
	var returns *string
	_jsii_.Get(
		j,
		"componentVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IComponentProps)SetComponentVersion(val *string) {
	_jsii_.Set(
		j,
		"componentVersion",
		val,
	)
}

func (j *jsiiProxy_IComponentProps) Description() *string {
	var returns *string
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IComponentProps)SetDescription(val *string) {
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_IComponentProps) Name() *string {
	var returns *string
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IComponentProps)SetName(val *string) {
	_jsii_.Set(
		j,
		"name",
		val,
	)
}

func (j *jsiiProxy_IComponentProps) Parameters() *map[string]IInputParameter {
	var returns *map[string]IInputParameter
	_jsii_.Get(
		j,
		"parameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IComponentProps)SetParameters(val *map[string]IInputParameter) {
	_jsii_.Set(
		j,
		"parameters",
		val,
	)
}

func (j *jsiiProxy_IComponentProps) Platform() *string {
	var returns *string
	_jsii_.Get(
		j,
		"platform",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IComponentProps)SetPlatform(val *string) {
	_jsii_.Set(
		j,
		"platform",
		val,
	)
}

func (j *jsiiProxy_IComponentProps) SchemaVersion() *string {
	var returns *string
	_jsii_.Get(
		j,
		"schemaVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IComponentProps)SetSchemaVersion(val *string) {
	_jsii_.Set(
		j,
		"schemaVersion",
		val,
	)
}

