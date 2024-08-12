const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown'); // Assuming generateMarkdown is in the same directory

// TODO: Include packages needed for this application
// Included above: inquirer for user prompts, fs for file system operations

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title: ',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter your project description: ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter your installation instructions: ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter your usage information: ',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter your contribution guidelines: ',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter your test instructions: ',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application: ',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address: ',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success! Your README.md file has been generated.");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();

