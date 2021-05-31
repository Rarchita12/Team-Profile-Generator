const Engineer = require("../lib/Engineer");

test('creates a Engineer object', () => {
  const engineer = new Engineer('Tom', '121', 'tom@gmail.com', 'tommy12');

  expect(engineer.name).toBe('Tom');
  expect(engineer.id).toEqual('121');
  expect(engineer.email).toBe('tom@gmail.com');
  expect(engineer.github).toBe('tommy12');
});

test("gets Engineer's role", () => {
    const engineer = new Engineer('Tom', '121', 'tom@gmail.com', 'tommy12');

  
    expect(engineer.getRole()).toBe('Engineer');
  });

  test("gets Engineer's name", () => {
    const engineer = new Engineer('Tom', '121', 'tom@gmail.com', 'tommy12');

  
    expect(engineer.getName()).toBe('Tom');
  });

  test("gets Engineer's id", () => {
    const engineer = new Engineer('Tom', '121', 'tom@gmail.com', 'tommy12');

  
    expect(engineer.getId()).toBe('121');
  });

  test("gets Engineer's email", () => {
    const engineer = new Engineer('Tom', '121', 'tom@gmail.com', 'tommy12');

  
    expect(engineer.getEmail()).toBe('tom@gmail.com');
  });

  test("gets Engineer's github", () => {
    const engineer = new Engineer('Tom', '121', 'tom@gmail.com', 'tommy12');
expect(engineer.getGitHub()).toBe('tommy12');
  })