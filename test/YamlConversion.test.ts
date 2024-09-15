import * as yaml from 'js-yaml';
import { IComponentProps } from '../src';

const componentsObject: IComponentProps[] = [
  {
    name: 'TestComponent',
    description: 'Test Component',
    componentVersion: '1.0.0',
    parameters: {
      MyInputParameter: {
        type: 'string',
        default: 'It\'s me!',
        description: 'Test Parameter',
      },
    },
    componentDocument: {
      name: 'MyComponentDocument',
      description: 'This is an example component document',
      schemaVersion: '1.0',
      phases: [{
        name: 'build',
        steps: [
          {
            name: 'InstallUpdates',
            action: 'UpdateOS',
          },
        ],
      }, {
        name: 'validate',
        steps: [
          {
            name: 'HelloWorldStep',
            action: 'ExecuteBash',
            inputs: {
              commands: [
                'echo "Hello World! Validate."',
              ],
            },
          },
        ],
      }, {
        name: 'test',
        steps: [
          {
            name: 'HelloWorldStep',
            action: 'ExecuteBash',
            inputs: {
              commands: [
                'echo "Hello World! Test."',
              ],
            },
          },
        ],

      }],
    },
  },
];

/***
 * This test is to validate that the yaml conversion works as expected.
 * https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-component-parameters.html
 */
test('YamlConversionTest', () => {
  const createObject = yaml.dump(componentsObject[0].componentDocument);
  console.log(createObject);
  expect(createObject).toBe(`name: MyComponentDocument
description: This is an example component document
schemaVersion: '1.0'
phases:
  - name: build
    steps:
      - name: InstallUpdates
        action: UpdateOS
  - name: validate
    steps:
      - name: HelloWorldStep
        action: ExecuteBash
        inputs:
          commands:
            - echo "Hello World! Validate."
  - name: test
    steps:
      - name: HelloWorldStep
        action: ExecuteBash
        inputs:
          commands:
            - echo "Hello World! Test."
`);
});