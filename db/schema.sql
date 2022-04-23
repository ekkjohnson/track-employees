CREATE DATABASE track_emp_db;
USE track_emp_db;

CREATE TABLE department(
    id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VAHCHAR(30) NOT NULL
);

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    dept_id INT NOT NULL,
    FOREIGN KEY (dept_id) REFERENCES department(id)
);

CREATE Table employee(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VAHCHAR(30),
  last_name VAHCHAR(30),
  node_id INT NOT NULL,
  manager_id INT NOT NULL
)