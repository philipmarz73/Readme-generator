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
  




























`;
}

module.exports = generateMarkdown;
