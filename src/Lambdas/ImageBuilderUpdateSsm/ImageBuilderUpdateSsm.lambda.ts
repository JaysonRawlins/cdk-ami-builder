import { AddTagsToResourceCommand, PutParameterCommand, SSMClient } from '@aws-sdk/client-ssm';
import { Context } from 'aws-lambda';

const region = process.env.AWS_REGION;
const ssmClient = new SSMClient({ region: region });
const ssmParameterName: string = process.env.SSM_PATH || '';

export const handler = async (event: any, context: Context): Promise<void> => {
  console.info('Printing event:', event);
  console.info('Printing context:', context);
  await processSnsEvent(event);
  return;
};

async function processSnsEvent(event: any): Promise<void> {
  for (const record of event.Records) {
    const eventMessage = record.Sns.Message;

    // convert the event message to json
    const messageJson = JSON.parse(eventMessage);

    // obtain the image state
    const imageState = messageJson.state.status;

    // update the SSM parameter if the image state is available
    if (imageState === 'AVAILABLE') {
      console.info('Image is available');

      const recipeName = messageJson.name;

      for (const ami of messageJson.outputResources.amis) {
        // obtain ami id
        console.info('AMI ID:', ami.image);

        // update SSM parameter
        const putParameterCommand = new PutParameterCommand({
          Name: ssmParameterName,
          Description: 'Latest AMI ID',
          Value: ami.image,
          Type: 'String',
          Overwrite: true,
          Tier: 'Standard',
        });

        const response = await ssmClient.send(putParameterCommand);
        console.info('SSM Updated:', response);

        // add tags to the SSM parameter
        const addTagsToResourceCommand = new AddTagsToResourceCommand({
          ResourceType: 'Parameter',
          ResourceId: ssmParameterName,
          Tags: [
            {
              Key: 'Source',
              Value: 'EC2 Image Builder',
            },
            {
              Key: 'AMI_REGION',
              Value: ami.region,
            },
            {
              Key: 'AMI_ID',
              Value: ami.image,
            },
            {
              Key: 'AMI_NAME',
              Value: ami.name,
            },
            {
              Key: 'RECIPE_NAME',
              Value: recipeName,
            },
            {
              Key: 'SOURCE_PIPELINE_ARN',
              Value: messageJson.sourcePipelineArn,
            },
          ],
        });

        await ssmClient.send(addTagsToResourceCommand);
      }
    }
  }

  return;
}