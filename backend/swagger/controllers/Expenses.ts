'use strict';

interface swaggerRequest {
  swagger: { 
    params: { 
      [x: string]: { 
        value: any; 
      }; 
    }; 
  };
}

var utils = require('../utils/writer.js');
var Expenses = require('../service/ExpensesService');

module.exports.addExpense = function addExpense (req: swaggerRequest, res: Response, next: any) {
  var groupId = req.swagger.params['groupId'].value;
  var body = req.swagger.params['body'].value;
  Expenses.addExpense(groupId,body)
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteGroup = function deleteGroup (req: swaggerRequest, res: Response, next: any) {
  var groupId = req.swagger.params['groupId'].value;
  var expenseId = req.swagger.params['expenseId'].value;
  Expenses.deleteGroup(groupId,expenseId)
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllExpenses = function getAllExpenses (req: swaggerRequest, res: Response, next: any) {
  var groupId = req.swagger.params['groupId'].value;
  Expenses.getAllExpenses(groupId)
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGroup = function getGroup (req: swaggerRequest, res: Response, next: any) {
  var groupId = req.swagger.params['groupId'].value;
  var expenseId = req.swagger.params['expenseId'].value;
  Expenses.getGroup(groupId,expenseId)
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateGroup = function updateGroup (req: swaggerRequest, res: Response, next: any) {
  var groupId = req.swagger.params['groupId'].value;
  var expenseId = req.swagger.params['expenseId'].value;
  var body = req.swagger.params['body'].value;
  Expenses.updateGroup(groupId,expenseId,body)
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};
