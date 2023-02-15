"use strict";
exports.__esModule = true;
var config_1 = require("../data/config");
var user_1 = require("../scripts/user");
var jsonToObject_1 = require("../scripts/jsonToObject");
var expense_1 = require("../scripts/expense");
var group_1 = require("../scripts/group");
var router = function (app) {
    app.get('/users', function (_, response) {
        config_1.pool.query('SELECT * FROM users', function (error, users) { return response.send(error || users); });
    });
    app.get('/users/:id', function (request, response) {
        config_1.pool.query('SELECT * FROM users WHERE id = ?', request.params.id, function (error, user) { return response.send(error || user[0]); });
    });
    app.post('/users', function (request, response) {
        config_1.pool.query('INSERT INTO users SET ?', (0, jsonToObject_1.userToJsonUser)(request.body), function (error) { return response.send(error || 'User created'); });
    });
    app.put('/users/:id', function (request, response) {
        config_1.pool.query('UPDATE users SET ? WHERE id = ?', [request.params.id, (0, jsonToObject_1.userToJsonUser)(request.body)], function (error) { return response.send(error || 'User updated'); });
    });
    app["delete"]('/users/:id', function (request, response) { return (0, user_1.deleteUser)(+request.params.id, response); });
    app.get('/groups/:id', function (request, response) {
        config_1.pool.query('SELECT * FROM groups WHERE id = ?', request.params.id, function (error, group) { return response.send(error || group[0]); });
    });
    app.get('/groups', function (_, response) {
        config_1.pool.query('SELECT * FROM groups', function (error, groups) { return response.send(error || groups); });
    });
    app.post('/groups', function (request, response) {
        config_1.pool.query('INSERT INTO groups SET ?', (0, jsonToObject_1.groupToJsonGroup)(request.body), function (error) { return response.send(error || 'Group created'); });
    });
    app.put('/groups/:id', function (request, response) {
        config_1.pool.query('UPDATE groups SET ? WHERE id = ?', [(0, jsonToObject_1.groupToJsonGroup)(request.body), request.params.id], function (error) { return response.send(error || 'Group updated'); });
    });
    app["delete"]('/groups/:id', function (request, response) {
        (0, group_1.removeGroup)(+request.params.id, response);
    });
    app.get('/expenses/:groupId', function (request, response) {
        (0, expense_1.getExpenses)(+request.params.groupId, response);
    });
    app.get('/expenses/:groupId/:expenseId', function (request, response) {
        (0, expense_1.getExpense)(+request.params.groupId, +request.params.expenseId, response);
    });
    app.post('/expenses/:groupId', function (request, response) {
        (0, expense_1.addExpense)(+request.params.groupId, request.body, response);
    });
    // app.put('/expenses/:groupId/:expenseId', (request: Request, response: Response) => {
    //   const groupId = +request.params.groupId;
    //   const expenseId = +request.params.expenseId;
    //   const expense: SendExpense = JSON.parse(request.body);
    //   pool.query('UPDATE groups SET ? WHERE id = ?', [group, groupId], (error: Error) => {
    //     if (error) throw error;
    //     response.send('Expense updated');
    //   });
    // });
};
exports["default"] = router;
