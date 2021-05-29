// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatesite = require("./src/generate-site");

var userInput = [];

function menuSelection(menuChoice) {
  if (menuChoice === "Add Engineer") {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the engineer's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the engineer's id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the engineer's email?",
        },
        {
          type: "input",
          name: "github",
          message: "What is the engineer's GitHub username?",
        },
        {
          type: "list",
          name: "menu",
          message: "Please select and option from the menu below:",
          choices: ["Add Engineer", "Add Intern", "Finished Building Team"],
        },
      ])
      .then(function (data) {
        //console.log(data);
        // data["type"] = "Engineer";
        let engineer1 = new Engineer(
          data.name,
          data.id,
          data.email,
          data.github
        );
      //  engineer1["type"] = engineer1.getRole();
        userInput.push(engineer1);
        // userInput.push(data);
        console.log("This is user array: " + JSON.stringify(userInput));

        menuSelection(data.menu);

        //Write user's input to README file
        // writeToFile("./README.md", data);
      });
  } else if (menuChoice === "Add Intern") {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the intern's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the intern's id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the intern's email?",
        },
        {
          type: "input",
          name: "school",
          message: "Where did the intern go to school?",
        },
        {
          type: "list",
          name: "menu",
          message: "Please select and option from the menu below:",
          choices: ["Add Engineer", "Add Intern", "Finished Building Team"],
        },
      ])
      .then(function (data) {
        // console.log(data);
        //data["type"] = "Intern";
        let intern1 = new Intern(data.name, data.id, data.email, data.school);
        //intern1["type"] = intern1.getRole();
        userInput.push(intern1);
        //userInput.push(data);
        console.log("This is user array: " + JSON.stringify(userInput));

        menuSelection(data.menu);

        //Write user's input to README file
        // writeToFile("./README.md", data);
      });
  } else {
    writeToFile("dist/index.html", userInput);
  }
}

//Function to Promp the User with Questions
function promptUser() {
  //promt User Questions
  inquirer
    .prompt([
      {
        type: "input",
        name: 'name',
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: 'id',
        message: "What is the manager's id?",
      },
      {
        type: "input",
        name: 'email',
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: 'officeNum',
        message: "What is the manager's office number?",
      },
      {
        type: "list",
        name: 'menu',
        message: "Please select and option from the menu below:",
        choices: ["Add Engineer", "Add Intern", "Finished Building Team"],
      },
    ])
    .then(function (data) {
      console.log(data);

      let manager1 = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNum
      );
     // manager1['type'] = manager1.getRole();
      console.log("Manager1" + JSON.stringify(manager1));
      userInput.push(manager1);
      //console.log("This is user array: " + userInput[0].getName());
      // console.log("This is user array: " + JSON.stringify(userInput));
      
    // userInput.push(data);
    // console.log("The user array " + userInput);
      if (data.menu === "Add Engineer" || data.menu === "Add Intern") {
        menuSelection(data.menu);
      } else {
        writeToFile("./dist/index.html", userInput);
      }
      //Write user's input to README file
      // writeToFile("./README.md", data);
    });
}
// TODO: Create a function to write README file
function writeToFile(fileName, userInput) {
  //write to README file and call the generateMarkdown function
  console.log("Inside write: " + userInput);
  // userInput = JSON.stringify(userInput);
  fs.writeFile(
    `` + fileName,
    generatesite(userInput),
    function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("Generating HTML...");
    }
  );
}

// TODO: Create a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();
