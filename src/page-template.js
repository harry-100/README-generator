    // Generate HTML page 
    const generateReadme = (names, githubs) => {
        return `
        Name: This is my ${name}.
        GitHUb: And this is my ${github} account.
        `;   
    }

    module.exports = generateReadme;