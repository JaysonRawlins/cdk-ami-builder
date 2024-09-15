# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CheckStateMachineStatusFunction <a name="CheckStateMachineStatusFunction" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction"></a>

An AWS Lambda function which executes src/Lambdas/CheckStateMachineStatus/CheckStateMachineStatus.

#### Initializers <a name="Initializers" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.Initializer"></a>

```typescript
import { CheckStateMachineStatusFunction } from '@jjrawlins/cdk-ami-builder'

new CheckStateMachineStatusFunction(scope: Construct, id: string, props?: CheckStateMachineStatusFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.Initializer.parameter.props">props</a></code> | <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps">CheckStateMachineStatusFunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps">CheckStateMachineStatusFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addEventSource">addEventSource</a></code> | Adds an event source to this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addEventSourceMapping">addEventSourceMapping</a></code> | Adds an event source that maps to this AWS Lambda function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addFunctionUrl">addFunctionUrl</a></code> | Adds a url to this lambda function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.considerWarningOnInvokeFunctionPermissions">considerWarningOnInvokeFunctionPermissions</a></code> | A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvokeCompositePrincipal">grantInvokeCompositePrincipal</a></code> | Grant multiple principals the ability to invoke this Lambda via CompositePrincipal. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvokeLatestVersion">grantInvokeLatestVersion</a></code> | Grant the given identity permissions to invoke the $LATEST version or unqualified version of this Lambda. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvokeUrl">grantInvokeUrl</a></code> | Grant the given identity permissions to invoke this Lambda Function URL. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvokeVersion">grantInvokeVersion</a></code> | Grant the given identity permissions to invoke the given version of this Lambda. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addAlias">addAlias</a></code> | Defines an alias for this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addEnvironment">addEnvironment</a></code> | Adds an environment variable to this Lambda function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addLayers">addLayers</a></code> | Adds one or more Lambda Layers to this Lambda function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.invalidateVersionBasedOn">invalidateVersionBasedOn</a></code> | Mix additional information into the hash of the Version object. |

---

##### `toString` <a name="toString" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventSource` <a name="addEventSource" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addEventSource"></a>

```typescript
public addEventSource(source: IEventSource): void
```

Adds an event source to this function.

Event sources are implemented in the aws-cdk-lib/aws-lambda-event-sources module.

The following example adds an SQS Queue as an event source:
```
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
myFunction.addEventSource(new SqsEventSource(myQueue));
```

###### `source`<sup>Required</sup> <a name="source" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addEventSource.parameter.source"></a>

- *Type:* aws-cdk-lib.aws_lambda.IEventSource

---

##### `addEventSourceMapping` <a name="addEventSourceMapping" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addEventSourceMapping"></a>

```typescript
public addEventSourceMapping(id: string, options: EventSourceMappingOptions): EventSourceMapping
```

Adds an event source that maps to this AWS Lambda function.

###### `id`<sup>Required</sup> <a name="id" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addEventSourceMapping.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addEventSourceMapping.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventSourceMappingOptions

---

##### `addFunctionUrl` <a name="addFunctionUrl" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addFunctionUrl"></a>

```typescript
public addFunctionUrl(options?: FunctionUrlOptions): FunctionUrl
```

Adds a url to this lambda function.

###### `options`<sup>Optional</sup> <a name="options" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addFunctionUrl.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrlOptions

---

##### `addPermission` <a name="addPermission" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addPermission"></a>

```typescript
public addPermission(id: string, permission: Permission): void
```

Adds a permission to the Lambda resource policy.

> [Permission for details.](Permission for details.)

###### `id`<sup>Required</sup> <a name="id" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addPermission.parameter.id"></a>

- *Type:* string

The id for the permission construct.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.Permission

The permission to grant to this Lambda function.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `configureAsyncInvoke` <a name="configureAsyncInvoke" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.configureAsyncInvoke"></a>

```typescript
public configureAsyncInvoke(options: EventInvokeConfigOptions): void
```

Configures options for asynchronous invocation.

###### `options`<sup>Required</sup> <a name="options" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.configureAsyncInvoke.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventInvokeConfigOptions

---

##### `considerWarningOnInvokeFunctionPermissions` <a name="considerWarningOnInvokeFunctionPermissions" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.considerWarningOnInvokeFunctionPermissions"></a>

```typescript
public considerWarningOnInvokeFunctionPermissions(scope: Construct, action: string): void
```

A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function.

function.currentVersion is invoked before or after the permission is created.

This applies only to permissions on Lambda functions, not versions or aliases.
This function is overridden as a noOp for QualifiedFunctionBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.considerWarningOnInvokeFunctionPermissions.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `action`<sup>Required</sup> <a name="action" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.considerWarningOnInvokeFunctionPermissions.parameter.action"></a>

- *Type:* string

---

##### `grantInvoke` <a name="grantInvoke" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeCompositePrincipal` <a name="grantInvokeCompositePrincipal" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvokeCompositePrincipal"></a>

```typescript
public grantInvokeCompositePrincipal(compositePrincipal: CompositePrincipal): Grant[]
```

Grant multiple principals the ability to invoke this Lambda via CompositePrincipal.

###### `compositePrincipal`<sup>Required</sup> <a name="compositePrincipal" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvokeCompositePrincipal.parameter.compositePrincipal"></a>

- *Type:* aws-cdk-lib.aws_iam.CompositePrincipal

---

##### `grantInvokeLatestVersion` <a name="grantInvokeLatestVersion" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvokeLatestVersion"></a>

```typescript
public grantInvokeLatestVersion(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke the $LATEST version or unqualified version of this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvokeLatestVersion.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeUrl` <a name="grantInvokeUrl" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvokeUrl"></a>

```typescript
public grantInvokeUrl(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda Function URL.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvokeUrl.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeVersion` <a name="grantInvokeVersion" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvokeVersion"></a>

```typescript
public grantInvokeVersion(grantee: IGrantable, version: IVersion): Grant
```

Grant the given identity permissions to invoke the given version of this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvokeVersion.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `version`<sup>Required</sup> <a name="version" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.grantInvokeVersion.parameter.version"></a>

- *Type:* aws-cdk-lib.aws_lambda.IVersion

---

##### `metric` <a name="metric" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Function.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDuration` <a name="metricDuration" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricDuration"></a>

```typescript
public metricDuration(props?: MetricOptions): Metric
```

How long execution of this Lambda takes.

Average over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricErrors` <a name="metricErrors" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricErrors"></a>

```typescript
public metricErrors(props?: MetricOptions): Metric
```

How many invocations of this Lambda fail.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInvocations` <a name="metricInvocations" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricInvocations"></a>

```typescript
public metricInvocations(props?: MetricOptions): Metric
```

How often this Lambda is invoked.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottles` <a name="metricThrottles" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricThrottles"></a>

```typescript
public metricThrottles(props?: MetricOptions): Metric
```

How often this Lambda is throttled.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addAlias` <a name="addAlias" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addAlias"></a>

```typescript
public addAlias(aliasName: string, options?: AliasOptions): Alias
```

Defines an alias for this function.

The alias will automatically be updated to point to the latest version of
the function as it is being updated during a deployment.

```ts
declare const fn: lambda.Function;

fn.addAlias('Live');

// Is equivalent to

new lambda.Alias(this, 'AliasLive', {
  aliasName: 'Live',
  version: fn.currentVersion,
});
```

###### `aliasName`<sup>Required</sup> <a name="aliasName" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addAlias.parameter.aliasName"></a>

- *Type:* string

The name of the alias.

---

###### `options`<sup>Optional</sup> <a name="options" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addAlias.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.AliasOptions

Alias options.

---

##### `addEnvironment` <a name="addEnvironment" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addEnvironment"></a>

```typescript
public addEnvironment(key: string, value: string, options?: EnvironmentOptions): Function
```

Adds an environment variable to this Lambda function.

If this is a ref to a Lambda function, this operation results in a no-op.

###### `key`<sup>Required</sup> <a name="key" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addEnvironment.parameter.key"></a>

- *Type:* string

The environment variable key.

---

###### `value`<sup>Required</sup> <a name="value" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addEnvironment.parameter.value"></a>

- *Type:* string

The environment variable's value.

---

###### `options`<sup>Optional</sup> <a name="options" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addEnvironment.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EnvironmentOptions

Environment variable options.

---

##### `addLayers` <a name="addLayers" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addLayers"></a>

```typescript
public addLayers(layers: ILayerVersion): void
```

Adds one or more Lambda Layers to this Lambda function.

###### `layers`<sup>Required</sup> <a name="layers" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.addLayers.parameter.layers"></a>

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion

the layers to be added.

---

##### `invalidateVersionBasedOn` <a name="invalidateVersionBasedOn" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.invalidateVersionBasedOn"></a>

```typescript
public invalidateVersionBasedOn(x: string): void
```

Mix additional information into the hash of the Version object.

The Lambda Function construct does its best to automatically create a new
Version when anything about the Function changes (its code, its layers,
any of the other properties).

However, you can sometimes source information from places that the CDK cannot
look into, like the deploy-time values of SSM parameters. In those cases,
the CDK would not force the creation of a new Version object when it actually
should.

This method can be used to invalidate the current Version object. Pass in
any string into this method, and make sure the string changes when you know
a new Version needs to be created.

This method may be called more than once.

###### `x`<sup>Required</sup> <a name="x" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.invalidateVersionBasedOn.parameter.x"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.fromFunctionName">fromFunctionName</a></code> | Import a lambda function into the CDK using its name. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |

---

##### `isConstruct` <a name="isConstruct" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.isConstruct"></a>

```typescript
import { CheckStateMachineStatusFunction } from '@jjrawlins/cdk-ami-builder'

CheckStateMachineStatusFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.isOwnedResource"></a>

```typescript
import { CheckStateMachineStatusFunction } from '@jjrawlins/cdk-ami-builder'

CheckStateMachineStatusFunction.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.isResource"></a>

```typescript
import { CheckStateMachineStatusFunction } from '@jjrawlins/cdk-ami-builder'

CheckStateMachineStatusFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `classifyVersionProperty` <a name="classifyVersionProperty" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.classifyVersionProperty"></a>

```typescript
import { CheckStateMachineStatusFunction } from '@jjrawlins/cdk-ami-builder'

CheckStateMachineStatusFunction.classifyVersionProperty(propertyName: string, locked: boolean)
```

Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource.

See 'currentVersion' section in the module README for more details.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.classifyVersionProperty.parameter.propertyName"></a>

- *Type:* string

The property to classify.

---

###### `locked`<sup>Required</sup> <a name="locked" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.classifyVersionProperty.parameter.locked"></a>

- *Type:* boolean

whether the property should be associated to the version or not.

---

##### `fromFunctionArn` <a name="fromFunctionArn" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.fromFunctionArn"></a>

```typescript
import { CheckStateMachineStatusFunction } from '@jjrawlins/cdk-ami-builder'

CheckStateMachineStatusFunction.fromFunctionArn(scope: Construct, id: string, functionArn: string)
```

Import a lambda function into the CDK using its ARN.

For `Function.addPermissions()` to work on this imported lambda, make sure that is
in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.fromFunctionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.fromFunctionArn.parameter.id"></a>

- *Type:* string

---

###### `functionArn`<sup>Required</sup> <a name="functionArn" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.fromFunctionArn.parameter.functionArn"></a>

- *Type:* string

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.fromFunctionAttributes"></a>

```typescript
import { CheckStateMachineStatusFunction } from '@jjrawlins/cdk-ami-builder'

CheckStateMachineStatusFunction.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Creates a Lambda function object which represents a function not defined within this stack.

For `Function.addPermissions()` to work on this imported lambda, set the sameEnvironment property to true
if this imported lambda is in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

###### `id`<sup>Required</sup> <a name="id" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

The name of the lambda construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionAttributes

the attributes of the function to import.

---

##### `fromFunctionName` <a name="fromFunctionName" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.fromFunctionName"></a>

```typescript
import { CheckStateMachineStatusFunction } from '@jjrawlins/cdk-ami-builder'

CheckStateMachineStatusFunction.fromFunctionName(scope: Construct, id: string, functionName: string)
```

Import a lambda function into the CDK using its name.

###### `scope`<sup>Required</sup> <a name="scope" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.fromFunctionName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.fromFunctionName.parameter.id"></a>

- *Type:* string

---

###### `functionName`<sup>Required</sup> <a name="functionName" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.fromFunctionName.parameter.functionName"></a>

- *Type:* string

---

##### `metricAll` <a name="metricAll" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAll"></a>

```typescript
import { CheckStateMachineStatusFunction } from '@jjrawlins/cdk-ami-builder'

CheckStateMachineStatusFunction.metricAll(metricName: string, props?: MetricOptions)
```

Return the given named metric for this Lambda.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAll.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAll.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllConcurrentExecutions` <a name="metricAllConcurrentExecutions" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllConcurrentExecutions"></a>

```typescript
import { CheckStateMachineStatusFunction } from '@jjrawlins/cdk-ami-builder'

CheckStateMachineStatusFunction.metricAllConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllDuration` <a name="metricAllDuration" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllDuration"></a>

```typescript
import { CheckStateMachineStatusFunction } from '@jjrawlins/cdk-ami-builder'

CheckStateMachineStatusFunction.metricAllDuration(props?: MetricOptions)
```

Metric for the Duration executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllErrors` <a name="metricAllErrors" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllErrors"></a>

```typescript
import { CheckStateMachineStatusFunction } from '@jjrawlins/cdk-ami-builder'

CheckStateMachineStatusFunction.metricAllErrors(props?: MetricOptions)
```

Metric for the number of Errors executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllInvocations` <a name="metricAllInvocations" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllInvocations"></a>

```typescript
import { CheckStateMachineStatusFunction } from '@jjrawlins/cdk-ami-builder'

CheckStateMachineStatusFunction.metricAllInvocations(props?: MetricOptions)
```

Metric for the number of invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllThrottles` <a name="metricAllThrottles" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllThrottles"></a>

```typescript
import { CheckStateMachineStatusFunction } from '@jjrawlins/cdk-ami-builder'

CheckStateMachineStatusFunction.metricAllThrottles(props?: MetricOptions)
```

Metric for the number of throttled invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllUnreservedConcurrentExecutions` <a name="metricAllUnreservedConcurrentExecutions" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllUnreservedConcurrentExecutions"></a>

```typescript
import { CheckStateMachineStatusFunction } from '@jjrawlins/cdk-ami-builder'

CheckStateMachineStatusFunction.metricAllUnreservedConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of unreserved concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.metricAllUnreservedConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64). |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access the Connections object. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.functionArn">functionArn</a></code> | <code>string</code> | ARN of this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.functionName">functionName</a></code> | <code>string</code> | Name of this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this Lambda Function is running as. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.isBoundToVpc">isBoundToVpc</a></code> | <code>boolean</code> | Whether or not this Lambda function was bound to a VPC. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.latestVersion">latestVersion</a></code> | <code>aws-cdk-lib.aws_lambda.IVersion</code> | The `$LATEST` version of this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.permissionsNode">permissionsNode</a></code> | <code>constructs.Node</code> | The construct node where permissions are attached. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.resourceArnsForGrantInvoke">resourceArnsForGrantInvoke</a></code> | <code>string[]</code> | The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke(). |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ (as queue) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The DLQ (as topic) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout configured for this lambda. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).

---

##### `connections`<sup>Required</sup> <a name="connections" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access the Connections object.

Will fail if not a VPC-enabled Lambda Function

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

ARN of this function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of this function.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this Lambda Function is running as.

---

##### `isBoundToVpc`<sup>Required</sup> <a name="isBoundToVpc" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.isBoundToVpc"></a>

```typescript
public readonly isBoundToVpc: boolean;
```

- *Type:* boolean

Whether or not this Lambda function was bound to a VPC.

If this is is `false`, trying to access the `connections` object will fail.

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.latestVersion"></a>

```typescript
public readonly latestVersion: IVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.IVersion

The `$LATEST` version of this function.

Note that this is reference to a non-specific AWS Lambda version, which
means the function this version refers to can return different results in
different invocations.

To obtain a reference to an explicit version which references the current
function configuration, use `lambdaFunction.currentVersion` instead.

---

##### `permissionsNode`<sup>Required</sup> <a name="permissionsNode" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.permissionsNode"></a>

```typescript
public readonly permissionsNode: Node;
```

- *Type:* constructs.Node

The construct node where permissions are attached.

---

##### `resourceArnsForGrantInvoke`<sup>Required</sup> <a name="resourceArnsForGrantInvoke" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.resourceArnsForGrantInvoke"></a>

```typescript
public readonly resourceArnsForGrantInvoke: string[];
```

- *Type:* string[]

The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke().

---

##### `role`<sup>Optional</sup> <a name="role" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role associated with this function.

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.currentVersion"></a>

```typescript
public readonly currentVersion: Version;
```

- *Type:* aws-cdk-lib.aws_lambda.Version

Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes.

You can specify options for this version using the `currentVersionOptions`
prop when initializing the `lambda.Function`.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The LogGroup where the Lambda function's logs are made available.

If either `logRetention` is set or this property is called, a CloudFormation custom resource is added to the stack that
pre-creates the log group as part of the stack deployment, if it already doesn't exist, and sets the correct log retention
period (never expire, by default).

Further, if the log group already exists and the `logRetention` is not set, the custom resource will reset the log retention
to never expire even if it was configured with a different value.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime configured for this lambda.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The DLQ (as queue) associated with this Lambda Function (this is an optional attribute).

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The DLQ (as topic) associated with this Lambda Function (this is an optional attribute).

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunction.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---


### ImagePipeline <a name="ImagePipeline" id="@jjrawlins/cdk-ami-builder.ImagePipeline"></a>

#### Initializers <a name="Initializers" id="@jjrawlins/cdk-ami-builder.ImagePipeline.Initializer"></a>

```typescript
import { ImagePipeline } from '@jjrawlins/cdk-ami-builder'

new ImagePipeline(scope: Construct, id: string, props: ImagePipelineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipeline.Initializer.parameter.props">props</a></code> | <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps">ImagePipelineProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jjrawlins/cdk-ami-builder.ImagePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jjrawlins/cdk-ami-builder.ImagePipeline.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.ImagePipeline.Initializer.parameter.props"></a>

- *Type:* <a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps">ImagePipelineProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipeline.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@jjrawlins/cdk-ami-builder.ImagePipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@jjrawlins/cdk-ami-builder.ImagePipeline.isConstruct"></a>

```typescript
import { ImagePipeline } from '@jjrawlins/cdk-ami-builder'

ImagePipeline.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jjrawlins/cdk-ami-builder.ImagePipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipeline.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipeline.property.imagePipelineArn">imagePipelineArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipeline.property.imageRecipeComponents">imageRecipeComponents</a></code> | <code>aws-cdk-lib.aws_imagebuilder.CfnImageRecipe.ComponentConfigurationProperty[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@jjrawlins/cdk-ami-builder.ImagePipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@jjrawlins/cdk-ami-builder.ImagePipeline.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `imagePipelineArn`<sup>Required</sup> <a name="imagePipelineArn" id="@jjrawlins/cdk-ami-builder.ImagePipeline.property.imagePipelineArn"></a>

```typescript
public readonly imagePipelineArn: string;
```

- *Type:* string

---

##### `imageRecipeComponents`<sup>Required</sup> <a name="imageRecipeComponents" id="@jjrawlins/cdk-ami-builder.ImagePipeline.property.imageRecipeComponents"></a>

```typescript
public readonly imageRecipeComponents: ComponentConfigurationProperty[];
```

- *Type:* aws-cdk-lib.aws_imagebuilder.CfnImageRecipe.ComponentConfigurationProperty[]

---


### StartStateMachineFunction <a name="StartStateMachineFunction" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction"></a>

An AWS Lambda function which executes src/Lambdas/StartStateMachine/StartStateMachine.

#### Initializers <a name="Initializers" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.Initializer"></a>

```typescript
import { StartStateMachineFunction } from '@jjrawlins/cdk-ami-builder'

new StartStateMachineFunction(scope: Construct, id: string, props?: StartStateMachineFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.Initializer.parameter.props">props</a></code> | <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps">StartStateMachineFunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps">StartStateMachineFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addEventSource">addEventSource</a></code> | Adds an event source to this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addEventSourceMapping">addEventSourceMapping</a></code> | Adds an event source that maps to this AWS Lambda function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addFunctionUrl">addFunctionUrl</a></code> | Adds a url to this lambda function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.considerWarningOnInvokeFunctionPermissions">considerWarningOnInvokeFunctionPermissions</a></code> | A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvokeCompositePrincipal">grantInvokeCompositePrincipal</a></code> | Grant multiple principals the ability to invoke this Lambda via CompositePrincipal. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvokeLatestVersion">grantInvokeLatestVersion</a></code> | Grant the given identity permissions to invoke the $LATEST version or unqualified version of this Lambda. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvokeUrl">grantInvokeUrl</a></code> | Grant the given identity permissions to invoke this Lambda Function URL. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvokeVersion">grantInvokeVersion</a></code> | Grant the given identity permissions to invoke the given version of this Lambda. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addAlias">addAlias</a></code> | Defines an alias for this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addEnvironment">addEnvironment</a></code> | Adds an environment variable to this Lambda function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addLayers">addLayers</a></code> | Adds one or more Lambda Layers to this Lambda function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.invalidateVersionBasedOn">invalidateVersionBasedOn</a></code> | Mix additional information into the hash of the Version object. |

---

##### `toString` <a name="toString" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventSource` <a name="addEventSource" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addEventSource"></a>

```typescript
public addEventSource(source: IEventSource): void
```

Adds an event source to this function.

Event sources are implemented in the aws-cdk-lib/aws-lambda-event-sources module.

The following example adds an SQS Queue as an event source:
```
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
myFunction.addEventSource(new SqsEventSource(myQueue));
```

###### `source`<sup>Required</sup> <a name="source" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addEventSource.parameter.source"></a>

- *Type:* aws-cdk-lib.aws_lambda.IEventSource

---

##### `addEventSourceMapping` <a name="addEventSourceMapping" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addEventSourceMapping"></a>

```typescript
public addEventSourceMapping(id: string, options: EventSourceMappingOptions): EventSourceMapping
```

Adds an event source that maps to this AWS Lambda function.

###### `id`<sup>Required</sup> <a name="id" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addEventSourceMapping.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addEventSourceMapping.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventSourceMappingOptions

---

##### `addFunctionUrl` <a name="addFunctionUrl" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addFunctionUrl"></a>

```typescript
public addFunctionUrl(options?: FunctionUrlOptions): FunctionUrl
```

Adds a url to this lambda function.

###### `options`<sup>Optional</sup> <a name="options" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addFunctionUrl.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrlOptions

---

##### `addPermission` <a name="addPermission" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addPermission"></a>

```typescript
public addPermission(id: string, permission: Permission): void
```

Adds a permission to the Lambda resource policy.

> [Permission for details.](Permission for details.)

###### `id`<sup>Required</sup> <a name="id" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addPermission.parameter.id"></a>

- *Type:* string

The id for the permission construct.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.Permission

The permission to grant to this Lambda function.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `configureAsyncInvoke` <a name="configureAsyncInvoke" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.configureAsyncInvoke"></a>

```typescript
public configureAsyncInvoke(options: EventInvokeConfigOptions): void
```

Configures options for asynchronous invocation.

###### `options`<sup>Required</sup> <a name="options" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.configureAsyncInvoke.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventInvokeConfigOptions

---

##### `considerWarningOnInvokeFunctionPermissions` <a name="considerWarningOnInvokeFunctionPermissions" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.considerWarningOnInvokeFunctionPermissions"></a>

```typescript
public considerWarningOnInvokeFunctionPermissions(scope: Construct, action: string): void
```

A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function.

function.currentVersion is invoked before or after the permission is created.

This applies only to permissions on Lambda functions, not versions or aliases.
This function is overridden as a noOp for QualifiedFunctionBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.considerWarningOnInvokeFunctionPermissions.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `action`<sup>Required</sup> <a name="action" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.considerWarningOnInvokeFunctionPermissions.parameter.action"></a>

- *Type:* string

---

##### `grantInvoke` <a name="grantInvoke" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeCompositePrincipal` <a name="grantInvokeCompositePrincipal" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvokeCompositePrincipal"></a>

```typescript
public grantInvokeCompositePrincipal(compositePrincipal: CompositePrincipal): Grant[]
```

Grant multiple principals the ability to invoke this Lambda via CompositePrincipal.

###### `compositePrincipal`<sup>Required</sup> <a name="compositePrincipal" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvokeCompositePrincipal.parameter.compositePrincipal"></a>

- *Type:* aws-cdk-lib.aws_iam.CompositePrincipal

---

##### `grantInvokeLatestVersion` <a name="grantInvokeLatestVersion" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvokeLatestVersion"></a>

```typescript
public grantInvokeLatestVersion(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke the $LATEST version or unqualified version of this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvokeLatestVersion.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeUrl` <a name="grantInvokeUrl" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvokeUrl"></a>

```typescript
public grantInvokeUrl(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda Function URL.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvokeUrl.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeVersion` <a name="grantInvokeVersion" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvokeVersion"></a>

```typescript
public grantInvokeVersion(grantee: IGrantable, version: IVersion): Grant
```

Grant the given identity permissions to invoke the given version of this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvokeVersion.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `version`<sup>Required</sup> <a name="version" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.grantInvokeVersion.parameter.version"></a>

- *Type:* aws-cdk-lib.aws_lambda.IVersion

---

##### `metric` <a name="metric" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Function.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDuration` <a name="metricDuration" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricDuration"></a>

```typescript
public metricDuration(props?: MetricOptions): Metric
```

How long execution of this Lambda takes.

Average over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricErrors` <a name="metricErrors" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricErrors"></a>

```typescript
public metricErrors(props?: MetricOptions): Metric
```

How many invocations of this Lambda fail.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInvocations` <a name="metricInvocations" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricInvocations"></a>

```typescript
public metricInvocations(props?: MetricOptions): Metric
```

How often this Lambda is invoked.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottles` <a name="metricThrottles" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricThrottles"></a>

```typescript
public metricThrottles(props?: MetricOptions): Metric
```

How often this Lambda is throttled.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addAlias` <a name="addAlias" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addAlias"></a>

```typescript
public addAlias(aliasName: string, options?: AliasOptions): Alias
```

Defines an alias for this function.

The alias will automatically be updated to point to the latest version of
the function as it is being updated during a deployment.

```ts
declare const fn: lambda.Function;

fn.addAlias('Live');

// Is equivalent to

new lambda.Alias(this, 'AliasLive', {
  aliasName: 'Live',
  version: fn.currentVersion,
});
```

###### `aliasName`<sup>Required</sup> <a name="aliasName" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addAlias.parameter.aliasName"></a>

- *Type:* string

The name of the alias.

---

###### `options`<sup>Optional</sup> <a name="options" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addAlias.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.AliasOptions

Alias options.

---

##### `addEnvironment` <a name="addEnvironment" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addEnvironment"></a>

```typescript
public addEnvironment(key: string, value: string, options?: EnvironmentOptions): Function
```

Adds an environment variable to this Lambda function.

If this is a ref to a Lambda function, this operation results in a no-op.

###### `key`<sup>Required</sup> <a name="key" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addEnvironment.parameter.key"></a>

- *Type:* string

The environment variable key.

---

###### `value`<sup>Required</sup> <a name="value" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addEnvironment.parameter.value"></a>

- *Type:* string

The environment variable's value.

---

###### `options`<sup>Optional</sup> <a name="options" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addEnvironment.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EnvironmentOptions

Environment variable options.

---

##### `addLayers` <a name="addLayers" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addLayers"></a>

```typescript
public addLayers(layers: ILayerVersion): void
```

Adds one or more Lambda Layers to this Lambda function.

###### `layers`<sup>Required</sup> <a name="layers" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.addLayers.parameter.layers"></a>

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion

the layers to be added.

---

##### `invalidateVersionBasedOn` <a name="invalidateVersionBasedOn" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.invalidateVersionBasedOn"></a>

```typescript
public invalidateVersionBasedOn(x: string): void
```

Mix additional information into the hash of the Version object.

The Lambda Function construct does its best to automatically create a new
Version when anything about the Function changes (its code, its layers,
any of the other properties).

However, you can sometimes source information from places that the CDK cannot
look into, like the deploy-time values of SSM parameters. In those cases,
the CDK would not force the creation of a new Version object when it actually
should.

This method can be used to invalidate the current Version object. Pass in
any string into this method, and make sure the string changes when you know
a new Version needs to be created.

This method may be called more than once.

###### `x`<sup>Required</sup> <a name="x" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.invalidateVersionBasedOn.parameter.x"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.fromFunctionName">fromFunctionName</a></code> | Import a lambda function into the CDK using its name. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |

---

##### `isConstruct` <a name="isConstruct" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.isConstruct"></a>

```typescript
import { StartStateMachineFunction } from '@jjrawlins/cdk-ami-builder'

StartStateMachineFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.isOwnedResource"></a>

```typescript
import { StartStateMachineFunction } from '@jjrawlins/cdk-ami-builder'

StartStateMachineFunction.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.isResource"></a>

```typescript
import { StartStateMachineFunction } from '@jjrawlins/cdk-ami-builder'

StartStateMachineFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `classifyVersionProperty` <a name="classifyVersionProperty" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.classifyVersionProperty"></a>

```typescript
import { StartStateMachineFunction } from '@jjrawlins/cdk-ami-builder'

StartStateMachineFunction.classifyVersionProperty(propertyName: string, locked: boolean)
```

Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource.

See 'currentVersion' section in the module README for more details.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.classifyVersionProperty.parameter.propertyName"></a>

- *Type:* string

The property to classify.

---

###### `locked`<sup>Required</sup> <a name="locked" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.classifyVersionProperty.parameter.locked"></a>

- *Type:* boolean

whether the property should be associated to the version or not.

---

##### `fromFunctionArn` <a name="fromFunctionArn" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.fromFunctionArn"></a>

```typescript
import { StartStateMachineFunction } from '@jjrawlins/cdk-ami-builder'

StartStateMachineFunction.fromFunctionArn(scope: Construct, id: string, functionArn: string)
```

Import a lambda function into the CDK using its ARN.

For `Function.addPermissions()` to work on this imported lambda, make sure that is
in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.fromFunctionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.fromFunctionArn.parameter.id"></a>

- *Type:* string

---

###### `functionArn`<sup>Required</sup> <a name="functionArn" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.fromFunctionArn.parameter.functionArn"></a>

- *Type:* string

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.fromFunctionAttributes"></a>

```typescript
import { StartStateMachineFunction } from '@jjrawlins/cdk-ami-builder'

StartStateMachineFunction.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Creates a Lambda function object which represents a function not defined within this stack.

For `Function.addPermissions()` to work on this imported lambda, set the sameEnvironment property to true
if this imported lambda is in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

###### `id`<sup>Required</sup> <a name="id" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

The name of the lambda construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionAttributes

the attributes of the function to import.

---

##### `fromFunctionName` <a name="fromFunctionName" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.fromFunctionName"></a>

```typescript
import { StartStateMachineFunction } from '@jjrawlins/cdk-ami-builder'

StartStateMachineFunction.fromFunctionName(scope: Construct, id: string, functionName: string)
```

Import a lambda function into the CDK using its name.

###### `scope`<sup>Required</sup> <a name="scope" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.fromFunctionName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.fromFunctionName.parameter.id"></a>

- *Type:* string

---

###### `functionName`<sup>Required</sup> <a name="functionName" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.fromFunctionName.parameter.functionName"></a>

- *Type:* string

---

##### `metricAll` <a name="metricAll" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAll"></a>

```typescript
import { StartStateMachineFunction } from '@jjrawlins/cdk-ami-builder'

StartStateMachineFunction.metricAll(metricName: string, props?: MetricOptions)
```

Return the given named metric for this Lambda.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAll.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAll.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllConcurrentExecutions` <a name="metricAllConcurrentExecutions" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllConcurrentExecutions"></a>

```typescript
import { StartStateMachineFunction } from '@jjrawlins/cdk-ami-builder'

StartStateMachineFunction.metricAllConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllDuration` <a name="metricAllDuration" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllDuration"></a>

```typescript
import { StartStateMachineFunction } from '@jjrawlins/cdk-ami-builder'

StartStateMachineFunction.metricAllDuration(props?: MetricOptions)
```

Metric for the Duration executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllErrors` <a name="metricAllErrors" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllErrors"></a>

```typescript
import { StartStateMachineFunction } from '@jjrawlins/cdk-ami-builder'

StartStateMachineFunction.metricAllErrors(props?: MetricOptions)
```

Metric for the number of Errors executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllInvocations` <a name="metricAllInvocations" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllInvocations"></a>

```typescript
import { StartStateMachineFunction } from '@jjrawlins/cdk-ami-builder'

StartStateMachineFunction.metricAllInvocations(props?: MetricOptions)
```

Metric for the number of invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllThrottles` <a name="metricAllThrottles" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllThrottles"></a>

```typescript
import { StartStateMachineFunction } from '@jjrawlins/cdk-ami-builder'

StartStateMachineFunction.metricAllThrottles(props?: MetricOptions)
```

Metric for the number of throttled invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllUnreservedConcurrentExecutions` <a name="metricAllUnreservedConcurrentExecutions" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllUnreservedConcurrentExecutions"></a>

```typescript
import { StartStateMachineFunction } from '@jjrawlins/cdk-ami-builder'

StartStateMachineFunction.metricAllUnreservedConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of unreserved concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.metricAllUnreservedConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64). |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access the Connections object. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.functionArn">functionArn</a></code> | <code>string</code> | ARN of this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.functionName">functionName</a></code> | <code>string</code> | Name of this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this Lambda Function is running as. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.isBoundToVpc">isBoundToVpc</a></code> | <code>boolean</code> | Whether or not this Lambda function was bound to a VPC. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.latestVersion">latestVersion</a></code> | <code>aws-cdk-lib.aws_lambda.IVersion</code> | The `$LATEST` version of this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.permissionsNode">permissionsNode</a></code> | <code>constructs.Node</code> | The construct node where permissions are attached. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.resourceArnsForGrantInvoke">resourceArnsForGrantInvoke</a></code> | <code>string[]</code> | The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke(). |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ (as queue) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The DLQ (as topic) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout configured for this lambda. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).

---

##### `connections`<sup>Required</sup> <a name="connections" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access the Connections object.

Will fail if not a VPC-enabled Lambda Function

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

ARN of this function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of this function.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this Lambda Function is running as.

---

##### `isBoundToVpc`<sup>Required</sup> <a name="isBoundToVpc" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.isBoundToVpc"></a>

```typescript
public readonly isBoundToVpc: boolean;
```

- *Type:* boolean

Whether or not this Lambda function was bound to a VPC.

If this is is `false`, trying to access the `connections` object will fail.

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.latestVersion"></a>

```typescript
public readonly latestVersion: IVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.IVersion

The `$LATEST` version of this function.

Note that this is reference to a non-specific AWS Lambda version, which
means the function this version refers to can return different results in
different invocations.

To obtain a reference to an explicit version which references the current
function configuration, use `lambdaFunction.currentVersion` instead.

---

##### `permissionsNode`<sup>Required</sup> <a name="permissionsNode" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.permissionsNode"></a>

```typescript
public readonly permissionsNode: Node;
```

- *Type:* constructs.Node

The construct node where permissions are attached.

---

##### `resourceArnsForGrantInvoke`<sup>Required</sup> <a name="resourceArnsForGrantInvoke" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.resourceArnsForGrantInvoke"></a>

```typescript
public readonly resourceArnsForGrantInvoke: string[];
```

- *Type:* string[]

The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke().

---

##### `role`<sup>Optional</sup> <a name="role" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role associated with this function.

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.currentVersion"></a>

```typescript
public readonly currentVersion: Version;
```

- *Type:* aws-cdk-lib.aws_lambda.Version

Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes.

You can specify options for this version using the `currentVersionOptions`
prop when initializing the `lambda.Function`.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The LogGroup where the Lambda function's logs are made available.

If either `logRetention` is set or this property is called, a CloudFormation custom resource is added to the stack that
pre-creates the log group as part of the stack deployment, if it already doesn't exist, and sets the correct log retention
period (never expire, by default).

Further, if the log group already exists and the `logRetention` is not set, the custom resource will reset the log retention
to never expire even if it was configured with a different value.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime configured for this lambda.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The DLQ (as queue) associated with this Lambda Function (this is an optional attribute).

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The DLQ (as topic) associated with this Lambda Function (this is an optional attribute).

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunction.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---


## Structs <a name="Structs" id="Structs"></a>

### CheckStateMachineStatusFunctionProps <a name="CheckStateMachineStatusFunctionProps" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps"></a>

Props for CheckStateMachineStatusFunction.

#### Initializer <a name="Initializer" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.Initializer"></a>

```typescript
import { CheckStateMachineStatusFunctionProps } from '@jjrawlins/cdk-ami-builder'

const checkStateMachineStatusFunctionProps: CheckStateMachineStatusFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.onFailure">onFailure</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for failed invocations. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.onSuccess">onSuccess</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for successful invocations. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.adotInstrumentation">adotInstrumentation</a></code> | <code>aws-cdk-lib.aws_lambda.AdotInstrumentationConfig</code> | Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.allowAllIpv6Outbound">allowAllIpv6Outbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all ipv6 network traffic. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all network traffic (except ipv6). |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.allowPublicSubnet">allowPublicSubnet</a></code> | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | Sets the application log level for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.applicationLogLevelV2">applicationLogLevelV2</a></code> | <code>aws-cdk-lib.aws_lambda.ApplicationLogLevel</code> | Sets the application log level for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The system architectures compatible with this lambda function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.codeSigningConfig">codeSigningConfig</a></code> | <code>aws-cdk-lib.aws_lambda.ICodeSigningConfig</code> | Code signing config associated with this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.currentVersionOptions">currentVersionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.VersionOptions</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to use if DLQ is enabled. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | Enabled DLQ. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The SNS topic to use as a DLQ. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key that's used to encrypt your function's environment variables. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.ephemeralStorageSize">ephemeralStorageSize</a></code> | <code>aws-cdk-lib.Size</code> | The size of the function’s /tmp directory in MiB. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.events">events</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSource[]</code> | Event sources for this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_lambda.FileSystem</code> | The filesystem configuration for the lambda function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.functionName">functionName</a></code> | <code>string</code> | A name for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.initialPolicy">initialPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Initial policy statements to add to the created Lambda Role. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.insightsVersion">insightsVersion</a></code> | <code>aws-cdk-lib.aws_lambda.LambdaInsightsVersion</code> | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.ipv6AllowedForDualStack">ipv6AllowedForDualStack</a></code> | <code>boolean</code> | Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion[]</code> | A list of layers to add to the function's execution environment. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.logFormat">logFormat</a></code> | <code>string</code> | Sets the logFormat for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.loggingFormat">loggingFormat</a></code> | <code>aws-cdk-lib.aws_lambda.LoggingFormat</code> | Sets the loggingFormat for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The log group the function sends logs to. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.logRetentionRetryOptions">logRetentionRetryOptions</a></code> | <code>aws-cdk-lib.aws_lambda.LogRetentionRetryOptions</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.logRetentionRole">logRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.paramsAndSecrets">paramsAndSecrets</a></code> | <code>aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion</code> | Specify the configuration of Parameters and Secrets Extension. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.profiling">profiling</a></code> | <code>boolean</code> | Enable profiling. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.profilingGroup">profilingGroup</a></code> | <code>aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup</code> | Profiling Group. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.recursiveLoop">recursiveLoop</a></code> | <code>aws-cdk-lib.aws_lambda.RecursiveLoop</code> | Sets the Recursive Loop Protection for Lambda Function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The maximum of concurrent executions you want to reserve for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Lambda execution role. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.runtimeManagementMode">runtimeManagementMode</a></code> | <code>aws-cdk-lib.aws_lambda.RuntimeManagementMode</code> | Sets the runtime management configuration for a function's version. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to associate with the Lambda's network interfaces. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.snapStart">snapStart</a></code> | <code>aws-cdk-lib.aws_lambda.SnapStartConf</code> | Enable SnapStart for Lambda Function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | Sets the system log level for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.systemLogLevelV2">systemLogLevelV2</a></code> | <code>aws-cdk-lib.aws_lambda.SystemLogLevel</code> | Sets the system log level for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.tracing">tracing</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | Enable AWS X-Ray Tracing for Lambda Function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place Lambda network interfaces. |
| <code><a href="#@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `adotInstrumentation`<sup>Optional</sup> <a name="adotInstrumentation" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.adotInstrumentation"></a>

```typescript
public readonly adotInstrumentation: AdotInstrumentationConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.AdotInstrumentationConfig
- *Default:* No ADOT instrumentation

Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation.

> [https://aws-otel.github.io/docs/getting-started/lambda](https://aws-otel.github.io/docs/getting-started/lambda)

---

##### `allowAllIpv6Outbound`<sup>Optional</sup> <a name="allowAllIpv6Outbound" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.allowAllIpv6Outbound"></a>

```typescript
public readonly allowAllIpv6Outbound: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to allow the Lambda to send all ipv6 network traffic.

If set to true, there will only be a single egress rule which allows all
outbound ipv6 traffic. If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets using ipv6.

Do not specify this property if the `securityGroups` or `securityGroup` property is set.
Instead, configure `allowAllIpv6Outbound` directly on the security group.

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow the Lambda to send all network traffic (except ipv6).

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

Do not specify this property if the `securityGroups` or `securityGroup` property is set.
Instead, configure `allowAllOutbound` directly on the security group.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="allowPublicSubnet" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* boolean
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> [https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841](https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841)

---

##### ~~`applicationLogLevel`~~<sup>Optional</sup> <a name="applicationLogLevel" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.applicationLogLevel"></a>

- *Deprecated:* Use `applicationLogLevelV2` as a property instead.

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string
- *Default:* "INFO"

Sets the application log level for the function.

---

##### `applicationLogLevelV2`<sup>Optional</sup> <a name="applicationLogLevelV2" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.applicationLogLevelV2"></a>

```typescript
public readonly applicationLogLevelV2: ApplicationLogLevel;
```

- *Type:* aws-cdk-lib.aws_lambda.ApplicationLogLevel
- *Default:* ApplicationLogLevel.INFO

Sets the application log level for the function.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="codeSigningConfig" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.ICodeSigningConfig
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="currentVersionOptions" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.VersionOptions
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

If SNS topic is desired, specify `deadLetterTopic` property instead.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic
- *Default:* no SNS topic

The SNS topic to use as a DLQ.

Note that if `deadLetterQueueEnabled` is set to `true`, an SQS queue will be created
rather than an SNS topic. Using an SNS topic as a DLQ requires this property to be set explicitly.

---

##### `description`<sup>Optional</sup> <a name="description" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such
as test and production environment configurations, without changing your
Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `ephemeralStorageSize`<sup>Optional</sup> <a name="ephemeralStorageSize" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.ephemeralStorageSize"></a>

```typescript
public readonly ephemeralStorageSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 512 MiB

The size of the function’s /tmp directory in MiB.

---

##### `events`<sup>Optional</sup> <a name="events" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSource[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_lambda.FileSystem
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="initialPolicy" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="insightsVersion" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LambdaInsightsVersion
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html)

---

##### `ipv6AllowedForDualStack`<sup>Optional</sup> <a name="ipv6AllowedForDualStack" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.ipv6AllowedForDualStack"></a>

```typescript
public readonly ipv6AllowedForDualStack: boolean;
```

- *Type:* boolean
- *Default:* false

Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.

Only used if 'vpc' is supplied.

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.layers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in
additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies
that can be used by multiple functions.

---

##### ~~`logFormat`~~<sup>Optional</sup> <a name="logFormat" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.logFormat"></a>

- *Deprecated:* Use `loggingFormat` as a property instead.

```typescript
public readonly logFormat: string;
```

- *Type:* string
- *Default:* "Text"

Sets the logFormat for the function.

---

##### `loggingFormat`<sup>Optional</sup> <a name="loggingFormat" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.loggingFormat"></a>

```typescript
public readonly loggingFormat: LoggingFormat;
```

- *Type:* aws-cdk-lib.aws_lambda.LoggingFormat
- *Default:* LoggingFormat.TEXT

Sets the loggingFormat for the function.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* `/aws/lambda/${this.functionName}` - default log group created by Lambda

The log group the function sends logs to.

By default, Lambda functions send logs to an automatically created default log group named /aws/lambda/\<function name\>.
However you cannot change the properties of this auto-created log group using the AWS CDK, e.g. you cannot set a different log retention.

Use the `logGroup` property to create a fully customizable LogGroup ahead of time, and instruct the Lambda function to send logs to it.

Providing a user-controlled log group was rolled out to commercial regions on 2023-11-16.
If you are deploying to another type of region, please check regional availability first.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

This is a legacy API and we strongly recommend you move away from it if you can.
Instead create a fully customizable log group with `logs.LogGroup` and use the `logGroup` property
to instruct the Lambda function to send logs to it.
Migrating from `logRetention` to `logGroup` will cause the name of the log group to change.
Users and code and referencing the name verbatim will have to adjust.

In AWS CDK code, you can access the log group name directly from the LogGroup construct:
```ts
import * as logs from 'aws-cdk-lib/aws-logs';

declare const myLogGroup: logs.LogGroup;
myLogGroup.logGroupName;
```

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="logRetentionRetryOptions" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.LogRetentionRetryOptions
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="logRetentionRole" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU
power. For more information, see Resource Model in the AWS Lambda
Developer Guide.

---

##### `paramsAndSecrets`<sup>Optional</sup> <a name="paramsAndSecrets" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.paramsAndSecrets"></a>

```typescript
public readonly paramsAndSecrets: ParamsAndSecretsLayerVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion
- *Default:* No Parameters and Secrets Extension

Specify the configuration of Parameters and Secrets Extension.

> [https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html)

---

##### `profiling`<sup>Optional</sup> <a name="profiling" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* boolean
- *Default:* No profiling.

Enable profiling.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `profilingGroup`<sup>Optional</sup> <a name="profilingGroup" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `recursiveLoop`<sup>Optional</sup> <a name="recursiveLoop" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.recursiveLoop"></a>

```typescript
public readonly recursiveLoop: RecursiveLoop;
```

- *Type:* aws-cdk-lib.aws_lambda.RecursiveLoop
- *Default:* RecursiveLoop.Terminate

Sets the Recursive Loop Protection for Lambda Function.

It lets Lambda detect and terminate unintended recusrive loops.

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> [https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)

---

##### `role`<sup>Optional</sup> <a name="role" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution.
It controls the permissions that the function will have. The Role must
be assumable by the 'lambda.amazonaws.com' service principal.

The default Role automatically has permissions granted for Lambda execution. If you
provide a Role, you must add the relevant AWS managed policies yourself.

The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and
"service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `runtimeManagementMode`<sup>Optional</sup> <a name="runtimeManagementMode" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.runtimeManagementMode"></a>

```typescript
public readonly runtimeManagementMode: RuntimeManagementMode;
```

- *Type:* aws-cdk-lib.aws_lambda.RuntimeManagementMode
- *Default:* Auto

Sets the runtime management configuration for a function's version.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `snapStart`<sup>Optional</sup> <a name="snapStart" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.snapStart"></a>

```typescript
public readonly snapStart: SnapStartConf;
```

- *Type:* aws-cdk-lib.aws_lambda.SnapStartConf
- *Default:* No snapstart

Enable SnapStart for Lambda Function.

SnapStart is currently supported only for Java 11, 17 runtime

---

##### ~~`systemLogLevel`~~<sup>Optional</sup> <a name="systemLogLevel" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.systemLogLevel"></a>

- *Deprecated:* Use `systemLogLevelV2` as a property instead.

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string
- *Default:* "INFO"

Sets the system log level for the function.

---

##### `systemLogLevelV2`<sup>Optional</sup> <a name="systemLogLevelV2" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.systemLogLevelV2"></a>

```typescript
public readonly systemLogLevelV2: SystemLogLevel;
```

- *Type:* aws-cdk-lib.aws_lambda.SystemLogLevel
- *Default:* SystemLogLevel.INFO

Sets the system log level for the function.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="tracing" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.
This is required when `vpcSubnets` is specified.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@jjrawlins/cdk-ami-builder.CheckStateMachineStatusFunctionProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

This requires `vpc` to be specified in order for interfaces to actually be
placed in the subnets. If `vpc` is not specify, this will raise an error.

Note: Internet access for Lambda Functions requires a NAT Gateway, so picking
public subnets is not allowed (unless `allowPublicSubnet` is set to `true`).

---

### ImagePipelineProps <a name="ImagePipelineProps" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps"></a>

#### Initializer <a name="Initializer" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.Initializer"></a>

```typescript
import { ImagePipelineProps } from '@jjrawlins/cdk-ami-builder'

const imagePipelineProps: ImagePipelineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.components">components</a></code> | <code><a href="#@jjrawlins/cdk-ami-builder.IComponentProps">IComponentProps</a>[]</code> | List of component props. |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.parentImage">parentImage</a></code> | <code>string</code> | The source (parent) image that the image recipe uses as its base environment. |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | Vpc to use for the Image Builder Pipeline. |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.additionalPolicies">additionalPolicies</a></code> | <code>aws-cdk-lib.aws_iam.ManagedPolicy[]</code> | Additional policies to add to the instance profile associated with the Instance Configurations. |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.debugImagePipeline">debugImagePipeline</a></code> | <code>boolean</code> | Flag indicating whether the debug image pipeline is enabled or not. |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.distributionAccountIds">distributionAccountIds</a></code> | <code>string[]</code> | This variable represents an array of shared account IDs. |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.distributionKmsKeyAlias">distributionKmsKeyAlias</a></code> | <code>string</code> | The alias of the KMS key used for encryption and decryption of content in the distribution. |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.distributionRegions">distributionRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.ebsVolumeConfigurations">ebsVolumeConfigurations</a></code> | <code><a href="#@jjrawlins/cdk-ami-builder.VolumeProps">VolumeProps</a>[]</code> | Subnet ID for the Infrastructure Configuration. |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.email">email</a></code> | <code>string</code> | Email used to receive Image Builder Pipeline Notifications via SNS. |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.enableVulnScans">enableVulnScans</a></code> | <code>boolean</code> | Set to true if you want to enable continuous vulnerability scans through AWS Inpector. |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.imageRecipeVersion">imageRecipeVersion</a></code> | <code>string</code> | Image recipe version (Default: 0.0.1). |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.instanceTypes">instanceTypes</a></code> | <code>string[]</code> | List of instance types used in the Instance Configuration (Default: [ 't3.medium', 'm5.large', 'm5.xlarge' ]). |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.platform">platform</a></code> | <code>string</code> | Platform type Linux or Windows (Default: Linux). |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.profileName">profileName</a></code> | <code>string</code> | Name of the instance profile that will be associated with the Instance Configuration. |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | List of security group IDs for the Infrastructure Configuration. |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.userDataScript">userDataScript</a></code> | <code>string</code> | UserData script that will override default one (if specified). |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.vulnScansRepoName">vulnScansRepoName</a></code> | <code>string</code> | Store vulnerability scans through AWS Inspector in ECR using this repo name (if option is enabled). |
| <code><a href="#@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.vulnScansRepoTags">vulnScansRepoTags</a></code> | <code>string[]</code> | Store vulnerability scans through AWS Inspector in ECR using these image tags (if option is enabled). |

---

##### `components`<sup>Required</sup> <a name="components" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.components"></a>

```typescript
public readonly components: IComponentProps[];
```

- *Type:* <a href="#@jjrawlins/cdk-ami-builder.IComponentProps">IComponentProps</a>[]

List of component props.

---

##### `parentImage`<sup>Required</sup> <a name="parentImage" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.parentImage"></a>

```typescript
public readonly parentImage: string;
```

- *Type:* string

The source (parent) image that the image recipe uses as its base environment.

The value can be the parent image ARN or an Image Builder AMI ID

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

Vpc to use for the Image Builder Pipeline.

---

##### `additionalPolicies`<sup>Optional</sup> <a name="additionalPolicies" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.additionalPolicies"></a>

```typescript
public readonly additionalPolicies: ManagedPolicy[];
```

- *Type:* aws-cdk-lib.aws_iam.ManagedPolicy[]

Additional policies to add to the instance profile associated with the Instance Configurations.

---

##### `debugImagePipeline`<sup>Optional</sup> <a name="debugImagePipeline" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.debugImagePipeline"></a>

```typescript
public readonly debugImagePipeline: boolean;
```

- *Type:* boolean

Flag indicating whether the debug image pipeline is enabled or not.

This variable is optional. Default value is false.
 Functionally, this will flag to return as finished immediately after first check to see if the image pipeline has finished.
 This is useful for debugging the image pipeline.  However, there will be no AMI value returned.

---

##### `distributionAccountIds`<sup>Optional</sup> <a name="distributionAccountIds" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.distributionAccountIds"></a>

```typescript
public readonly distributionAccountIds: string[];
```

- *Type:* string[]

This variable represents an array of shared account IDs.

It is optional and readonly.
If it is provided, this AMI will be visible to the accounts in the array.
 In order to share the AMI with other accounts, you must specify a KMS key ID for the EBS volume configuration as AWS does not allow sharing AMIs encrypted with the default AMI encryption key.

---

##### `distributionKmsKeyAlias`<sup>Optional</sup> <a name="distributionKmsKeyAlias" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.distributionKmsKeyAlias"></a>

```typescript
public readonly distributionKmsKeyAlias: string;
```

- *Type:* string

The alias of the KMS key used for encryption and decryption of content in the distribution.

This property is optional and readonly.
The default encryption key is not compatible with cross-account AMI sharing.
If you specify distributionAccountIds, you must specify a non-default encryption key using this property. Otherwise, Image Builder will throw an error.
Keep in mind that the KMS key in the distribution account must allow the EC2ImageBuilderDistributionCrossAccountRole role to use the key.

---

##### `distributionRegions`<sup>Optional</sup> <a name="distributionRegions" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.distributionRegions"></a>

```typescript
public readonly distributionRegions: string[];
```

- *Type:* string[]

---

##### `ebsVolumeConfigurations`<sup>Optional</sup> <a name="ebsVolumeConfigurations" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.ebsVolumeConfigurations"></a>

```typescript
public readonly ebsVolumeConfigurations: VolumeProps[];
```

- *Type:* <a href="#@jjrawlins/cdk-ami-builder.VolumeProps">VolumeProps</a>[]

Subnet ID for the Infrastructure Configuration.

---

##### `email`<sup>Optional</sup> <a name="email" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Email used to receive Image Builder Pipeline Notifications via SNS.

---

##### `enableVulnScans`<sup>Optional</sup> <a name="enableVulnScans" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.enableVulnScans"></a>

```typescript
public readonly enableVulnScans: boolean;
```

- *Type:* boolean

Set to true if you want to enable continuous vulnerability scans through AWS Inpector.

---

##### `imageRecipeVersion`<sup>Optional</sup> <a name="imageRecipeVersion" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.imageRecipeVersion"></a>

```typescript
public readonly imageRecipeVersion: string;
```

- *Type:* string

Image recipe version (Default: 0.0.1).

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- *Type:* string[]

List of instance types used in the Instance Configuration (Default: [ 't3.medium', 'm5.large', 'm5.xlarge' ]).

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Platform type Linux or Windows (Default: Linux).

---

##### `profileName`<sup>Optional</sup> <a name="profileName" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

Name of the instance profile that will be associated with the Instance Configuration.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

List of security group IDs for the Infrastructure Configuration.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `userDataScript`<sup>Optional</sup> <a name="userDataScript" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.userDataScript"></a>

```typescript
public readonly userDataScript: string;
```

- *Type:* string
- *Default:* none

UserData script that will override default one (if specified).

---

##### `vulnScansRepoName`<sup>Optional</sup> <a name="vulnScansRepoName" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.vulnScansRepoName"></a>

```typescript
public readonly vulnScansRepoName: string;
```

- *Type:* string

Store vulnerability scans through AWS Inspector in ECR using this repo name (if option is enabled).

---

##### `vulnScansRepoTags`<sup>Optional</sup> <a name="vulnScansRepoTags" id="@jjrawlins/cdk-ami-builder.ImagePipelineProps.property.vulnScansRepoTags"></a>

```typescript
public readonly vulnScansRepoTags: string[];
```

- *Type:* string[]

Store vulnerability scans through AWS Inspector in ECR using these image tags (if option is enabled).

---

### StartStateMachineFunctionProps <a name="StartStateMachineFunctionProps" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps"></a>

Props for StartStateMachineFunction.

#### Initializer <a name="Initializer" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.Initializer"></a>

```typescript
import { StartStateMachineFunctionProps } from '@jjrawlins/cdk-ami-builder'

const startStateMachineFunctionProps: StartStateMachineFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.onFailure">onFailure</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for failed invocations. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.onSuccess">onSuccess</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for successful invocations. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.adotInstrumentation">adotInstrumentation</a></code> | <code>aws-cdk-lib.aws_lambda.AdotInstrumentationConfig</code> | Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.allowAllIpv6Outbound">allowAllIpv6Outbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all ipv6 network traffic. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all network traffic (except ipv6). |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.allowPublicSubnet">allowPublicSubnet</a></code> | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | Sets the application log level for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.applicationLogLevelV2">applicationLogLevelV2</a></code> | <code>aws-cdk-lib.aws_lambda.ApplicationLogLevel</code> | Sets the application log level for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The system architectures compatible with this lambda function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.codeSigningConfig">codeSigningConfig</a></code> | <code>aws-cdk-lib.aws_lambda.ICodeSigningConfig</code> | Code signing config associated with this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.currentVersionOptions">currentVersionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.VersionOptions</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to use if DLQ is enabled. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | Enabled DLQ. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The SNS topic to use as a DLQ. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key that's used to encrypt your function's environment variables. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.ephemeralStorageSize">ephemeralStorageSize</a></code> | <code>aws-cdk-lib.Size</code> | The size of the function’s /tmp directory in MiB. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.events">events</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSource[]</code> | Event sources for this function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_lambda.FileSystem</code> | The filesystem configuration for the lambda function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.functionName">functionName</a></code> | <code>string</code> | A name for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.initialPolicy">initialPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Initial policy statements to add to the created Lambda Role. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.insightsVersion">insightsVersion</a></code> | <code>aws-cdk-lib.aws_lambda.LambdaInsightsVersion</code> | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.ipv6AllowedForDualStack">ipv6AllowedForDualStack</a></code> | <code>boolean</code> | Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion[]</code> | A list of layers to add to the function's execution environment. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.logFormat">logFormat</a></code> | <code>string</code> | Sets the logFormat for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.loggingFormat">loggingFormat</a></code> | <code>aws-cdk-lib.aws_lambda.LoggingFormat</code> | Sets the loggingFormat for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The log group the function sends logs to. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.logRetentionRetryOptions">logRetentionRetryOptions</a></code> | <code>aws-cdk-lib.aws_lambda.LogRetentionRetryOptions</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.logRetentionRole">logRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.paramsAndSecrets">paramsAndSecrets</a></code> | <code>aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion</code> | Specify the configuration of Parameters and Secrets Extension. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.profiling">profiling</a></code> | <code>boolean</code> | Enable profiling. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.profilingGroup">profilingGroup</a></code> | <code>aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup</code> | Profiling Group. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.recursiveLoop">recursiveLoop</a></code> | <code>aws-cdk-lib.aws_lambda.RecursiveLoop</code> | Sets the Recursive Loop Protection for Lambda Function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The maximum of concurrent executions you want to reserve for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Lambda execution role. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.runtimeManagementMode">runtimeManagementMode</a></code> | <code>aws-cdk-lib.aws_lambda.RuntimeManagementMode</code> | Sets the runtime management configuration for a function's version. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to associate with the Lambda's network interfaces. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.snapStart">snapStart</a></code> | <code>aws-cdk-lib.aws_lambda.SnapStartConf</code> | Enable SnapStart for Lambda Function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | Sets the system log level for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.systemLogLevelV2">systemLogLevelV2</a></code> | <code>aws-cdk-lib.aws_lambda.SystemLogLevel</code> | Sets the system log level for the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.tracing">tracing</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | Enable AWS X-Ray Tracing for Lambda Function. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place Lambda network interfaces. |
| <code><a href="#@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `adotInstrumentation`<sup>Optional</sup> <a name="adotInstrumentation" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.adotInstrumentation"></a>

```typescript
public readonly adotInstrumentation: AdotInstrumentationConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.AdotInstrumentationConfig
- *Default:* No ADOT instrumentation

Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation.

> [https://aws-otel.github.io/docs/getting-started/lambda](https://aws-otel.github.io/docs/getting-started/lambda)

---

##### `allowAllIpv6Outbound`<sup>Optional</sup> <a name="allowAllIpv6Outbound" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.allowAllIpv6Outbound"></a>

```typescript
public readonly allowAllIpv6Outbound: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to allow the Lambda to send all ipv6 network traffic.

If set to true, there will only be a single egress rule which allows all
outbound ipv6 traffic. If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets using ipv6.

Do not specify this property if the `securityGroups` or `securityGroup` property is set.
Instead, configure `allowAllIpv6Outbound` directly on the security group.

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow the Lambda to send all network traffic (except ipv6).

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

Do not specify this property if the `securityGroups` or `securityGroup` property is set.
Instead, configure `allowAllOutbound` directly on the security group.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="allowPublicSubnet" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* boolean
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> [https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841](https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841)

---

##### ~~`applicationLogLevel`~~<sup>Optional</sup> <a name="applicationLogLevel" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.applicationLogLevel"></a>

- *Deprecated:* Use `applicationLogLevelV2` as a property instead.

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string
- *Default:* "INFO"

Sets the application log level for the function.

---

##### `applicationLogLevelV2`<sup>Optional</sup> <a name="applicationLogLevelV2" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.applicationLogLevelV2"></a>

```typescript
public readonly applicationLogLevelV2: ApplicationLogLevel;
```

- *Type:* aws-cdk-lib.aws_lambda.ApplicationLogLevel
- *Default:* ApplicationLogLevel.INFO

Sets the application log level for the function.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="codeSigningConfig" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.ICodeSigningConfig
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="currentVersionOptions" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.VersionOptions
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

If SNS topic is desired, specify `deadLetterTopic` property instead.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic
- *Default:* no SNS topic

The SNS topic to use as a DLQ.

Note that if `deadLetterQueueEnabled` is set to `true`, an SQS queue will be created
rather than an SNS topic. Using an SNS topic as a DLQ requires this property to be set explicitly.

---

##### `description`<sup>Optional</sup> <a name="description" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such
as test and production environment configurations, without changing your
Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `ephemeralStorageSize`<sup>Optional</sup> <a name="ephemeralStorageSize" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.ephemeralStorageSize"></a>

```typescript
public readonly ephemeralStorageSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 512 MiB

The size of the function’s /tmp directory in MiB.

---

##### `events`<sup>Optional</sup> <a name="events" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSource[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_lambda.FileSystem
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="initialPolicy" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="insightsVersion" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LambdaInsightsVersion
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html)

---

##### `ipv6AllowedForDualStack`<sup>Optional</sup> <a name="ipv6AllowedForDualStack" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.ipv6AllowedForDualStack"></a>

```typescript
public readonly ipv6AllowedForDualStack: boolean;
```

- *Type:* boolean
- *Default:* false

Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.

Only used if 'vpc' is supplied.

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.layers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in
additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies
that can be used by multiple functions.

---

##### ~~`logFormat`~~<sup>Optional</sup> <a name="logFormat" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.logFormat"></a>

- *Deprecated:* Use `loggingFormat` as a property instead.

```typescript
public readonly logFormat: string;
```

- *Type:* string
- *Default:* "Text"

Sets the logFormat for the function.

---

##### `loggingFormat`<sup>Optional</sup> <a name="loggingFormat" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.loggingFormat"></a>

```typescript
public readonly loggingFormat: LoggingFormat;
```

- *Type:* aws-cdk-lib.aws_lambda.LoggingFormat
- *Default:* LoggingFormat.TEXT

Sets the loggingFormat for the function.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* `/aws/lambda/${this.functionName}` - default log group created by Lambda

The log group the function sends logs to.

By default, Lambda functions send logs to an automatically created default log group named /aws/lambda/\<function name\>.
However you cannot change the properties of this auto-created log group using the AWS CDK, e.g. you cannot set a different log retention.

Use the `logGroup` property to create a fully customizable LogGroup ahead of time, and instruct the Lambda function to send logs to it.

Providing a user-controlled log group was rolled out to commercial regions on 2023-11-16.
If you are deploying to another type of region, please check regional availability first.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

This is a legacy API and we strongly recommend you move away from it if you can.
Instead create a fully customizable log group with `logs.LogGroup` and use the `logGroup` property
to instruct the Lambda function to send logs to it.
Migrating from `logRetention` to `logGroup` will cause the name of the log group to change.
Users and code and referencing the name verbatim will have to adjust.

In AWS CDK code, you can access the log group name directly from the LogGroup construct:
```ts
import * as logs from 'aws-cdk-lib/aws-logs';

declare const myLogGroup: logs.LogGroup;
myLogGroup.logGroupName;
```

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="logRetentionRetryOptions" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.LogRetentionRetryOptions
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="logRetentionRole" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU
power. For more information, see Resource Model in the AWS Lambda
Developer Guide.

---

##### `paramsAndSecrets`<sup>Optional</sup> <a name="paramsAndSecrets" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.paramsAndSecrets"></a>

```typescript
public readonly paramsAndSecrets: ParamsAndSecretsLayerVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion
- *Default:* No Parameters and Secrets Extension

Specify the configuration of Parameters and Secrets Extension.

> [https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html)

---

##### `profiling`<sup>Optional</sup> <a name="profiling" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* boolean
- *Default:* No profiling.

Enable profiling.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `profilingGroup`<sup>Optional</sup> <a name="profilingGroup" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `recursiveLoop`<sup>Optional</sup> <a name="recursiveLoop" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.recursiveLoop"></a>

```typescript
public readonly recursiveLoop: RecursiveLoop;
```

- *Type:* aws-cdk-lib.aws_lambda.RecursiveLoop
- *Default:* RecursiveLoop.Terminate

Sets the Recursive Loop Protection for Lambda Function.

It lets Lambda detect and terminate unintended recusrive loops.

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> [https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)

---

##### `role`<sup>Optional</sup> <a name="role" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution.
It controls the permissions that the function will have. The Role must
be assumable by the 'lambda.amazonaws.com' service principal.

The default Role automatically has permissions granted for Lambda execution. If you
provide a Role, you must add the relevant AWS managed policies yourself.

The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and
"service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `runtimeManagementMode`<sup>Optional</sup> <a name="runtimeManagementMode" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.runtimeManagementMode"></a>

```typescript
public readonly runtimeManagementMode: RuntimeManagementMode;
```

- *Type:* aws-cdk-lib.aws_lambda.RuntimeManagementMode
- *Default:* Auto

Sets the runtime management configuration for a function's version.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `snapStart`<sup>Optional</sup> <a name="snapStart" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.snapStart"></a>

```typescript
public readonly snapStart: SnapStartConf;
```

- *Type:* aws-cdk-lib.aws_lambda.SnapStartConf
- *Default:* No snapstart

Enable SnapStart for Lambda Function.

SnapStart is currently supported only for Java 11, 17 runtime

---

##### ~~`systemLogLevel`~~<sup>Optional</sup> <a name="systemLogLevel" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.systemLogLevel"></a>

- *Deprecated:* Use `systemLogLevelV2` as a property instead.

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string
- *Default:* "INFO"

Sets the system log level for the function.

---

##### `systemLogLevelV2`<sup>Optional</sup> <a name="systemLogLevelV2" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.systemLogLevelV2"></a>

```typescript
public readonly systemLogLevelV2: SystemLogLevel;
```

- *Type:* aws-cdk-lib.aws_lambda.SystemLogLevel
- *Default:* SystemLogLevel.INFO

Sets the system log level for the function.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="tracing" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.
This is required when `vpcSubnets` is specified.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@jjrawlins/cdk-ami-builder.StartStateMachineFunctionProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

This requires `vpc` to be specified in order for interfaces to actually be
placed in the subnets. If `vpc` is not specify, this will raise an error.

Note: Internet access for Lambda Functions requires a NAT Gateway, so picking
public subnets is not allowed (unless `allowPublicSubnet` is set to `true`).

---

### VolumeProps <a name="VolumeProps" id="@jjrawlins/cdk-ami-builder.VolumeProps"></a>

#### Initializer <a name="Initializer" id="@jjrawlins/cdk-ami-builder.VolumeProps.Initializer"></a>

```typescript
import { VolumeProps } from '@jjrawlins/cdk-ami-builder'

const volumeProps: VolumeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.VolumeProps.property.deviceName">deviceName</a></code> | <code>string</code> | Name of the volume. |
| <code><a href="#@jjrawlins/cdk-ami-builder.VolumeProps.property.ebs">ebs</a></code> | <code><a href="#@jjrawlins/cdk-ami-builder.IEbsParameters">IEbsParameters</a></code> | EBS Block Store Parameters. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@jjrawlins/cdk-ami-builder.VolumeProps.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Name of the volume.

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@jjrawlins/cdk-ami-builder.VolumeProps.property.ebs"></a>

```typescript
public readonly ebs: IEbsParameters;
```

- *Type:* <a href="#@jjrawlins/cdk-ami-builder.IEbsParameters">IEbsParameters</a>

EBS Block Store Parameters.

By default, the 'kmsKeyId' of EBS volume is set to 'amiEncryptionKey.keyId',
and 'encrypted' is set to 'true'. If you wish to use a different KMS Key,
you may do so. However, please make sure that the necessary permissions
and compliance requirements for the KMS Key are already set up.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IActionCommands <a name="IActionCommands" id="@jjrawlins/cdk-ami-builder.IActionCommands"></a>

- *Implemented By:* <a href="#@jjrawlins/cdk-ami-builder.IActionCommands">IActionCommands</a>

Build commands for the component.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.IActionCommands.property.commands">commands</a></code> | <code>string[]</code> | *No description.* |

---

##### `commands`<sup>Required</sup> <a name="commands" id="@jjrawlins/cdk-ami-builder.IActionCommands.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

---

### IComponentDocument <a name="IComponentDocument" id="@jjrawlins/cdk-ami-builder.IComponentDocument"></a>

- *Implemented By:* <a href="#@jjrawlins/cdk-ami-builder.IComponentDocument">IComponentDocument</a>

Component data.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.IComponentDocument.property.phases">phases</a></code> | <code><a href="#@jjrawlins/cdk-ami-builder.IPhases">IPhases</a>[]</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.IComponentDocument.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.IComponentDocument.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.IComponentDocument.property.schemaVersion">schemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `phases`<sup>Required</sup> <a name="phases" id="@jjrawlins/cdk-ami-builder.IComponentDocument.property.phases"></a>

```typescript
public readonly phases: IPhases[];
```

- *Type:* <a href="#@jjrawlins/cdk-ami-builder.IPhases">IPhases</a>[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@jjrawlins/cdk-ami-builder.IComponentDocument.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="@jjrawlins/cdk-ami-builder.IComponentDocument.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schemaVersion`<sup>Optional</sup> <a name="schemaVersion" id="@jjrawlins/cdk-ami-builder.IComponentDocument.property.schemaVersion"></a>

```typescript
public readonly schemaVersion: string;
```

- *Type:* string

---

### IComponentProps <a name="IComponentProps" id="@jjrawlins/cdk-ami-builder.IComponentProps"></a>

- *Implemented By:* <a href="#@jjrawlins/cdk-ami-builder.IComponentProps">IComponentProps</a>

Component props.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.IComponentProps.property.componentDocument">componentDocument</a></code> | <code><a href="#@jjrawlins/cdk-ami-builder.IComponentDocument">IComponentDocument</a></code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.IComponentProps.property.componentVersion">componentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.IComponentProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.IComponentProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.IComponentProps.property.parameters">parameters</a></code> | <code>{[ key: string ]: <a href="#@jjrawlins/cdk-ami-builder.IInputParameter">IInputParameter</a>}</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.IComponentProps.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.IComponentProps.property.schemaVersion">schemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `componentDocument`<sup>Required</sup> <a name="componentDocument" id="@jjrawlins/cdk-ami-builder.IComponentProps.property.componentDocument"></a>

```typescript
public readonly componentDocument: IComponentDocument;
```

- *Type:* <a href="#@jjrawlins/cdk-ami-builder.IComponentDocument">IComponentDocument</a>

---

##### `componentVersion`<sup>Optional</sup> <a name="componentVersion" id="@jjrawlins/cdk-ami-builder.IComponentProps.property.componentVersion"></a>

```typescript
public readonly componentVersion: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="@jjrawlins/cdk-ami-builder.IComponentProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="@jjrawlins/cdk-ami-builder.IComponentProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@jjrawlins/cdk-ami-builder.IComponentProps.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: IInputParameter};
```

- *Type:* {[ key: string ]: <a href="#@jjrawlins/cdk-ami-builder.IInputParameter">IInputParameter</a>}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@jjrawlins/cdk-ami-builder.IComponentProps.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `schemaVersion`<sup>Optional</sup> <a name="schemaVersion" id="@jjrawlins/cdk-ami-builder.IComponentProps.property.schemaVersion"></a>

```typescript
public readonly schemaVersion: string;
```

- *Type:* string

---

### IEbsParameters <a name="IEbsParameters" id="@jjrawlins/cdk-ami-builder.IEbsParameters"></a>

- *Implemented By:* <a href="#@jjrawlins/cdk-ami-builder.IEbsParameters">IEbsParameters</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.IEbsParameters.property.volumeSize">volumeSize</a></code> | <code>number</code> | Size of the volume in GiB. |
| <code><a href="#@jjrawlins/cdk-ami-builder.IEbsParameters.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean</code> | Whether the volume is deleted when the instance is terminated. |
| <code><a href="#@jjrawlins/cdk-ami-builder.IEbsParameters.property.encrypted">encrypted</a></code> | <code>boolean</code> | Whether the volume is encrypted. |
| <code><a href="#@jjrawlins/cdk-ami-builder.IEbsParameters.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | KMS Key Alias for the volume If not specified, the default AMI encryption key alias will be used Custom KMS Keys Alias need to exist in the other accounts for distribution to work correctly. |
| <code><a href="#@jjrawlins/cdk-ami-builder.IEbsParameters.property.volumeType">volumeType</a></code> | <code>string</code> | Type of the volume. |

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@jjrawlins/cdk-ami-builder.IEbsParameters.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Size of the volume in GiB.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@jjrawlins/cdk-ami-builder.IEbsParameters.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the volume is deleted when the instance is terminated.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@jjrawlins/cdk-ami-builder.IEbsParameters.property.encrypted"></a>

```typescript
public readonly encrypted: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the volume is encrypted.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@jjrawlins/cdk-ami-builder.IEbsParameters.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string
- *Default:* alias/aws/ebs

KMS Key Alias for the volume If not specified, the default AMI encryption key alias will be used Custom KMS Keys Alias need to exist in the other accounts for distribution to work correctly.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@jjrawlins/cdk-ami-builder.IEbsParameters.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string
- *Default:* gp2

Type of the volume.

---

### IInputParameter <a name="IInputParameter" id="@jjrawlins/cdk-ami-builder.IInputParameter"></a>

- *Implemented By:* <a href="#@jjrawlins/cdk-ami-builder.IInputParameter">IInputParameter</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.IInputParameter.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.IInputParameter.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.IInputParameter.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `default`<sup>Required</sup> <a name="default" id="@jjrawlins/cdk-ami-builder.IInputParameter.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@jjrawlins/cdk-ami-builder.IInputParameter.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@jjrawlins/cdk-ami-builder.IInputParameter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

### IPhases <a name="IPhases" id="@jjrawlins/cdk-ami-builder.IPhases"></a>

- *Implemented By:* <a href="#@jjrawlins/cdk-ami-builder.IPhases">IPhases</a>

Phases for the component.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.IPhases.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.IPhases.property.steps">steps</a></code> | <code><a href="#@jjrawlins/cdk-ami-builder.IStepCommands">IStepCommands</a>[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@jjrawlins/cdk-ami-builder.IPhases.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `steps`<sup>Required</sup> <a name="steps" id="@jjrawlins/cdk-ami-builder.IPhases.property.steps"></a>

```typescript
public readonly steps: IStepCommands[];
```

- *Type:* <a href="#@jjrawlins/cdk-ami-builder.IStepCommands">IStepCommands</a>[]

---

### IStepCommands <a name="IStepCommands" id="@jjrawlins/cdk-ami-builder.IStepCommands"></a>

- *Implemented By:* <a href="#@jjrawlins/cdk-ami-builder.IStepCommands">IStepCommands</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/cdk-ami-builder.IStepCommands.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.IStepCommands.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/cdk-ami-builder.IStepCommands.property.inputs">inputs</a></code> | <code><a href="#@jjrawlins/cdk-ami-builder.IActionCommands">IActionCommands</a></code> | *No description.* |

---

##### `action`<sup>Required</sup> <a name="action" id="@jjrawlins/cdk-ami-builder.IStepCommands.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@jjrawlins/cdk-ami-builder.IStepCommands.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@jjrawlins/cdk-ami-builder.IStepCommands.property.inputs"></a>

```typescript
public readonly inputs: IActionCommands;
```

- *Type:* <a href="#@jjrawlins/cdk-ami-builder.IActionCommands">IActionCommands</a>

---

