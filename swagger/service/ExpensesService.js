'use strict';


/**
 * Создание новой покупки
 *
 * groupId Object id группы
 * body ExpenseSet 
 * returns Expense
 **/
exports.addExpense = function(groupId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Удаление покупки по ее id
 *
 * groupId Object id группы
 * expenseId Object id покупки
 * no response value expected for this operation
 **/
exports.deleteGroup = function(groupId,expenseId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Получить данные всех покупок
 *
 * groupId Object id группы
 * returns List
 **/
exports.getAllExpenses = function(groupId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Получить данные покупки по ее id
 *
 * groupId Object id группы
 * expenseId Object id покупки
 * returns Expense
 **/
exports.getGroup = function(groupId,expenseId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Обновление данных покупки по ее id
 *
 * groupId Object id группы
 * expenseId Object id покупки
 * body ExpenseSet 
 * returns Expense
 **/
exports.updateGroup = function(groupId,expenseId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

