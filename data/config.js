const mysql = require('mysql');
const config = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'flycutlet',
};

const pool = mysql.createPool(config);
module.exports = pool;