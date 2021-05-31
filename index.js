//packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatesite = require("./src/generate-site");
//array to store objects based on user's input
var userInput = [];

//display menu selection (engineer, intern, finish building team) after manager prompts
function menuSelection(menuChoice) {
  //prompt Engineer questions
  if (menuChoice === "Add Engineer") {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the engineer's name?",
          validate: function (input) {
            const namePass = input.match(/^$/);
            if (namePass) {
              return "Please enter a name!";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the engineer's id?",
          validate: function (input) {
            const idPass = input.match(/^$/);
            if (idPass) {
              return "Please enter an id!";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the engineer's email?",
          validate: function (input) {
            const emailPass = input.match(
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            );
            if (emailPass) {
              return true;
            }
            return "Please enter a valid email address!";
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is the engineer's GitHub username?",
          validate: function (input) {
            const idPass = input.match(/^$/);
            if (idPass) {
              return "Please enter a Github username!";
            }
            return true;
          },
        },
        {
          type: "list",
          name: "menu",
          message: "Please select and option from the menu below:",
          choices: ["Add Engineer", "Add Intern", "Finished Building Team"],
        },
      ])
      .then(function (data) {
        //create engineer object and save engineer object to userInput array
        let engineer1 = new Engineer(
          data.name,
          data.id,
          data.email,
          data.github
        );
        userInput.push(engineer1);
        menuSelection(data.menu);
      });
  }
  //prompt Intern questions
  else if (menuChoice === "Add Intern") {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the intern's name?",
          validate: function (input) {
            const namePass = input.match(/^$/);
            if (namePass) {
              return "Please enter a name!";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the intern's id?",
          validate: function (input) {
            const idPass = input.match(/^$/);
            if (idPass) {
              return "Please enter an id!";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the intern's email?",
          validate: function (input) {
            const emailPass = input.match(
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            );
            if (emailPass) {
              return true;
            }
            return "Please enter a valid email address!";
          },
        },
        {
          type: "input",
          name: "school",
          message: "Where did the intern go to school?",
          validate: function (input) {
            const idPass = input.match(/^$/);
            if (idPass) {
              return "Please enter a school!";
            }
            return true;
          },
        },
        {
          type: "list",
          name: "menu",
          message: "Please select and option from the menu below:",
          choices: ["Add Engineer", "Add Intern", "Finished Building Team"],
        },
      ])
      .then(function (data) {
        //create intern object and save intern object to userInput array
        let intern1 = new Intern(data.name, data.id, data.email, data.school);
        userInput.push(intern1);
        menuSelection(data.menu);
      });
  } else {
    //finish buillding team option, create html
    writeToFile("dist/index.html", userInput);
  }
}

//Function to Promp the User with Questions
function promptUser() {
  //promt Manager questions
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate: function (input) {
          const namePass = input.match(/^$/);
          if (namePass) {
            return "Please enter a name!";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
        validate: function (input) {
          const idPass = input.match(/^$/);
          if (idPass) {
            return "Please enter an id!";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
        validate: function (input) {
          const emailPass = input.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
          );
          if (emailPass) {
            return true;
          }
          return "Please enter a valid email address!";
        },
      },
      {
        type: "input",
        name: "officeNum",
        message: "What is the manager's office number?",
        validate: function (input) {
          const numberPass = input.match(/^[1-9]\d*$/);
          if (numberPass) {
            return true;
          }
          return "Please enter a number!";
        },
      },
      {
        type: "list",
        name: "menu",
        message: "Please select and option from the menu below:",
        choices: ["Add Engineer", "Add Intern", "Finished Building Team"],
      },
    ])
    .then(function (data) {
      //create manager object and save manager object to userInput array
      let manager1 = new Manager(
        data.name,
        data.id,
        data.email,
        parseInt(data.officeNum)
      );
      userInput.push(manager1);
      //call menu selection
      if (data.menu === "Add Engineer" || data.menu === "Add Intern") {
        menuSelection(data.menu);
      } else {
        writeToFile("./dist/index.html", userInput);
      }
    });
}
//write to html file
function writeToFile(fileName, userInput) {
  fs.writeFile(`` + fileName, generatesite(userInput), function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("Generating HTML...");
  });
}

//initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();
