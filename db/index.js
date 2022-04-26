// const mysql = require('mysql2');
const inquirer = require('inquirer');
const { start } = require('repl');
const db = require('../connection');
require('dotenv').config();
// const queryFunctions = require('./queryFunctions')
const { allDepts, allRoles, allEmps, addDept, addEmp, updateEmp, finish } = require('../queryFunction')
db.connect(function(err){
    if (err) throw err
    startApp()
})
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
        switch (answer.opt) {
            case opt[0]:
                allDepts();
                break;
            case opt[1]:
                allRoles();
                break;
            case opt[2]:
                allEmps();
                break;   
            case opt[3]:
                addDept();
                break;
            case opt[4]:
                addRole();
                break;
            case opt[5]:
                addEmp();
                break;
                case opt[6]:
                updateEmp();
                break;
                case opt[7]:
                finish();
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


