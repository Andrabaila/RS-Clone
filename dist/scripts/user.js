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
exports.createUser = exports.updateUser = exports.getUser = exports.getAllUsers = exports.deleteUser = exports.removeGroupFromUser = void 0;
var config_1 = require("../data/config");
var group_1 = require("./group");
var jsonToObject_1 = require("./jsonToObject");
function removeGroupFromUser(userId, groupId) {
    return __awaiter(this, void 0, void 0, function () {
        var connection;
        return __generator(this, function (_a) {
            connection = config_1.pool.promise();
            connection.execute('SELECT groupList FROM users WHERE id = ?', [userId])
                .then(function (user) {
                var newGroups = user[0][0].groupList;
                newGroups = newGroups.filter(function (group) { return group !== groupId; });
                return JSON.stringify(newGroups);
            })
                .then(function (groups) { return connection.query('UPDATE users SET groupList = ? WHERE id = ?', [groups, userId]); });
            return [2 /*return*/];
        });
    });
}
exports.removeGroupFromUser = removeGroupFromUser;
function deleteUser(userId, response) {
    return __awaiter(this, void 0, void 0, function () {
        var connection;
        return __generator(this, function (_a) {
            connection = config_1.pool.promise();
            connection.query('SELECT * FROM users WHERE id = ?', userId)
                .then(function (user) {
                var awaitDeleteUsers = [];
                user[0][0].groupList.forEach(function (group) { return awaitDeleteUsers.push((0, group_1.removeUserFromGroup)(userId, group)); });
                return awaitDeleteUsers;
            })
                .then(function (awaitDeleteUsers) {
                Promise.allSettled(awaitDeleteUsers)
                    .then(function () {
                    config_1.pool.query('DELETE FROM users WHERE id = ?', userId, function (error) { return response.send(error || 'User deleted'); });
                });
            });
            return [2 /*return*/];
        });
    });
}
exports.deleteUser = deleteUser;
function createId() {
    return __awaiter(this, void 0, void 0, function () {
        var connection, id, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    connection = config_1.pool.promise();
                    id = Math.floor(Math.random() * (999999999 - 1000 + 1)) + 1000;
                    return [4 /*yield*/, connection.query('SELECT id FROM users WHERE id = ?', id)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result[0].length ? createId() : id];
            }
        });
    });
}
function getAllUsers(response) {
    config_1.pool.query('SELECT * FROM users', function (error, users) { return response.send(error || users); });
}
exports.getAllUsers = getAllUsers;
function getUser(request, response) {
    config_1.pool.query('SELECT * FROM users WHERE id = ?', request.params.id, function (error, user) { return response.send(error || user[0]); });
}
exports.getUser = getUser;
function isNumberArray(groupList) {
    if (!Array.isArray(groupList))
        return false;
    if (!groupList.every(function (group) { return typeof group === 'number'; }))
        return false;
    return true;
}
function validateUser(recivedUser) {
    if (!recivedUser.hasOwnProperty('name') || !recivedUser.hasOwnProperty('groupList'))
        return 'Ненайдены поле name или поле groupList';
    if ((typeof recivedUser.name !== 'string') || recivedUser.name.trim().length === 0)
        return 'Поле name должно быть непустой строкой';
    if (!isNumberArray(recivedUser.groupList))
        return 'Поле groupList должно быть пустым массивом или массивом чисел';
}
function updateUser(request, response) {
    var recivedUser = request.body;
    var userIsNotUser = validateUser(recivedUser);
    if (userIsNotUser)
        return response.status(400).send(userIsNotUser);
    var user = {
        id: +request.params.id,
        name: recivedUser.name,
        groupList: recivedUser.groupList
    };
    config_1.pool.query('UPDATE users SET ? WHERE id = ?', [(0, jsonToObject_1.userToJsonUser)(user), request.params.id], function (error) { return response.send(error || user); });
}
exports.updateUser = updateUser;
function createUser(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var recivedUser, userIsNotUser, id, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    recivedUser = request.body;
                    userIsNotUser = validateUser(recivedUser);
                    if (userIsNotUser)
                        return [2 /*return*/, response.status(400).send(userIsNotUser)];
                    return [4 /*yield*/, createId()];
                case 1:
                    id = _a.sent();
                    user = {
                        id: id,
                        name: recivedUser.name,
                        groupList: recivedUser.groupList
                    };
                    config_1.pool.query('INSERT INTO users SET ?', (0, jsonToObject_1.userToJsonUser)(user), function (error) { return response.send(error || user); });
                    return [2 /*return*/];
            }
        });
    });
}
exports.createUser = createUser;
