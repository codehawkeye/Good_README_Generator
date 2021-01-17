// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'Github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What is your progect title name?',

    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please write a short description of your project?',

    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],


    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i inquirer',

    },
    {
        type: 'input',
        name: 'Test',
        message: 'What command should be run to run the tests?',
        default: 'npm test',

    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What does the user need to know about using the repo?',

    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'What does the user need to know about contributing to the repo?',

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        // console.log(inquirerResponses);
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
}

// Function call to initialize app
init();
