DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
id INT AUTO_INCREMENT PRIMARY KEY, 
dept_name VARCHAR(30),
);

CREATE TABLE role (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
FOREIGN KEY (department)
REFERENCES department(id)

);

CREATE TABLE employee (
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT
--Something wrong with role
FOREIGN KEY (role)
REFERENCES role(id)
);

CREATE TABLE managers (
  
)
