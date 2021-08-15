const generateReadme = (userInfo, projectInfo) => {
    return 
    `
# Your Project Title
    ${projectTitle}
## Description
${projectInfo.desc}
## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${projectInfo.installation}

## Usage
this is how use this application.

## License
This application is covered under this {license}. 

## Contributing
${projectInfo.contributing}

## Tests
${projectInfo.tests}

## Questions

For more questions about this project, please visit my repo 
    `
};

console.log(generateReadme(userInfo, projectInfo));