const inquirer = require('inquirer');
const fs = require('fs');
const connection = require('./connection')

const questions = [

  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'prompt',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'] 
  },
  ];

function init() {
inquirer.prompt (questions).then(data => {
  console.log(data)
  switch (data.prompt) {
    case "View all departments":
      viewDepartments();
      break;
    case "View all roles":
      viewRoles();
      break;
    case "View all employees":
      viewEmployees();
      break;
    case "Add a department":
      addDepartment();
      break;
    case "Add a role":
      addRole();
      break;
    case "Add an employee":
      addEmployee();
      break;
    case "Update employee role":
      updateEmployee();
      break;
    case "exit":
      connection.end();
      break;
  }
})

}
function viewDepartments () {
  connection.query('select * from department', function (err, res){
    if (err) throw err
    console.table(res)
    init()
  })
}

function viewRoles () {
  connection.query('select * from roles', function (err, res){
    if (err) throw err
    console.table(res)
    init()
  })
}

function viewEmployees () {
  connection.query('select * from employee', function (err, res){
    if (err) throw err
    console.table(res)
    init()
  })
}

function addRole () {
  connection.query('select * from department', (err, res) => {
    inquirer.prompt([
      {
        type: 'input',
        message: 'What is the title of the new role?',
        name: 'addRole'
      },
      {
        type: 'input',
        message: 'What is the salary of the new role?',
        name: 'addSalary'
      },
      {
        type: 'list',
        message: 'What is the department of the new role?',
        name: 'addDepartment',
        choices: res.map(department => department.dept_name)
      },
    ]) .then (data => {
      let department = res.find(department => department.dept_name === data.addDepartment)
      connection.query('insert into roles set ?', {
        title: data.addRole,
        salary: data.addSalary,
        department_id: department.id
      })
      
      init()
    })
  })
}

function addEmployee () {
  connection.query('select * from department', (err, res) => {
    inquirer.prompt([
      {
        type: 'input',
        message: 'What is their first name??',
        name: 'first_name'
      },
      {
        type: 'input',
        message: 'What is their last name?',
        name: 'last_name'
      },
      {
        type: 'list',
        message: 'What is their role?',
        name: 'role_id',
        choices: ['Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', ' Lawyer']
      },
      {
        type: 'list',
        message: 'Who is their manager?',
        name: 'manager_id',
        choices: ['Sarah Paulson', 'Evan Peters', 'Jessica Lang'] 
      },
    ]) .then (data => {
      connection.query()
      let employee = res.find(employee => employee.employee === data.addEmployee)
      connection.query('insert into employee set ?', {
        firstName: data.first_name,
        lastName: data.last_name,
        manager_id: '',
      })
      
      init()
})

}
)}



init();
