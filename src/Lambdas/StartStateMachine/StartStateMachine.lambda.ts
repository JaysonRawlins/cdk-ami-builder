// eslint-disable-next-line import/no-extraneous-dependencies
import { SFNClient, StartExecutionCommand } from '@aws-sdk/client-sfn';
import {
  CdkCustomResourceResponse,
  CloudFormationCustomResourceCreateEvent,
  CloudFormationCustomResourceDeleteEvent,
  CloudFormationCustomResourceEvent,
  CloudFormationCustomResourceUpdateEvent,
  Context,
} from 'aws-lambda';

const region = process.env.AWS_REGION;
const sfnClient = new SFNClient({ region: region }); // Replace with your region

export const handler = async (
  event: CloudFormationCustomResourceEvent,
  context: Context,
): Promise<CdkCustomResourceResponse> => {
  console.log('Lambda is invoked with:' + JSON.stringify(event));
  console.log('Context is invoked with:' + JSON.stringify(context));
  console.log('Lambda is invoked with:' + JSON.stringify(event));
  const physicalResourceId = event.ResourceProperties.PhysicalResourceId;

  let response: CdkCustomResourceResponse = {
    Status: 'SUCCESS',
    Reason: 'See the details in CloudWatch Log Stream: ' + context.logStreamName,
    PhysicalResourceId: physicalResourceId,
    StackId: event.StackId,
    RequestId: event.RequestId,
    LogicalResourceId: event.LogicalResourceId,
  };

  switch (event.RequestType) {
    case 'Create':
      response = await onCreate(response, event, context);
      break;
    case 'Delete':
      response = await onDelete(response, event, context);
      break;
    case 'Update':
      response = await onUpdate(response, event, context);
      break;
    default:
      throw new Error('Unknown Request Type of CloudFormation');
  }
  console.log('Return value:', JSON.stringify(response));
  return response;
};

/**
 * Executes the create event for a CloudFormation custom resource.
 * @param {CdkCustomResourceResponse} response - The custom resource response object.
 * @param {CloudFormationCustomResourceCreateEvent} event - The create event object.
 * @param {Context} context - The AWS Lambda context object.
 * @return {Promise<CdkCustomResourceResponse>} - A promise that resolves to the custom resource response object.
 */
export async function onCreate(
  response: CdkCustomResourceResponse,
  event: CloudFormationCustomResourceCreateEvent,
  context: Context): Promise<CdkCustomResourceResponse> {
  try {
    console.log('We are in the Create Event');
    console.log('Context is invoked with:' + JSON.stringify(context));
    const stateMachineArn = event.ResourceProperties.StateMachineArn;
    const imagePipelineArn = event.ResourceProperties.ImagePipelineArn;
    const executionName = event.RequestId;
    await startExecution(stateMachineArn, executionName, imagePipelineArn);
  } catch (error) {
    if (error instanceof Error) {
      response.Reason = error.message;
    }
    response.Status = 'FAILED';
    response.Data = { Result: error };
    return response;
  }
  return response;
}

/**
 * Handles delete event for a cloud formation custom resource.
 *
 * @param {CdkCustomResourceResponse} response - The custom resource response object.
 * @param {CloudFormationCustomResourceDeleteEvent} event - The delete event object.
 * @param {Context} context - The AWS lambda context object.
 * @returns {Promise<CdkCustomResourceResponse>} - The updated custom resource response object.
 */
export async function onDelete(
  response: CdkCustomResourceResponse,
  event: CloudFormationCustomResourceDeleteEvent,
  context: Context): Promise<CdkCustomResourceResponse> {
  try {
    console.log('We are in the Delete Event');
    console.log('Context is invoked with:' + JSON.stringify(context));
    console.log('Event is invoked with:' + JSON.stringify(event));
    response.Status = 'SUCCESS';
  } catch (error) {
    if (error instanceof Error) {
      response.Reason = error.message;
    }
    response.Status = 'FAILED';
    response.Data = { Result: error };
    return response;
  }
  return response;
}

/**
 * Executes the onUpdate logic for a CloudFormation custom resource.
 *
 * @param {CdkCustomResourceResponse} response - The response object for the custom resource.
 * @param {CloudFormationCustomResourceUpdateEvent} event - The update event object from CloudFormation.
 * @param {Context} context - The execution context object.
 * @returns {Promise<CdkCustomResourceResponse>} A promise that resolves to the updated response object.
 */
export async function onUpdate(
  response: CdkCustomResourceResponse,
  event: CloudFormationCustomResourceUpdateEvent,
  context: Context): Promise<CdkCustomResourceResponse> {
  try {
    const executionName = event.RequestId;
    const imagePipelineArn = event.ResourceProperties.ImagePipelineArn;
    const stateMachineArn = event.ResourceProperties.StateMachineArn;
    const amiKmsId = event.ResourceProperties.AmiKmsId;
    const accounts = event.ResourceProperties.SharedAccountIds.split(',');
    console.log('Resource properties: ' + JSON.stringify(event.ResourceProperties));
    console.log('Context is invoked with:' + JSON.stringify(context));
    console.log('State Machine ARN: ' + stateMachineArn);
    console.log('Image Pipeline ARN: ' + imagePipelineArn);
    console.log('Execution Name: ' + executionName);
    console.log('Key Id: ' + amiKmsId);
    console.log('Accounts: ' + accounts);
    await startExecution(stateMachineArn, executionName, imagePipelineArn);
  } catch (error) {
    if (error instanceof Error) {
      response.Reason = error.message;
    }
    response.Status = 'FAILED';
    response.Data = { Result: error };
    return response;
  }
  return response;
}

/**
 * Starts the execution of a state machine.
 *
 * @param {string} stateMachineArn - The ARN (Amazon Resource Name) of the state machine.
 * @param {string} executionName - The name for the execution.
 * @param {string} imagePipelineArn - The ARN of the image pipeline.
 *
 * @return {Promise<void>} - A Promise that resolves when the execution has been started.
 */
async function startExecution(stateMachineArn: string, executionName: string, imagePipelineArn: string): Promise<void> {
  const startExecutionCommand = new StartExecutionCommand({
    stateMachineArn: stateMachineArn,
    name: executionName,
    input: JSON.stringify({
      clientToken: executionName,
      imagePipelineArn: imagePipelineArn,
    }),
  });
  await sfnClient.send(startExecutionCommand);
}
