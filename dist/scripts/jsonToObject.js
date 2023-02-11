"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.userToJsonUser = exports.groupToJsonGroup = exports.jsonUserToUser = exports.jsonGroupToGroup = void 0;
function jsonGroupToGroup(jsonGroup) {
    var group = __assign(__assign({}, jsonGroup), { users: JSON.parse(jsonGroup.users), expenses: JSON.parse(jsonGroup.expenses) });
    return group;
}
exports.jsonGroupToGroup = jsonGroupToGroup;
function jsonUserToUser(jsonUser) {
    var user = __assign(__assign({}, jsonUser), { groups: JSON.parse(jsonUser.groups) });
    return user;
}
exports.jsonUserToUser = jsonUserToUser;
function groupToJsonGroup(group) {
    var jsonGroup = __assign(__assign({}, group), { users: JSON.stringify(group.users), expenses: JSON.stringify(group.expenses) });
    return jsonGroup;
}
exports.groupToJsonGroup = groupToJsonGroup;
function userToJsonUser(user) {
    var JsonUser = __assign(__assign({}, user), { groups: JSON.stringify(user.groups) });
    return JsonUser;
}
exports.userToJsonUser = userToJsonUser;
