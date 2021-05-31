const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern.js");


function displayManager(teamManager){
return `<div class="column">
<div class="card">
<div class="cardTitle1">
  <h3>${teamManager.getName()}</h3>
  <h4>☕ ${teamManager.getRole()}</h4>
  </div>
  <div class="cardContent">
  <p>ID: ${teamManager.getId()}</p>
  <p>Email: <a href="mailto:${teamManager.getEmail()}">${teamManager.getEmail()}</a></p>
  <p>Office Number: ${teamManager.getOfficeNumber()}</p>
  </div>
</div>
</div>`
}

function displayEngineer(teamEngineer){
  return `<div class="column">
<div class="card">
<div class="cardTitle1">
  <h3>${teamEngineer.getName()}</h3>
  <h4>👓 ${teamEngineer.getRole()}</h4>
  </div>
  <div class="cardContent">
  <p>ID: ${teamEngineer.getId()}</p>
  <p>Email: <a href="mailto:${teamEngineer.getEmail()}">${teamEngineer.getEmail()}</a></p>
  <p>GitHub: <a href="https://github.com/${teamEngineer.getGitHub()}"> ${teamEngineer.getGitHub()}</a></p>
  </div>
</div>
</div>`

}

function displayIntern(teamIntern){
  return `<div class="column">
  <div class="card">
  <div class="cardTitle1">
    <h3>${teamIntern.getName()}</h3>
    <h4>👨🏼‍🎓 ${teamIntern.getRole()}</h4>
    </div>
    <div class="cardContent">
    <p>ID: ${teamIntern.getId()}</p>
    <p>Email: <a href="mailto:${teamIntern.getEmail()}">${teamIntern.getEmail()}</a></p>
    <p>School: ${teamIntern.getSchool()}</p>
    </div>
  </div>
  </div>`
}


function displayTeam(userInput) {
  var html = `<div class="row"> `;
for(var i =0; i<userInput.length; i++){
  
  
  if(userInput[i].getRole() === "Manager"){
   html+= displayManager(userInput[i]);
  }
  else if(userInput[i].getRole() === "Engineer"){
    html+= displayEngineer(userInput[i]);
  }
  else{
    html+=  displayIntern(userInput[i]);
  }
  
}
html+= `</div>`;
return `${html}`;

}

function generateHTML(userInput) {

  //console.log("length of array: " + length);
 
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Portfolio Demo</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="./style.css" />
    </head>
  
    <body>
      <header>
        <h1>My Team</h1>
      </header>
  
     ${displayTeam(userInput)}
      
     
    </body>
  </html>
  
  `;
}

module.exports = generateHTML;
