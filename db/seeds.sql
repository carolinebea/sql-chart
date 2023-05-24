INSERT INTO department (id, dept_name)
VALUES (01, 'Sales'),
       (02, 'Engineering'),
       (03, 'Finance'),
       (04, 'Legal');

--Why won't this do the right thing?    
INSERT INTO role (id, title, salary, department_id)
VALUES (01, 'Salesperson', 80000, 01),
       (02, 'Lead Engineer', 150000, 02),
       (03, 'Software Engineer', 120000, 02),
       (04, 'Account Manager', 160000, 03),
       (05, 'Accountant', 125000, 03),
       (06, 'Legal Team Lead', 250000, 04)
       (07, 'Lawyer', 190000, 04);


--Need to enter manager id
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (01, 'Mike', 'Chan', 01, )
       (02, 'Ashley', 'Rodriguez', 02, )
       (03, 'Kevin', 'Tupik', 03, )
       (04, 'Kunal', 'Singh', 04, )
       (05, 'Malia', 'Brown', 05, )
       (06, 'Sarah', 'Lourd', 06, )
       (07, 'Tom', 'Allen', 07, );