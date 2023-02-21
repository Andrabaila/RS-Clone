"use strict";
exports.__esModule = true;
exports.pool = void 0;
var mysql = require('mysql2');
var config = {
    host: 'containers-us-west-199.railway.app',
    user: 'root',
    password: 'tUabvMWr8DKRezLZefJJ',
    database: 'railway',
    port: '6610'
};
var pool = mysql.createPool(config);
exports.pool = pool;
