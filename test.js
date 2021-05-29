const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
var userInput = [];

/*let manager1 = new Manager("Bob", "12", "email", "165465456");
manager1.getRole();

console.log(manager1);
*/

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
  
     
       userInput.push(data);
       console.log("The user array " + JSON.stringify(userInput));
        if (data.menu === "Add Engineer" || data.menu === "Add Intern") {
        //  menuSelection(data.menu);
        } else {
         // writeToFile("./dist/index.html", userInput);
        }
        //Write user's input to README file
        // writeToFile("./README.md", data);
      });
  }
 
  
  // TODO: Create a function to initialize app
  function init() {
    promptUser();
  }
  
  // Function call to initialize app
  init();
  

