"use strict";
exports.__esModule = true;
exports.getUserInGroup = void 0;
var config_1 = require("../data/config");
function getUserInGroup(id) {
    return config_1.pool.query('SELECT * FROM users WHERE id = ?', id, function (error, userInGroup) {
        if (error)
            throw error;
        return userInGroup[0];
    });
}
exports.getUserInGroup = getUserInGroup;
