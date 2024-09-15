import { GetExecutionHistoryCommand, HistoryEventType, ListExecutionsCommand, SFNClient } from '@aws-sdk/client-sfn';

const sfnClient = new SFNClient({ region: 'us-east-2' });

/**
 * Fetches a list of executions for a given state machine.
 *
 * @param {string} stateMachineArn - The ARN of the state machine.
 * @return {Promise<Array>} - A promise that resolves to an array of execution objects.
 * @throws {Error} - If an error occurs while fetching the list of executions.
 * @example
 * const _stateMachineArn = 'arn:aws:states:{{Region}}:{{AccountID}}:stateMachine:MyStateMachine-oiye9p0di';
 * const _executionName = '3db0f8ae-fab8-4c77-bb61-3f3b48ab39e1';
 * listExecutions(_stateMachineArn).then(executions => {
 *   const filteredExecutions = executions!.filter(execution => execution.name!.includes(_executionName + '-'));
 *   console.log(filteredExecutions);
 * }).catch(error => {
 *   console.log(error);
 * });
 */
export const listExecutions = async (stateMachineArn: string) => {
  const command = new ListExecutionsCommand({ stateMachineArn: stateMachineArn });
  try {
    const response = await sfnClient.send(command);
    return response.executions;
  } catch (err) {
    return [];
  }
};


/**
 * Retrieves the execution history of a specific execution using the given execution ARN.
 *
 * @param {string} executionArn - The ARN of the execution.
 *
 * @returns {Promise<string>} - The ID of the AMI associated with the execution if it succeeded, otherwise an empty string.
 */
export async function getExecutionHistory(executionArn: string): Promise<string> {
  const params = {
    executionArn: executionArn,
    reverseOrder: true,
  };

  const command = new GetExecutionHistoryCommand(params);
  const history = await sfnClient.send(command);

  for (const event of history.events!) {
    if (event.type === HistoryEventType.ExecutionSucceeded) {
      let outputJson = JSON.parse(event.executionSucceededEventDetails!.output || '{}');
      if (outputJson.ImageBuildInformation.Image.OutputResources.Amis.length > 0) {
        let amiId = outputJson.ImageBuildInformation.Image.OutputResources.Amis[0].Image;
        return amiId;
      } else {
        return '';
      }
    }
  }
  return '';
}


