"use strict";
exports.__esModule = true;
exports.pool = void 0;
var mysql = require('mysql2');
var config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'flycutlet'
};
var pool = mysql.createPool(config);
exports.pool = pool;
