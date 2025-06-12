const mysql = require('mysql2');

const pool = mysql.createPool({
host: 'localhost',
user: 'director',   // Please change it according to your user accounts !!
password: '12345',  // Same as here !!
database: 'expense_tracker',
});

module.exports = pool.promise();