let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("empId").value;
    let salary = parseInt(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (name === "" || id === "" || dept === "" || isNaN(salary)) {
        alert("Fill all fields");
        return;
    }
    let emp = {
        name: name,
        id: id,
        salary: salary,
        department: dept
    };
    employees.push(emp);
    alert("Employee Added");
}

function displayEmployees() {
    let output = "";
    for (let i = 0; i < employees.length; i++) {
        output += employees[i].name + " | " +
                  employees[i].id + " | " +
                  employees[i].salary + " | " +
                  employees[i].department + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}

function filterSalary() {
    let output = "";

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].salary > 50000) {
            output += employees[i].name + " | " +
                      employees[i].salary + "<br>";
        }
    }
    document.getElementById("output").innerHTML = output;
}

function totalSalary() {
    let total = 0;

    for (let i = 0; i < employees.length; i++) {
        total += employees[i].salary;
    }
    document.getElementById("output").innerHTML = "Total Salary = " + total;
}

function averageSalary() {
    let total = 0;

    for (let i = 0; i < employees.length; i++) {
        total += employees[i].salary;
    }
    let avg = total / employees.length;
    document.getElementById("output").innerHTML = "Average Salary = " + avg;
}

function countDepartment() {
    let dept = prompt("Enter Department Name");
    let count = 0;

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department === dept) {
            count++;
        }
    }
    document.getElementById("output").innerHTML =
        "Employees in " + dept + " = " + count;
}