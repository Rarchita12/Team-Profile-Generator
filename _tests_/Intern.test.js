const Intern = require("../lib/Intern");

test('creates a Intern object', () => {
  const intern = new Intern('Bill', '155', 'bill@gmail.com', 'University of Texas at Austin');

  expect(intern.name).toBe('Bill');
  expect(intern.id).toEqual('155');
  expect(intern.email).toBe('bill@gmail.com');
  expect(intern.school).toBe('University of Texas at Austin');
});

test("gets Intern's role", () => {
    const intern = new Intern('Bill', '155', 'bill@gmail.com', 'University of Texas at Austin');

  
    expect(intern.getRole()).toBe('Intern');
  });

  test("gets Intern's name", () => {
    const intern = new Intern('Bill', '155', 'bill@gmail.com', 'University of Texas at Austin');

  
    expect(intern.getName()).toBe('Bill');
  });

  test("gets Intern's id", () => {
    const intern = new Intern('Bill', '155', 'bill@gmail.com', 'University of Texas at Austin');

  
    expect(intern.getId()).toBe('155');
  });

  test("gets Intern's email", () => {
    const intern = new Intern('Bill', '155', 'bill@gmail.com', 'University of Texas at Austin');

  
    expect(intern.getEmail()).toBe('bill@gmail.com');
  });

  test("gets Intern's school", () => {
    const intern = new Intern('Bill', '155', 'bill@gmail.com', 'University of Texas at Austin');
expect(intern.getSchool()).toBe('University of Texas at Austin');
  })