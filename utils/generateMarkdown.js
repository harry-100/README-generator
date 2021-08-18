// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return `
      ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
      `;
      break;
    case 'ISC':
      return `
      https://img.shields.io/badge/License-ISC-blue.svg
      ` ;
      break;
    case 'Mozilla':
      return `
      https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg
      `;
      break;
    case 'Creative Commons':
      return `
      https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg
      `;
      break;

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
function licenseLink(license){
  switch(license) {
    case 'MIT':
      return `
      https://opensource.org/licenses/MIT
      `;
      break;
    case 'ISC':
      return `
      https://opensource.org/licenses/ISC
      ` ;
      break;
    case 'Mozilla':
      return `
      https://opensource.org/licenses/MPL-2.0
      `;
      break;
    case 'Creative Commons':
      return `
      http://creativecommons.org/publicdomain/zero/1.0/
      `;
      break;

  }
}
// Create a function that returns the license heading in Table of Content
function tableOfContentsLicense(license){
  if(!license) {
    return '';
  }
  return `
  * [License](#License)
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return '';
  }
  return `
  ## License
  This application is covered under this [${license}](${licenseLink(license)})
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license)
  return `
# ${data.projectTitle}
${badge}
## Description

${data.projectDesc}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
${tableOfContentsLicense(data.license)}
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}


## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If need more information, please checkout my [github account](https://github.com/${data.github}). You can also reach me via [email](mailto:${data.email}?subject=${data.projectTitle}).
`;
}

module.exports = generateMarkdown;
