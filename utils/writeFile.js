const fileContent = require('./generateMarkdown');
const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('README.md', fileContent, err => {
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

module.exports = writeFile;