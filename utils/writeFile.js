const fileContent = require('./generateMarkdown');
const fs = require('fs');

const writeFile = (fileName, fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, fileContent, err => {
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