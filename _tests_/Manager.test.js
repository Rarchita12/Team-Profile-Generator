const Employee = require("../lib/Employee");

test('creates an Employee object', () => {
  const employee = new Employee('Bob', 123, 'bob@gmail.com');

  expect(employee.name).toBe('Bob');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('bob@gmail.com');
  
});

test("gets employee's role", () => {
    const employee = new Employee('Bob', '123', 'bob@gmail.com');
  
    expect(employee.getRole()).toBe('Employee');
  });

  test("gets employee's name", () => {
    const employee = new Employee('Bob', '123', 'bob@gmail.com');
  
    expect(employee.getName()).toBe('Bob');
  });

  test("gets employee's id", () => {
    const employee = new Employee('Bob', '123', 'bob@gmail.com');
  
    expect(employee.getId()).toBe('123');
  });

  test("gets employee's email", () => {
    const employee = new Employee('Bob', '123', 'bob@gmail.com');
  
    expect(employee.getEmail()).toBe('bob@gmail.com');
  });