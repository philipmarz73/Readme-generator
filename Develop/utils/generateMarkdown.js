// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${createIcon(data.license)}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Instructions](#instructions)
  * [License](#license)
  * [username](#username)
  * [Email](#email)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Description
    ${data.description}

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage} 

  ## Contribution
    ${data.contribution}

  ## Instructions
    ${data.instructions}

  ## License
   License will be based on user choice
   
  ## Username
    ${data.username}
   
  ## Email
    ${data.email}
    
  ## Test
    ${data.test}
  
  ## Questions
    ${data.questions} 
`;
}




























`;
}

module.exports = generateMarkdown;
