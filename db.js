const mysql = require('mysql2');

const pool = mysql.createPool({
host: 'localhost',
user: 'director',
password: '12345',
database: 'expense_tracker',
});

module.exports = pool.promise();