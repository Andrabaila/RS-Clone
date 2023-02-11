"use strict";
exports.__esModule = true;
var config_1 = require("../data/config");
var user_1 = require("../scripts/user");
var jsonToObject_1 = require("../scripts/jsonToObject");
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
            users.forEach(function (userId) { return (0, user_1.removeGroupFromUser)(userId, id); });
        });
        config_1.pool.query('DELETE FROM groups WHERE id = ?', id, function (error) {
            if (error)
                throw error;
            response.send('Group deleted');
        });
    });
};
exports["default"] = router;
