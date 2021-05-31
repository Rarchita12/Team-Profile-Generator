const Manager = require("../lib/Manager");

test('creates a Manager object', () => {
  const manager = new Manager('Joe', '111', 'joe@gmail.com', 7894568969);
  
  expect(manager.name).toBe('Joe');
  expect(manager.id).toBe('111');
  expect(manager.email).toBe('joe@gmail.com');
  expect(manager.officeNum).toBe(7894568969);
  
});

test("gets manager's role", () => {
    const manager = new Manager('Joe', '111', 'joe@gmail.com', 7894568969);
  
    expect(manager.getRole()).toBe('Manager');
  });

  test("gets manager's name", () => {
    const manager = new Manager('Joe', '111', 'joe@gmail.com', 7894568969);
  
    expect(manager.getName()).toBe('Joe');
  });

  test("gets manager's id", () => {
    const manager = new Manager('Joe', '111', 'joe@gmail.com', 7894568969);
  
    expect(manager.getId()).toBe('111');
  });

  test("gets manager's email", () => {
    const manager = new Manager('Joe', '111', 'joe@gmail.com', 7894568969);
  
    expect(manager.getEmail()).toBe('joe@gmail.com');
  });

  test("gets manager's office number", () =>{
    const manager = new Manager('Joe', '111', 'joe@gmail.com', 7894568969);
    expect(manager.getOfficeNumber()).toBe(7894568969);
  });