INSERT INTO department (dept_name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');
   
INSERT INTO roles (title, salary, department_id)
VALUES ('Salesperson', 80000, 01),
       ('Lead Engineer', 150000, 02),
       ('Software Engineer', 120000, 02),
       ('Account Manager', 160000, 03),
       ('Accountant', 125000, 03),
       ('Legal Team Lead', 250000, 04),
       ('Lawyer', 190000, 04);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mike', 'Chan', 01, null),
       ('Ashley', 'Rodriguez', 02, 1),
       ('Kevin', 'Tupik', 03, null),
       ('Kunal', 'Singh', 04, 6),
       ('Malia', 'Brown', 05, null),
       ('Sarah', 'Lourd', 06, 4),
       ('Tom', 'Allen', 07, null);