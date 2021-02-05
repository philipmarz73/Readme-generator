const inquirer = require('inquirer');
const generateMarkdown = require ("./utils/generateMarkdown.js");
const fs = require('fs');
// const path = require('path');
// array of questions for user
const questions = [
    
            {
                type: 'input',
                message: 'Please enter your Project Title',
                name: 'title',
                projectTitle: 'Project Title',
                
            },
            
            {
                type: 'input',
                message: 'Please enter your Project Description',
                name: 'description',
                description: 'Project Description',
            },
            
            {
                type: 'input',
                message: 'Please enter Installation Instructions',
                name: 'installation',
                installationInstructions: 'Installation Instructions',
            },

            {
                type: 'input',
                message: 'Please enter Usage Information',
                name: 'usage',
                usageInformation: 'Usage Information',
            
            },
        
            {
                type: 'input',
                message: 'Please enter Contribution Guidelines',
                name: 'contribution',
                contributionGuidelines: 'Contribution Guidelines',
            },
        
            {
                type: 'input',
                message: 'Please enter Test Instructions',
                name: 'instructions',
                testInstructions: 'Test Instructions',
            },

            {
                type: 'list',
                message: 'Please choose the applicable License(s)',
                name: 'license',
                choices: ["MIT", "APACHE2.0", "ISC", "NONE"],
    
            },

            {
                type: 'input',
                message: 'Please enter your GitHub Username',
                name: 'username',
                
            },

            {
                type: 'input',
                message: 'Please enter your Email Address',
                name: 'email',
                
            },

            {
                type: "input",
                name: "test",
                message: "Please enter Test Scenarios",
              },
              {
                type: "input",
                name: "questions",
                message: "please enter your Questions",
              },
            ];

// // function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(fileName, data);
// }

// function to initialize program
function init() {
    
    // inquirer.prompt(questions)
    // .then((response) => {
    //     console.log(response);
    //     writeToFile("ReadMe.md", generateMarkdown(response));
      
        
    const README = Date.now();
  inquirer.prompt(questions).then((response) => {
    fs.writeFile("README.md", generateMarkdown(response), "utf8", (err) => {
      if (err) throw err;
    });
  });
}



 


// function call to initialize program
init();
