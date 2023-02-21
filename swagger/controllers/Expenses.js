'use strict';

var utils = require('../utils/writer.js');
var Expenses = require('../service/ExpensesService');

module.exports.addExpense = function addExpense (req, res, next) {
  var groupId = req.swagger.params['groupId'].value;
  var body = req.swagger.params['body'].value;
  Expenses.addExpense(groupId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteGroup = function deleteGroup (req, res, next) {
  var groupId = req.swagger.params['groupId'].value;
  var expenseId = req.swagger.params['expenseId'].value;
  Expenses.deleteGroup(groupId,expenseId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllExpenses = function getAllExpenses (req, res, next) {
  var groupId = req.swagger.params['groupId'].value;
  Expenses.getAllExpenses(groupId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGroup = function getGroup (req, res, next) {
  var groupId = req.swagger.params['groupId'].value;
  var expenseId = req.swagger.params['expenseId'].value;
  Expenses.getGroup(groupId,expenseId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateGroup = function updateGroup (req, res, next) {
  var groupId = req.swagger.params['groupId'].value;
  var expenseId = req.swagger.params['expenseId'].value;
  var body = req.swagger.params['body'].value;
  Expenses.updateGroup(groupId,expenseId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
