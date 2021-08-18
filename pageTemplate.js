module.exports = (userResponse) => {
    const {name, github} = userResponse;
    return `
    Name: This is my ${name}.
    GitHUb: And this is my ${github} account. 
    `;      
}