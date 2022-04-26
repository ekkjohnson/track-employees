const db = require('./connection')
const inquirer = require('inquirer')
const logo = require("asciiart-logo");
const logoText = logo({ name: "Employee Manager" }).render();

console.log(logoText);

let startApp;
function allDepts() {
    startApp = require('./db/index')
   db.query('SELECT * FROM emp_dept', function (err, data) {
        console.table(data);
        startApp();
        // return data
       
    });
   
}
function allRoles() {
    startApp = require('./db/index')
    db.query('SELECT * FROM emp_role', function (err, data) {
        // console.log(data);
        console.table(data);
        startApp();
    });
}

function allEmps() {
    startApp = require('./db/index')
    db.query('SELECT * FROM employees', function (err, data) {
        console.table(data);
        startApp();
    });
}

function addDept() {
    startApp = require('./db/index')
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDept',
            message: "What is the name of the department you would like to add?"

        }
    ]).then(response => {
        db.query('INSERT INTO emp_department SET ?', {
            name: response.addDept
        })
        startApp();
    })
}
function addRole() {
    startApp = require('./db/index')
    db.query('SELECT * FROM emp_department', (err, res) => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'deptId',
                message: 'What department is your employee in?',
                choices: res.map(department => department.name)
            },
            {
                type: 'input',
                name: 'addSalary',
                message: "What is your employees salary?",
            },
            {
                type: 'input',
                name: "addTitle",
                message: "What is your employees job title?"
            }
        ]).then(response => {
            const selectedDept = res.find(department => department.name === response.deptId)
            db.query('INSERT INTO emp_role SET ?', {
                salary: response.addSalary,
                title: response.addTitle,
                department_id: selectedDept.id
            })
            console.table('Added new role')
            startApp();
        })
    })
}

function addEmp() {
    startApp = require('./db/index')
    db.query('SELECT * FROM emp_role', (err, res) => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'empId',
                message: 'What role is the role of your new employee?',
                choices: res.map(role => role.title)
            },
            {
                type: 'input',
                name: 'firstName',
                message: "What is your employees first name?",
            },
            {
                type: 'input',
                name: "lastName",
                message: "What is your employees last name?"
            },
            {
                type: 'choices',
                name: "empManager",
                message: "Who is your employees manager?",
                choices: res.map(role=>role.first_name + " " + role.last_name).slice(0,2)
            },

        ]).then(response => {
            const selectedTitle = res.find(role => role.title === response.empId)
            const selectedManager = res.find(role => role.manager_id === response.empManager)
            db.query('INSERT INTO emp_role SET ?', {
                first_name: response.firstName,
                last_name: response.lastName,
                role_id: selectedTitle.id,
                manager_id: selectedManager.manager_id
            })
            console.table('Added new employee')
            startApp();
        })
    })
}

function updateEmp() {
    startApp = require('./db/index')
    db.query('Select * FROM employee', (err, empResult) => {
        if (err) throw err;
        const updateEmp = []
        empResult.forEach(({ first_name, last_name, id }) => {
            updateEmpInfo.push({
                name: first_name + " " + last_name,
                value: id
            })
        })
    })
}

function finish() {
    console.table("Completed")
    process.exit()
}

module.exports = {
    allDepts, allRoles, allEmps, addDept, addRole, addEmp, updateEmp, finish
    // allDepts : allDepts
}