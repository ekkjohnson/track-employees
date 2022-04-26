CREATE DATABASE track_emp_db;
USE track_emp_db;

CREATE TABLE emp_dept(
    id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE emp_role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    dept_id INT NOT NULL,
    FOREIGN KEY (dept_id) REFERENCES emp_dept(id)
);

CREATE Table employees(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  emp_role_id INT NOT NULL,
  FOREIGN KEY (emp_role_id) 
REFERENCES emp_role(id),
manager_id INT,
FOREIGN KEY (manager_id) 
REFERENCES employees(id)
);