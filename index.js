const inquirer = require('inquirer');
const fs = require('fs')

inquirer.prompt([{
    type: 'input',
    message: 'What is your Name?',
    name: 'name',
},
{
    type: 'input',
    message: 'What is your location?',
    name: 'location',
},
{
    type: 'input',
    message: 'Few lines as your biography',
    name: 'bio',
},
{
    type: 'input',
    message: 'Mention your LinkedIn URL',
    name: 'LinkedInURL',
},
{
    type: 'input',
    message: 'Mention your GitHub URL',
    name: 'GitHubURL',
},
])
.then((response) => {
    fs.appendFile('file1.html',
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <h1><u>Details of ${response.name}</u></h1>
    <h2><label for="name">What is your Name?</label></h2>
    <h3>${response.name}</h3><hr>
    <h2><label for="location">What is your location?</label></h2>
    <h3>${response.location}</h3><hr>
    <h2><label for="biography">Few lines as your biography</label></h2>
    <h3>${response.bio}</h3><hr>
    <h2><label for="LinkedIn">Mention your LinkedIn URL</label></h2>
    <h3>${response.LinkedInURL}</h3><hr>
    <h2><label for="GitHub">Mention your GitHub URL</label></h2>
    <h3>${response.GitHubURL}</h3><hr>   
    </body>
    </html>
    `
    ,(error,data) =>{
        if(error){
            console.log(error)
        }
        else{
            console.log("success")
        }
    })
}
);