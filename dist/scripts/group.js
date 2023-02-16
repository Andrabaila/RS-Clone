"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getUsersGroup = exports.removeGroup = exports.removeUserFromGroup = void 0;
var config_1 = require("../data/config");
var user_1 = require("./user");
function removeUserFromGroup(userId, groupId) {
    return __awaiter(this, void 0, void 0, function () {
        var connection;
        return __generator(this, function (_a) {
            connection = config_1.pool.promise();
            return [2 /*return*/, connection.execute('SELECT users FROM groups WHERE id = ?', [groupId])
                    .then(function (group) {
                    var users = group[0][0].users;
                    users = users.filter(function (user) { return user.id !== userId; });
                    return JSON.stringify(users);
                })
                    .then(function (users) { return connection.query('UPDATE groups SET users = ? WHERE id = ?', [users, groupId]); })];
        });
    });
}
exports.removeUserFromGroup = removeUserFromGroup;
function removeGroup(groupId, response) {
    return __awaiter(this, void 0, void 0, function () {
        var connection, awaitGroupDeleteFromUsers;
        return __generator(this, function (_a) {
            connection = config_1.pool.promise();
            awaitGroupDeleteFromUsers = [];
            connection.execute('SELECT users FROM groups WHERE id = ?', [groupId])
                .then(function (group) {
                group[0][0].users.forEach(function (user) {
                    awaitGroupDeleteFromUsers.push((0, user_1.removeGroupFromUser)(user.id, groupId));
                });
            });
            Promise.allSettled(awaitGroupDeleteFromUsers)
                .then(function () {
                config_1.pool.query('DELETE FROM groups WHERE id = ?', groupId, function (error) { return response.send(error || 'Group deleted'); });
            });
            return [2 /*return*/];
        });
    });
}
exports.removeGroup = removeGroup;
function getUsersGroup(userId, response) {
    var connection = config_1.pool.promise();
    var awaitGroups = [];
    connection.execute('SELECT groups FROM users WHERE id = ?', [userId])
        .then(function (user) {
        user[0][0].groups.forEach(function (groupId) {
            awaitGroups.push(connection.execute('SELECT * FROM groups WHERE id = ?', [groupId]));
        });
    })
        .then(function () { return Promise.all(awaitGroups).then(function (groups) { return response.send(groups[0][0]); }); });
}
exports.getUsersGroup = getUsersGroup;