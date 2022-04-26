const db = require('./connection')
const inquirer=require('inquirer')

let startApp;
function allDepts() {
    startApp=require('./db/index')
    db.query('SELECT * FROM emp_dept', function (err, results) {
        console.log(results);
        startApp();
    });
}
function allRoles(){
    startApp=require('./db/index')
    db.query('SELECT * FROM emp_role', function (err, results) {
        console.log(results);
        startApp();
    });
}

function allEmps(){
    startApp=require('./db/index')
    db.query('SELECT * FROM employee', function (err, results) {
        console.log(results);
        startApp();
    });
}

function addDept () {
    runPrompt = require('./db/index')
    inquirer.prompt ([
        {
            type: 'input',
            name: 'addDept',
            message: "What is the name of the department you would like to add?"

        }
    ]).then(response =>{
        db.query('INSERT INTO emp_department SET ?', {
            name: response.addDept
        })
        startApp();
    })
}
function addRole () {
    runPrompt = require('./db/index')
    db.query('SELECT * FROM emp_department', (err, res)=>{
        inquirer.prompt([
            {
                type: 'list',
                name: 'deptId',
                message: 'What department is your employee in?',
                choices: res.map(department=>department.name)
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
        ]).then(response=>{
            const selectedDept = res.find(department=>department.name === response.deptId)
            db.query('INSERT INTO emp_role SET ?', {
                salary: response.addSalary,
                title: response.addTitle,
                department_id: selectedDept.id
            })
            console.log ('Added new role')
            startApp();
        })
    })
}

function addEmp () {
    runPrompt = require('./db/index')
    db.query('SELECT * FROM emp_role', (err, res)=>{
        inquirer.prompt([
            {
                type: 'list',
                name: 'empId',
                message: 'What role is the role of your new employee?',
                choices: res.map(role=>role.title)
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
                choices: res.map(role=>role.manager_id)
            },

        ]).then(response=>{
            const selectedTitle = res.find(role=>role.title === response.empId)
            const selectedManager = res.find(role=>role.manager_id === response.empManager)
            db.query('INSERT INTO emp_role SET ?', {
                first_name: response.firstName,
                last_name: response.last_name,
                role_id: selectedTitle.id,
                manager_id: selectedManager.id
            })
            console.log ('Added new employee')
            startApp();
        })
    })
}

function updateEmp (){
    db.query ('Select = ? FROM employee')
}

function finish (){
    console.log("Completed")
    process.exit()
}

module.exports = {
    allDepts, allRoles, allEmps, addDept, addRole, addEmp, updateEmp, finish
    // allDepts : allDepts
}