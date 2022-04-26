// const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();
// const queryFunctions = require('./queryFunctions')
const { allDepts, allRoles, allEmps, addDept, addEmp, updateEmp, finish } = require('../queryFunction')
// Connect to database
// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         // MySQL username,
//         user: 'root',
//         password: 'rootroot',
//         database: 'track_emp_db'
//     },
//     console.log(`Connected to the database.`)
// );
const opt = ["View All Departments", "View All Roles", "View All Employees", "Add New Department", "Add New Role", "Add New Employee", "Update Employee Role", "Finish"];
function startApp() {
    inquirer.prompt([
        {
            type: "list",
            name: "option menu",
            message: "What option would you like to select?",
            choices: opt
        }
    ])
    .then ((answer) => {
        console.log(answer);
        switch (answer.options) {
            case options[0]:
                allDepts();
                break;
            case options[1]:
                allRoles();
                break;
            case options[2]:
                allEmps();
                break;   
            case options[3]:
                addDept();
                break;
            case options[4]:
                addRole();
                break;
            case options[5]:
                addEmp();
                break;
                case options[6]:
                addEmp();
                break;
                case options[7]:
                addEmp();
                break;
            

        }
    }) 
}

module.exports=startApp;
startApp();

// function allDepts() {
//     db.query('SELECT * FROM department', function (err, results) {
//         console.log(results);
//         startApp();
//     });
// }


