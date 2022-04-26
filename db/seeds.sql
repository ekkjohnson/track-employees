INSERT INTO emp_dept(id, dept_name) 
VALUES (1,'Sales'),
        (2, 'Human Resources');

INSERT INTO emp_role(id, title, salary, dept_id)
VALUES(1, 'Sales Associate', '50000', 1),
    (2, 'Intern', '1000', 1),
    (3, 'Office Manager', '70000', 1),
    (4, 'Lead of Sales', '100000', 1),
    (5, 'Receptionist', '40000', 1),
    (6, 'Human Resource Manager', '90000', 2),
    (7, 'Hiring Agent', '50000', 2), 
    (8, 'Human Resource Associate', '40000', 2),
    (9, 'Employee Recruiter', '50000', 2);

    INSERT INTO employees (id, first_name, last_name, emp_role_id, manager_id)
    Values(1, 'Bob', 'Johnson', 8,1),
    (2, 'Linda', 'Smith', 9, 2),
    (3, 'Harry', 'Anderson', 2, 1),
    (4, 'Ella', 'Goldberg', 2, 1),
    (5, 'Edward', 'Greyson', 3, 1),
    (6, 'Nell', 'Olson', 5, 2),
    (7, 'Greg', 'Howard', 6, 2),
    (8, 'Nina', 'Meyer', 7, 2),
    (9, 'Lisa', 'Daniels', 3, 1);

