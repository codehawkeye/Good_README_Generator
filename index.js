// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your progect title name?',

    },
    {
        type: 'input',
        name: 'description',
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
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i inquirer',

    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run the tests?',
        default: 'npm test',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',

    },
];
const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">:${answers.title}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

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
