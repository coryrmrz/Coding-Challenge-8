//Task 1: Create an Employee Class
class Employee { //create employee class
    constructor(name, salary, position, department) { //constructor with name, salary, position, and department parameters
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails() {
        return `${this.name} earns ${this.salary} with the position of ${this.position} in the ${this.department}.`;
    } //return name, salary, position, and department parameters
}

//Task 2: Create a Department Class
class Department { //craete department class
    constructor(name) { // constructor with name parameter
        this.name = name;
        this.employees = []; //objects added to empty array of employees
    }
    addEmployee(employee) {
        this.employees.push(employee); //push employees into empty array
    }
    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0); //return total salary using reduce
    }
//Task 4: Handle Bonuses for Managers
calculateTotalSalaryWithBonus() {
    return this.employees.reduce((total, employee) => { // return total salary with bonuses using reduce
        return total + employee.salary + (employee.bonus ? employee.bonus:0);
    }, 0); //return bonus if there is any
}
}

//Task 3: Create a Manager Class that Inherits from Employee
class Manager extends Employee { //Manager class extended from Employee class
    constructor(name, salary, position, department, bonus) { //constructor with name, salary, position, department, and bonus paarmeters
        super(name, salary, position,department); //refer to Employee class to find bonus
        this.bonus = bonus;
    }
    getDetails() {
        return `${this.name} receives a bonus of ${this.bonus}.`
    } //return bonus of employee
}

//Task 5: Create and Manage Departments and Employees
//Create departments
const engineering = new Department("Engineering"); //engineering department
const marketing = new Department("Marketing"); //marketing department

//Create Employees
const alice = new Employee("Alice", 80000, "Developer", "Engineering"); //employee alice
const bob = new Employee("Bob", 75000, "Designer", "Marketing"); //employee bob
const charlie = new Employee("Charlie", 120000, "Engineer Manager", "Engineering", 20000); //employee charlie
const diana = new Employee("Diana", 130000, "Marketing Manager", "Marketing", 25000); //employee diana

//Add employees to departments
engineering.addEmployee(alice); //assign alice to engineering department
engineering.addEmployee(charlie); //assign charlie to engineering department
marketing.addEmployee(bob); //assign bob to marketing department
marketing.addEmployee(diana); //assign diana to marketing department

//Calculate total salary for each department
console.log(`Total salary for Engineering $${engineering.getDepartmentSalary()}`); //output display total salary for engineering
console.log(`Total salary with bonuses for Engineering $${engineering.calculateTotalSalaryWithBonus()}`); //output display total salary for engineering with bonuses
console.log(`Total salary for Marketing $${marketing.getDepartmentSalary()}`); //output display total salary for marketing
console.log(`Total salary with bonuses for Marketing $${marketing.calculateTotalSalaryWithBonus()}`); //output display total salary for marketing with bonuses