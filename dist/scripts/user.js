"use strict";
exports.__esModule = true;
exports.removeGroupFromUser = void 0;
var jsonToObject_1 = require("./jsonToObject");
var config_1 = require("../data/config");
function removeGroupFromUser(userId, groupId) {
    config_1.pool.query('SELECT * FROM users WHERE id = ?', userId, function (error, jsonUser) {
        if (error)
            throw error;
        var groups = (0, jsonToObject_1.jsonUserToUser)(jsonUser[0]).groups;
        if (groups.indexOf(groupId) >= 0)
            groups.splice(groups.indexOf(groupId), 1);
        jsonUser[0].groups = JSON.stringify(groups);
        updateUser(jsonUser[0], userId);
    });
}
exports.removeGroupFromUser = removeGroupFromUser;
function updateUser(newData, id) {
    config_1.pool.query('UPDATE users SET ? WHERE id = ?', [newData, id], function (error) {
        if (error)
            throw error;
    });
}
