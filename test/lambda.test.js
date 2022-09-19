let lambda = require('../src/lambda');
let configFile = require('../');

//Create a test to check if the required fields of the lambda function are met
test('Create New Lambda', () => {
    lambda.createNewLambda(configFile);
    expect(message).toBe('Success - Lambda function created');
})