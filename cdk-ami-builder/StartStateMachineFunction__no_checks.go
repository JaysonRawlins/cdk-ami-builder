//go:build no_runtime_type_checking

package cdk-ami-builder

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_StartStateMachineFunction) validateAddAliasParameters(aliasName *string, options *awslambda.AliasOptions) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateAddEnvironmentParameters(key *string, value *string, options *awslambda.EnvironmentOptions) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateAddEventSourceParameters(source awslambda.IEventSource) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateAddEventSourceMappingParameters(id *string, options *awslambda.EventSourceMappingOptions) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateAddFunctionUrlParameters(options *awslambda.FunctionUrlOptions) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateAddPermissionParameters(id *string, permission *awslambda.Permission) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateAddToRolePolicyParameters(statement awsiam.PolicyStatement) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateApplyRemovalPolicyParameters(policy awscdk.RemovalPolicy) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateConfigureAsyncInvokeParameters(options *awslambda.EventInvokeConfigOptions) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateConsiderWarningOnInvokeFunctionPermissionsParameters(scope constructs.Construct, action *string) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateGetResourceArnAttributeParameters(arnAttr *string, arnComponents *awscdk.ArnComponents) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateGetResourceNameAttributeParameters(nameAttr *string) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateGrantInvokeParameters(grantee awsiam.IGrantable) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateGrantInvokeCompositePrincipalParameters(compositePrincipal awsiam.CompositePrincipal) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateGrantInvokeLatestVersionParameters(grantee awsiam.IGrantable) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateGrantInvokeUrlParameters(grantee awsiam.IGrantable) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateGrantInvokeVersionParameters(grantee awsiam.IGrantable, version awslambda.IVersion) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateInvalidateVersionBasedOnParameters(x *string) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateMetricParameters(metricName *string, props *awscloudwatch.MetricOptions) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateMetricDurationParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateMetricErrorsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateMetricInvocationsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateMetricThrottlesParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func (s *jsiiProxy_StartStateMachineFunction) validateWarnInvokeFunctionPermissionsParameters(scope constructs.Construct) error {
	return nil
}

func validateStartStateMachineFunction_ClassifyVersionPropertyParameters(propertyName *string, locked *bool) error {
	return nil
}

func validateStartStateMachineFunction_FromFunctionArnParameters(scope constructs.Construct, id *string, functionArn *string) error {
	return nil
}

func validateStartStateMachineFunction_FromFunctionAttributesParameters(scope constructs.Construct, id *string, attrs *awslambda.FunctionAttributes) error {
	return nil
}

func validateStartStateMachineFunction_FromFunctionNameParameters(scope constructs.Construct, id *string, functionName *string) error {
	return nil
}

func validateStartStateMachineFunction_IsConstructParameters(x interface{}) error {
	return nil
}

func validateStartStateMachineFunction_IsOwnedResourceParameters(construct constructs.IConstruct) error {
	return nil
}

func validateStartStateMachineFunction_IsResourceParameters(construct constructs.IConstruct) error {
	return nil
}

func validateStartStateMachineFunction_MetricAllParameters(metricName *string, props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateStartStateMachineFunction_MetricAllConcurrentExecutionsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateStartStateMachineFunction_MetricAllDurationParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateStartStateMachineFunction_MetricAllErrorsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateStartStateMachineFunction_MetricAllInvocationsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateStartStateMachineFunction_MetricAllThrottlesParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateStartStateMachineFunction_MetricAllUnreservedConcurrentExecutionsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateNewStartStateMachineFunctionParameters(scope constructs.Construct, id *string, props *StartStateMachineFunctionProps) error {
	return nil
}

