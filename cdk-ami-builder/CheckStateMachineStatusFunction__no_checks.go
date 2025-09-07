//go:build no_runtime_type_checking

package cdk-ami-builder

// Building without runtime type checking enabled, so all the below just return nil

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateAddAliasParameters(aliasName *string, options *awslambda.AliasOptions) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateAddEnvironmentParameters(key *string, value *string, options *awslambda.EnvironmentOptions) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateAddEventSourceParameters(source awslambda.IEventSource) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateAddEventSourceMappingParameters(id *string, options *awslambda.EventSourceMappingOptions) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateAddFunctionUrlParameters(options *awslambda.FunctionUrlOptions) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateAddPermissionParameters(id *string, permission *awslambda.Permission) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateAddToRolePolicyParameters(statement awsiam.PolicyStatement) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateApplyRemovalPolicyParameters(policy awscdk.RemovalPolicy) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateConfigureAsyncInvokeParameters(options *awslambda.EventInvokeConfigOptions) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateConsiderWarningOnInvokeFunctionPermissionsParameters(scope constructs.Construct, action *string) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateGetResourceArnAttributeParameters(arnAttr *string, arnComponents *awscdk.ArnComponents) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateGetResourceNameAttributeParameters(nameAttr *string) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateGrantInvokeParameters(grantee awsiam.IGrantable) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateGrantInvokeCompositePrincipalParameters(compositePrincipal awsiam.CompositePrincipal) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateGrantInvokeLatestVersionParameters(grantee awsiam.IGrantable) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateGrantInvokeUrlParameters(grantee awsiam.IGrantable) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateGrantInvokeVersionParameters(grantee awsiam.IGrantable, version awslambda.IVersion) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateInvalidateVersionBasedOnParameters(x *string) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateMetricParameters(metricName *string, props *awscloudwatch.MetricOptions) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateMetricDurationParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateMetricErrorsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateMetricInvocationsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateMetricThrottlesParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func (c *jsiiProxy_CheckStateMachineStatusFunction) validateWarnInvokeFunctionPermissionsParameters(scope constructs.Construct) error {
	return nil
}

func validateCheckStateMachineStatusFunction_ClassifyVersionPropertyParameters(propertyName *string, locked *bool) error {
	return nil
}

func validateCheckStateMachineStatusFunction_FromFunctionArnParameters(scope constructs.Construct, id *string, functionArn *string) error {
	return nil
}

func validateCheckStateMachineStatusFunction_FromFunctionAttributesParameters(scope constructs.Construct, id *string, attrs *awslambda.FunctionAttributes) error {
	return nil
}

func validateCheckStateMachineStatusFunction_FromFunctionNameParameters(scope constructs.Construct, id *string, functionName *string) error {
	return nil
}

func validateCheckStateMachineStatusFunction_IsConstructParameters(x interface{}) error {
	return nil
}

func validateCheckStateMachineStatusFunction_IsOwnedResourceParameters(construct constructs.IConstruct) error {
	return nil
}

func validateCheckStateMachineStatusFunction_IsResourceParameters(construct constructs.IConstruct) error {
	return nil
}

func validateCheckStateMachineStatusFunction_MetricAllParameters(metricName *string, props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateCheckStateMachineStatusFunction_MetricAllConcurrentExecutionsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateCheckStateMachineStatusFunction_MetricAllDurationParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateCheckStateMachineStatusFunction_MetricAllErrorsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateCheckStateMachineStatusFunction_MetricAllInvocationsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateCheckStateMachineStatusFunction_MetricAllThrottlesParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateCheckStateMachineStatusFunction_MetricAllUnreservedConcurrentExecutionsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateNewCheckStateMachineStatusFunctionParameters(scope constructs.Construct, id *string, props *CheckStateMachineStatusFunctionProps) error {
	return nil
}

