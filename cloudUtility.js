let { program } = require('commander');

program
    .command('createNewLambda')
    .description('Creates a new Lambda function in AWS')
    .alias('cnl')
    .option('-n, --name <name>', 'Name of the Lambda function to be created')
    .option('-s, --sourceFiles <sourceFiles>', 'List of source files to be uploaded to the Lambda function')
    .action((options) => {
        let functionName = options.name;
    })