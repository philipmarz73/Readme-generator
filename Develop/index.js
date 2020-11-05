const inquirer = require('inquirer');
const generateMarkdown = require ("./utils/generateMarkdown.js")
const fs = require('fs');
// const path = require('path');
// array of questions for user
const questions = [
    
            {
                type: 'input',
                message: 'what is your name',
                name: 'title',
                
            }
        


];
console.log("hello World!");

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response)
        writeToFile("ReadMe.md", generateMarkdown(response))
    })
}

// function call to initialize program
init();
