// eslint-disable-next-line import/no-extraneous-dependencies
import { CdkCustomResourceIsCompleteResponse, CloudFormationCustomResourceEvent, Context } from 'aws-lambda';
import { getExecutionHistory, listExecutions } from './HelperFunctions/CheckStateMachineExecutions';

const STATUS_SUCCEEDED = 'SUCCEEDED';
const STATUS_FAILED = 'FAILED';
const region = process.env.AWS_REGION;


export const handler = async (
  event: CloudFormationCustomResourceEvent,
  context: Context,
): Promise<CdkCustomResourceIsCompleteResponse> => {

  const stateMachineArn = event.ResourceProperties.StateMachineArn;
  const imagePipelineArn = event.ResourceProperties.ImagePipelineArn;
  const executionName = event.RequestId;
  console.log('Context is invoked with:' + JSON.stringify(context));
  console.log('Lambda is invoked with:' + JSON.stringify(event));
  console.log('Resource properties: ' + JSON.stringify(event.ResourceProperties));
  console.log('State Machine ARN: ' + stateMachineArn);
  console.log('Image Pipeline ARN: ' + imagePipelineArn);
  console.log('REGION: ' + region);

  let response: CdkCustomResourceIsCompleteResponse = {
    IsComplete: true,
    Data: {
      AmiId: '',
    },
  };

  try {
    const executions = await listExecutions(stateMachineArn);
    const filteredExecutions = executions!.filter(execution => execution.name!.includes(executionName));
    const executionArnArray = filteredExecutions.map(execution => execution.executionArn);
    const executionArn = executionArnArray.length > 0 ? executionArnArray[0] as string : '';
    const debugImagePipeline = event.ResourceProperties.DebugImagePipeline;
    console.log('Execution ARN: ' + executionArn);
    /**
         * If there are no executions, then the state machine has not been started yet.
         * Only check for the execution status if there are executions.
         */
    if (!filteredExecutions.length || debugImagePipeline === 'true') {
      return response;
    }

    const executionStatus = filteredExecutions.map(execution => execution.status);

    if (executionStatus.includes(STATUS_SUCCEEDED)) {
      const amiId = await getExecutionHistory(executionArn);
      response.Data = {
        AmiId: amiId,
      };
    } else if (executionStatus.includes(STATUS_FAILED)) {
      throw new Error('Execution failed');
    } else {
      console.log('No succeeded or failed executions found yet.');
      response = {
        IsComplete: false,
      };
    }
  } catch (error) {
    console.log('Error: ' + error);
    throw error;
  }
  return response;
};


