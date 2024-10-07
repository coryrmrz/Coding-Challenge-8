//Task 1: Create an Employee Class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails() {
        return `${this.name} earns ${this.salary} with the position of ${this.position} in the ${this.department}.`;
    }
}

//Task 2: Create a Department Class
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
//Task 4: Handle Bonuses for Managers
calculateTotalSalaryWithBonus() {
    return this.employees.reduce((total, employee) => {
        return total + employee.salary + (employee.bonus ? employee.bonus:0);
    }, 0);
}
}

//Task 3: Create a Manager Class that Inherits from Employee
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position,department);
        this.bonus = bonus;
    }
    getDetails() {
        return `${this.name} receives a bonus of ${this.bonus}.`
    }
}

//Task 5: Create and Manage Departments and Employees
//Create departments
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

//Create Employees
const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Employee("Charlie", 120000, "Engineer Manager", "Engineering", 20000);
const diana = new Employee("Diana", 130000, "Marketing Manager", "Marketing", 25000);

//Add employees to departments
engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

//Calculate total salary for each department
console.log(`Total salary for Engineering $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing $${marketing.calculateTotalSalaryWithBonus()}`);