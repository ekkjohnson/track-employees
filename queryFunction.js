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







module.exports = {
    allDepts
    // allDepts : allDepts
}