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
exports.getUsersGroup = exports.updateGroup = exports.createGroup = exports.getAllGroups = exports.getGroup = exports.removeGroup = exports.deleteUserFromGroup = exports.addUserForGroup = exports.removeUserFromGroup = void 0;
var config_1 = require("../data/config");
var user_1 = require("./user");
var jsonToObject_1 = require("./jsonToObject");
function removeUserFromGroup(userId, groupId) {
    return __awaiter(this, void 0, void 0, function () {
        var connection;
        return __generator(this, function (_a) {
            connection = config_1.pool.promise();
            return [2 /*return*/, connection.execute('SELECT users FROM groupList WHERE id = ?', [groupId])
                    .then(function (group) {
                    var users = group[0][0].users;
                    users = users.filter(function (user) { return user.id !== userId; });
                    return JSON.stringify(users);
                })
                    .then(function (users) { return connection.query('UPDATE groupList SET users = ? WHERE id = ?', [users, groupId]); })];
        });
    });
}
exports.removeUserFromGroup = removeUserFromGroup;
function addUserForGroup(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, groupId, connection, userInGroup, group;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = request.params.userId;
                    groupId = request.params.groupId;
                    connection = config_1.pool.promise();
                    return [4 /*yield*/, connection.execute('SELECT * FROM users WHERE id = ?', [userId])
                            .then(function (user) { return user[0][0]; })
                            .then(function (user) {
                            var userInGroup = {
                                id: user.id,
                                name: user.name,
                                balance: 0
                            };
                            if (user.groupList.includes(+groupId))
                                return "User is already in group";
                            user.groupList.push(+groupId);
                            config_1.pool.query('UPDATE users SET ? WHERE id = ?', [(0, jsonToObject_1.userToJsonUser)(user), userId]);
                            return userInGroup;
                        })];
                case 1:
                    userInGroup = _a.sent();
                    if (typeof userInGroup === 'string')
                        return [2 /*return*/, response.status(400).send(userInGroup)];
                    return [4 /*yield*/, connection.execute('SELECT * FROM groupList WHERE id = ?', [groupId])
                            .then(function (group) {
                            group[0][0].users.push(userInGroup);
                            return group[0][0];
                        })];
                case 2:
                    group = _a.sent();
                    config_1.pool.query('UPDATE groupList SET ? WHERE id = ?', [(0, jsonToObject_1.groupToJsonGroup)(group), groupId], function (error) { return response.send(error || 'User added to group'); });
                    return [2 /*return*/];
            }
        });
    });
}
exports.addUserForGroup = addUserForGroup;
function deleteUserFromGroup(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, groupId, connection;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = +request.params.userId;
                    groupId = +request.params.groupId;
                    connection = config_1.pool.promise();
                    return [4 /*yield*/, connection.execute('SELECT groupList FROM users WHERE id = ?', [userId])
                            .then(function (user) { return user[0][0]; })
                            .then(function (user) {
                            user.groupList.filter(function (id) { return id !== groupId; });
                            config_1.pool.query('UPDATE users SET ? WHERE id = ?', [(0, jsonToObject_1.userToJsonUser)(user), userId]);
                        })];
                case 1:
                    _a.sent();
                    removeUserFromGroup(userId, groupId)
                        .then(function () { return response.send('User removed from group'); });
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteUserFromGroup = deleteUserFromGroup;
function removeGroup(groupId, response) {
    return __awaiter(this, void 0, void 0, function () {
        var connection, awaitGroupDeleteFromUsers;
        return __generator(this, function (_a) {
            connection = config_1.pool.promise();
            awaitGroupDeleteFromUsers = [];
            connection.execute('SELECT users FROM groupList WHERE id = ?', [groupId])
                .then(function (group) {
                group[0][0].users.forEach(function (user) {
                    awaitGroupDeleteFromUsers.push((0, user_1.removeGroupFromUser)(user.id, groupId));
                });
            });
            Promise.allSettled(awaitGroupDeleteFromUsers)
                .then(function () {
                config_1.pool.query('DELETE FROM groupList WHERE id = ?', groupId, function (error) { return response.send(error || 'Group deleted'); });
            });
            return [2 /*return*/];
        });
    });
}
exports.removeGroup = removeGroup;
function validateGroup(group) {
    var fields = ['name', 'photo', 'currency', 'expenses', 'users'];
    for (var i = 0; i < fields.length; i++) {
        if (!group.hasOwnProperty(fields[i]))
            return "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043F\u043E\u043B\u0435 ".concat(fields[i]);
    }
    if (typeof group.name !== 'string' || group.name.trim().length === 0)
        return 'Поле name должно быть не пустой строкой';
    if (typeof group.photo !== 'string' || group.photo.trim().length === 0)
        return 'Поле photo должно быть не пустой строкой';
    if (typeof group.currency !== 'string' || group.currency.trim().length === 0)
        return 'Поле currency должно быть не пустой строкой';
    if (!Array.isArray(group.expenses))
        return 'Поле expenses должно быть массивом';
    if (!Array.isArray(group.users))
        return 'Поле users должно быть пустым массивом или массивом чисел';
}
function createId() {
    return __awaiter(this, void 0, void 0, function () {
        var connection, id, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    connection = config_1.pool.promise();
                    id = Math.floor(Math.random() * (999999999 - 1000 + 1)) + 1000;
                    return [4 /*yield*/, connection.query('SELECT id FROM groupList WHERE id = ?', id)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result[0].length ? createId() : id];
            }
        });
    });
}
function getGroup(request, response) {
    config_1.pool.query('SELECT * FROM groupList WHERE id = ?', request.params.id, function (error, group) { return response.send(error || group[0]); });
}
exports.getGroup = getGroup;
function getAllGroups(response) {
    config_1.pool.query('SELECT * FROM groupList', function (error, groups) { return response.send(error || groups); });
}
exports.getAllGroups = getAllGroups;
function createGroup(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var recivedGroup, groupIsNotGroup, id, group;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    recivedGroup = request.body;
                    groupIsNotGroup = validateGroup(recivedGroup);
                    if (groupIsNotGroup)
                        return [2 /*return*/, response.status(400).send(groupIsNotGroup)];
                    return [4 /*yield*/, createId()];
                case 1:
                    id = _a.sent();
                    group = {
                        id: id,
                        name: recivedGroup.name,
                        photo: recivedGroup.photo,
                        currency: recivedGroup.currency,
                        users: recivedGroup.users,
                        expenses: recivedGroup.expenses
                    };
                    config_1.pool.query('INSERT INTO groupList SET ?', (0, jsonToObject_1.groupToJsonGroup)(group), function (error) { return response.send(error || group); });
                    return [2 /*return*/];
            }
        });
    });
}
exports.createGroup = createGroup;
function updateGroup(request, response) {
    var recivedGroup = request.body;
    var groupIsNotGroup = validateGroup(recivedGroup);
    if (groupIsNotGroup)
        return response.status(400).send(groupIsNotGroup);
    var group = {
        id: +request.params.id,
        name: recivedGroup.name,
        photo: recivedGroup.photo,
        currency: recivedGroup.currency,
        users: recivedGroup.users,
        expenses: recivedGroup.expenses
    };
    config_1.pool.query('UPDATE groupList SET ? WHERE id = ?', [(0, jsonToObject_1.groupToJsonGroup)(group), request.params.id], function (error) { return response.send(error || group); });
}
exports.updateGroup = updateGroup;
function getUsersGroup(userId, response) {
    var connection = config_1.pool.promise();
    var awaitGroups = [];
    connection.execute('SELECT groupList FROM users WHERE id = ?', [userId])
        .then(function (user) {
        user[0][0].groupList.forEach(function (groupId) {
            awaitGroups.push(connection.execute('SELECT * FROM groupList WHERE id = ?', [groupId]));
        });
    })
        .then(function () { return Promise.all(awaitGroups).then(function (groups) { return response.send(groups[0][0]); }); });
}
exports.getUsersGroup = getUsersGroup;
