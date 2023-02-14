const mysql = require('mysql2');
const config = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'flycutlet',
};

const pool = mysql.createPool(config);

export { pool };