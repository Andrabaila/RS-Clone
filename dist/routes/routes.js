"use strict";
exports.__esModule = true;
var config_1 = require("../data/config");
var user_1 = require("../scripts/user");
var jsonToObject_1 = require("../scripts/jsonToObject");
var expense_1 = require("../scripts/expense");
var router = function (app) {
    app.get('/users', function (request, response) {
        config_1.pool.query('SELECT * FROM users', function (error, jsonUsers) {
            if (error)
                throw error;
            var users = jsonUsers.map(function (jsonUser) { return (0, jsonToObject_1.jsonUserToUser)(jsonUser); });
            response.send(users);
        });
    });
    app.get('/users/:id', function (request, response) {
        var id = request.params.id;
        config_1.pool.query('SELECT * FROM users WHERE id = ?', id, function (error, jsonUser) {
            if (error)
                throw error;
            var user = (0, jsonToObject_1.jsonUserToUser)(jsonUser[0]);
            response.send(user);
        });
    });
    app.post('/users', function (request, response) {
        var user = (0, jsonToObject_1.userToJsonUser)(request.body);
        config_1.pool.query('INSERT INTO users SET ?', user, function (error) {
            if (error)
                throw error;
            response.send('User created');
        });
    });
    app.put('/users/:id', function (request, response) {
        var id = request.params.id;
        var user = (0, jsonToObject_1.userToJsonUser)(request.body);
        config_1.pool.query('UPDATE users SET ? WHERE id = ?', [user, id], function (error) {
            if (error)
                throw error;
            response.send('User updated');
        });
    });
    app["delete"]('/users/:id', function (request, response) {
        var id = request.params.id;
        config_1.pool.query('DELETE FROM users WHERE id = ?', id, function (error) {
            if (error)
                throw error;
            response.send('User deleted');
        });
    });
    app.get('/groups/:id', function (request, response) {
        var id = request.params.id;
        config_1.pool.query('SELECT * FROM groups WHERE id = ?', id, function (error, jsonGroups) {
            if (error)
                throw error;
            var groups = jsonGroups.map(function (jsonGroup) { return (0, jsonToObject_1.jsonGroupToGroup)(jsonGroup); });
            response.send(groups);
        });
    });
    app.get('/groups', function (request, response) {
        var id = request.params.id;
        config_1.pool.query('SELECT * FROM groups', function (error, jsonGroup) {
            if (error)
                throw error;
            var group = (0, jsonToObject_1.jsonGroupToGroup)(jsonGroup[0]);
            response.send(group);
        });
    });
    app.post('/groups', function (request, response) {
        var group = (0, jsonToObject_1.groupToJsonGroup)(request.body);
        config_1.pool.query('INSERT INTO groups SET ?', group, function (error) {
            if (error)
                throw error;
            response.send('Group created');
        });
    });
    app.put('/groups/:id', function (request, response) {
        var id = request.params.id;
        var group = (0, jsonToObject_1.groupToJsonGroup)(request.body);
        config_1.pool.query('UPDATE groups SET ? WHERE id = ?', [group, id], function (error) {
            if (error)
                throw error;
            response.send('Group updated');
        });
    });
    app["delete"]('/groups/:id', function (request, response) {
        var id = +request.params.id;
        config_1.pool.query('SELECT * FROM groups WHERE id = ?', id, function (error, jsonGroup) {
            if (error)
                throw error;
            var users = (0, jsonToObject_1.jsonGroupToGroup)(jsonGroup[0]).users;
            users.forEach(function (user) { return (0, user_1.removeGroupFromUser)(user.id, id); });
        });
        config_1.pool.query('DELETE FROM groups WHERE id = ?', id, function (error) {
            if (error)
                throw error;
            response.send('Group deleted');
        });
    });
    app.get('/expenses/:groupId', function (request, response) {
        var groupId = request.params.groupId;
        config_1.pool.query('SELECT * FROM groups WHERE id = ?', groupId, function (error, group) {
            if (error)
                throw error;
            var expenses = group[0].expenses.map(function (expense) {
                return (0, expense_1.convertToGet)(expense);
            });
            Promise.all(expenses).then(function (newExpenses) { return response.send(newExpenses); });
        });
    });
    app.get('/expenses/:groupId/:expenseId', function (request, response) {
        var groupId = request.params.groupId;
        var expenseId = +request.params.expenseId;
        config_1.pool.query('SELECT * FROM groups WHERE id = ?', groupId, function (error, jsonGroup) {
            if (error)
                throw error;
            var group = (0, jsonToObject_1.jsonGroupToGroup)(jsonGroup[0]);
            response.send(group.expenses[expenseId]);
        });
    });
    app.post('/expenses/:groupId', function (request, response) {
        var expense = JSON.parse(request.body);
        config_1.pool.query('INSERT INTO groups SET ?', expense, function (error) {
            if (error)
                throw error;
            response.send('Group created');
        });
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
