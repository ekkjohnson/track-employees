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




module.exports = {
    allDepts
    // allDepts : allDepts
}