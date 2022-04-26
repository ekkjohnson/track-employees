const mysql = require('mysql2');
const inquirer = require ('inquirer');

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
},
console.log('connected to the database')
);

module.exports =db;