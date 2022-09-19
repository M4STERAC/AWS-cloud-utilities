let AWS = require('aws-sdk');
let message;

async function createNewLambda(functionName, sourceFiles) {

    //lock in the api
    var lambda = new AWS.Lambda({ apiVersion: '2015-03-31' });

    let params = {
        FunctionName: functionName,
        Code: { sourceFiles },
        Role: null,
    }

    lambda.createFunction(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
            message = 'Error - Failed to create lambda function';
            return message;
        } // an error occurred
        else {
            console.log(data);
            message = 'Success - Lambda function created';
            return message;
        } // successful response
    });
}

module.exports = {
    createNewLambda
}