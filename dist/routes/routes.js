"use strict";
exports.__esModule = true;
var user_1 = require("../scripts/user");
var expense_1 = require("../scripts/expense");
var group_1 = require("../scripts/group");
var router = function (app) {
    app.get('/users', function (request, response) {
        (0, user_1.getAllUsers)(response);
    });
    app.get('/users/:id', function (request, response) {
        (0, user_1.getUser)(request, response);
    });
    app.get('/users/:id/groups', function (request, response) {
        (0, group_1.getUsersGroup)(+request.params.id, response);
    });
    app.post('/users', function (request, response) {
        (0, user_1.createUser)(request, response);
    });
    app.put('/users/:id', function (request, response) {
        (0, user_1.updateUser)(request, response);
    });
    app["delete"]('/users/:id', function (request, response) { return (0, user_1.deleteUser)(+request.params.id, response); });
    app.get('/groups/:id', function (request, response) {
        (0, group_1.getGroup)(request, response);
    });
    app.get('/groups', function (request, response) {
        (0, group_1.getAllGroups)(response);
    });
    app.post('/groups', function (request, response) {
        (0, group_1.createGroup)(request, response);
    });
    app.post('/groups/user/:groupId/:userId', function (request, response) {
        (0, group_1.addUserForGroup)(request, response);
    });
    app["delete"]('/groups/user/:groupId/:userId', function (request, response) {
        (0, group_1.deleteUserFromGroup)(request, response);
    });
    app.put('/groups/:id', function (request, response) {
        (0, group_1.updateGroup)(request, response);
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
    app.put('/expenses/:groupId/:expenseId', function (request, response) {
        (0, expense_1.updateExpanse)(+request.params.groupId, +request.params.expenseId, request.body, response);
    });
    app["delete"]('/expenses/:groupId/:expenseId', function (request, response) {
        (0, expense_1.deleteExpense)(+request.params.groupId, +request.params.expenseId, response);
    });
};
exports["default"] = router;
