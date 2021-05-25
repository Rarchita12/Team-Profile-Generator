const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    //call parent constructor here:
    super(name, id, email);

    this.officeNum = officeNum;
  }

  getRole() {
    return "Manager";
  }
}
