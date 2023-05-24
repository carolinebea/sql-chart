const mysql = require('mysql2')

const connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: 'place',
  database: 'employee_db',
  port: 3306
})

connection.connect(() => {
console.log('connected')
}) 
module.exports = connection