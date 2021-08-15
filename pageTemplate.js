module.exports = (userResponse) => {
    return `
    Name: This is my ${userResponse.name}.
    GitHUb: And this is my ${userResponse.github} account. 
    `;      
}