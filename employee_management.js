//Task 1: Create an Employee Class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails() {
        return `${this.name} earns ${this.salary} with the position of ${this.position} in the ${this.department}`;
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