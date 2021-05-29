
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

  /*
  test('checks if enemy is alive or not', () => {
    const enemy = new Enemy('goblin', 'sword');
  
    expect(enemy.isAlive()).toBeTruthy();
  
    enemy.health = 0;
  
    expect(enemy.isAlive()).toBeFalsy();
  });
  
  test("gets enemy's attack value", () => {
    const enemy = new Enemy('goblin', 'sword');
    enemy.strength = 10;
  
    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
  });
  
  test("subtracts from enemy's health", () => {
    const enemy = new Enemy('goblin', 'sword');
    const oldHealth = enemy.health;
  
    enemy.reduceHealth(5);
  
    expect(enemy.health).toBe(oldHealth - 5);
  
    enemy.reduceHealth(99999);
  
    expect(enemy.health).toBe(0);
  });

  test('gets a description of the enemy', () => {
    const enemy = new Enemy('goblin', 'sword');
  
    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
  });
  */