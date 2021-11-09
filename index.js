// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input", 
        name:"introduction",
        message:"What is the Title of your project"
    },
    {
        type:"input", 
        name:"description",
        message:"Enter your description of the project"
    },
    {
        type:"input", 
        name:"install_instruction",
        message:"What are your installation instructions for the project"
    },
    {
        type:"input", 
        name:"usage_information",
        message:"What is the usage information"
    },
    {
        type:"input", 
        name:"contributing_guidelines",
        message:"What are the contributing guidelines"
    },
    {
        type:"input", 
        name:"test_instructions",
        message:"Enter in the test instructions"
    },
    {
        type:"list", 
        name:"license",
        message:"Choose a license",
        choices:["mit","apache","gpl","no license"]
    },
    {
        type:"input", 
        name:"username",
        message:"Enter Github username"
    },
    {
        type:"input", 
        name:"email",
        message:"Enter your email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => {
        if(err){
            return console.log(err)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function(answers) {
            writeToFile('README.md', generateMarkdown(answers))
            //console.log(answers);
        })
        .catch()
        }

// Function call to initialize app
init();
