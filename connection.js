const mysql = require('mysql2');
const inquirer = require ('inquirer');

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'rootroot',
    database: 'track_emp_db',
},
console.log('connected to the database')
);

module.exports =db;