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
exports.updateBalance = exports.getUserInGroup = void 0;
var config_1 = require("../data/config");
function getUserInGroup(id) {
    return config_1.pool.query('SELECT * FROM users WHERE id = ?', id, function (error, userInGroup) {
        if (error)
            throw error;
        return userInGroup[0];
    });
}
exports.getUserInGroup = getUserInGroup;
function updateBalance(groupId) {
    return __awaiter(this, void 0, void 0, function () {
        var connection;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    connection = config_1.pool.promise();
                    return [4 /*yield*/, connection.execute('SELECT * FROM groups WHERE id = ?', [groupId])
                            .then(function (group) { return __awaiter(_this, void 0, void 0, function () {
                            var expenses, users, newUsers;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        expenses = group[0][0].expenses;
                                        users = group[0][0].users;
                                        expenses.forEach(function (expense, i) {
                                            var byUser = users.find(function (user) { return user.id === expense.by; });
                                            var byUserPosition = users.indexOf(byUser);
                                            var forUsers = users.filter(function (user) { return expense["for"].includes(user.id); });
                                            var forUserPositions = forUsers.map(function (user) { return users.indexOf(user); });
                                            if (forUsers.length === 1) {
                                                if (i === 0) {
                                                    users[byUserPosition].balance = 0;
                                                    users[forUserPositions[0]].balance = 0;
                                                }
                                                users[byUserPosition].balance += expense.amount;
                                                users[forUserPositions[0]].balance -= expense.amount;
                                                return;
                                            }
                                            var amountForOne = expense.amount / users.length;
                                            var amountForByer = expense.amount - amountForOne;
                                            if (i === 0)
                                                users[byUserPosition].balance = 0;
                                            users[byUserPosition].balance += amountForByer;
                                            forUserPositions.forEach(function (user) {
                                                if (i === 0)
                                                    users[byUserPosition].balance = 0;
                                                users[user].balance -= amountForOne;
                                            });
                                        });
                                        newUsers = JSON.stringify(users);
                                        return [4 /*yield*/, connection.execute('UPDATE groups SET users = ? WHERE id = ?', [newUsers, groupId])];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateBalance = updateBalance;
