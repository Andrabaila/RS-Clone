"use strict";
exports.__esModule = true;
exports.pool = void 0;
var mysql = require('mysql2');
var config = {
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
var pool = mysql.createPool(config);
exports.pool = pool;
