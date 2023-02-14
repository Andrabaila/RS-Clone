"use strict";
exports.__esModule = true;
exports.removeUserFromGroup = void 0;
var jsonToObject_1 = require("./jsonToObject");
var config_1 = require("../data/config");
function removeUserFromGroup(userId, groupId) {
    config_1.pool.query('SELECT * FROM groups WHERE id = ?', groupId, function (error, jsonGroup) {
        if (error)
            throw error;
        var users = (0, jsonToObject_1.jsonGroupToGroup)(jsonGroup[0]).users;
        users = users.filter(function (group) { return group.id !== userId; });
        jsonGroup[0].users = JSON.stringify(users);
        removeUserFromGroup(userId, groupId);
        updateGroup(jsonGroup[0], groupId);
    });
}
exports.removeUserFromGroup = removeUserFromGroup;
function updateGroup(newData, id) {
    config_1.pool.query('UPDATE groups SET ? WHERE id = ?', [newData, id], function (error) {
        if (error)
            throw error;
    });
}
