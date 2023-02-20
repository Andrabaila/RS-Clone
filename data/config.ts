const mysql = require('mysql2');
const config = {
  host: 'containers-us-west-199.railway.app',
  user: 'root',
  password: 'tUabvMWr8DKRezLZefJJ',
  database: 'railway',
  port: '6610'
};

const pool = mysql.createPool(config);

export { pool };