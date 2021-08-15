// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./pageTemplate');


const userInfo = () => {
        return inquirer.prompt([
            {
              type: 'input',
              name: 'name',
              message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your github username? (Required)',
            },
        ]);     
    };
    
    // console.log('data input by user=', userInfo());
    userInfo()
    .then(userResponse => {
        const pageHTML = generateReadme(userResponse); 
        console.log(pageHTML);
        writeFile(pageHTML);
    })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
        
    

    
    const writeFile = fileContent => {
        return new Promise((resolve, reject) => {
            fs.writeFile('index.html', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'File created'
            });
        });
    });
    };





















// const readmeTemplate = require(',/src/readme-template')
// TODO: Create an array of questions for user input
// const questions = [];
// const userInfo = () => {
//     return inquirer.prompt([
//         {
//           type: 'input',
//           name: 'name',
//           message: 'What is your name? (Required)',
//           validate: nameInput => {
//               if(nameInput) {
//                   return true;
//               }
//               else {
//                   console.log('Please enter your name');
//                   return false;
//               }
//           }
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email id? (Required)',
//             validate: emailInput => {
//                 if(emailInput) {
//                     return true;
//                 }
//                 else {
//                     console.log('Please enter your email id.');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'github',
//             message: 'What is your github username? (Required)',
//             validate: githubInput => {
//                 if (githubInput){
//                     return true;
//                 }
//                 else {
//                     console.log("Please enter your github username.");
//                     return false;
//                 }
//             }
//         },
//     ]);
      
// };
// userInfo().then(answers => console.log(answers));

// const projectInfo = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'projectTitle',
//             message: 'What is the title of your project? (Required)',
//             validate: projectNameInput => {
//                 if(projectNameInput){
//                     return true;
//                 }
//                 else {
//                     console.log('Please enter the name of your project.');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'projectDesc',
//             message: 'Please input description of your input. (Required)',
//             validate: projectDescInput => {
//                 if(projectDescInput){
//                     return true;
//                 }
//                 else {
//                     console.log("Please enter a description of your project.");
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'installation',
//             message: 'What are the steps required to install your project?'
//         },
//         {
//             type: 'input',
//             name: 'contributing',
//             message: 'Please provide details about how others can contribute to this repo'
//         },
//         {
//             type: 'input',
//             name: 'usage',
//             message: 'Please provide instructions on how to use this app.'
//         },
//         {
//             type: 'input',
//             name: 'tests',
//             message: 'Please provide details about tests to run for your application.'
//         },
//         {
//             type: 'list',
//             name: 'license',
//             message: 'Please a choose a license type for this repo.',
//             choices: ['MIT', 'ISC', 'Creative Commons', 'Mozilla Public']
//         }


//     ])   
// }


// // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// // function init() {}

// // Function call to initialize app
// // init();

// const generateReadme = (userInfo, projectInfo) => {
//     return 
//     `
// # Your Project Title
//     ${projectTitle}
// ## Description
// ${projectInfo.desc}
// ## Table of Contents

// * [Installation](#Installation)
// * [Usage](#Usage)
// * [License](#License)
// * [Contributing](#Contributing)
// * [Tests](#Tests)
// * [Questions](#Questions)

// ## Installation
// ${projectInfo.installation}

// ## Usage
// this is how use this application.

// ## License
// This application is covered under this {license}. 

// ## Contributing
// ${projectInfo.contributing}

// ## Tests
// ${projectInfo.tests}

// ## Questions

// For more questions about this project, please visit my repo 
// //     `
// // };

// projectInfo().then(answers)
// .then()
