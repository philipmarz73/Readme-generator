# README Generator

As one aspires to be a Professional Developer, it becomes increasingly important to hone one's collaborative skills with other Coders, as teamwork is the reality in the Development world. One wants to encourage others to collaborate to accomplish a successful Project, or to improve one's own code to make it more useful, or to help keep it up to date. Writing a high-quality README file as part of one's Project Repository is vital for attracting others to do so by signaling the Project's purpose, and how it works in a thorough, clear, and concise manner.


## Project Motivation

One way to quickly and easily create a README file is by using a Command Line application to generate one, which can free up time and effort to apply to the 'nuts and bolts' of the Project itself. Our task for this Project was to create and practice with such a Command Line application, one that dynamically generates a professional README.md file using the Inquirer package. Using a Good README Guide as a reference, we would use this application to create a reusable template that would outline what a high-quality professional README should contain.


## Requirements

The particular Command Line application we were instructed to use comes from the Inquirer package and is invoked by the following command: 'node index.js'. The application was to be formatted to produce a Project Title, and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions. The User is then instructed to add the appropriate information using the CLI to each of these sections, to demonstrate that it is working properly. The license section adds a badge for the license that is chosen, as well as input text. Entering one's GitHub username adds it to the Questions section of the README, along with a link to one's GitHub profile. The links in the Table of Contents should take one to the corresponding section of the README. A link to a walkthrough video that demonstrates this functionality is also required.


## Installation

To create this application, one had to first install Inquirer. This was 'required' in the controller file for this application, the 'index.js'. Also required were the 'fs' module and the 'generateMarkdown.js' file. This latter was built to create the function that would generate the README template, Table of Contents, Section headings, license icon, etc. The appropriate URL's were added to the 'package.json' file providing links to the project's homepage, repository, and bug fix section.


## Acknowledgements

I would like to thank my Instructor, Jonathan Watson, the TA's for this section of the Georgia Tech Full Stack Bootcamp, my steadfast Tutor Kris Renaldi, and my classmate Steven Mccarther for all their invaluable help in creating this project.


## License

&copy MIT
