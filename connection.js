const mysql = require('mysql2');
const inquirer = require ('inquirer');

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME
},
console.log('connected to the database')
);

module.exports =db;