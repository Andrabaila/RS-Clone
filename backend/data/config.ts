const mysql = require('mysql2');
const config = {
  host: 'containers-us-west-144.railway.app',
  user: 'root',
  password: 'qLJgtaRJVreu53xA95lh',
  database: 'railway',
  port: '7476'
  // host: 'localhost',
  // user: 'root',
  // password: 'root',
  // database: 'flycutlet',
};

const pool = mysql.createPool(config);

export { pool };