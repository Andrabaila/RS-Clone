'use strict';

interface Examples {
  [key: string]: {}
}

/**
 * Создание новой покупки
 *
 * groupId Object id группы
 * body ExpenseSet 
 * returns Expense
 **/
exports.addExpense = function(groupId: string, body: any) {
  return new Promise<void | {}>(function(resolve, reject) {
    var examples: Examples = {};
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
exports.deleteGroup = function(groupId: string, expenseId: string) {
  return new Promise<void | {}>(function(resolve, reject) {
    resolve();
  });
}


/**
 * Получить данные всех покупок
 *
 * groupId Object id группы
 * returns List
 **/
exports.getAllExpenses = function(groupId: string) {
  return new Promise<void | {}>(function(resolve, reject) {
    var examples: Examples = {};
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
exports.getGroup = function(groupId: string, expenseId: string) {
  return new Promise<void | {}>(function(resolve, reject) {
    var examples: Examples = {};
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
exports.updateGroup = function(groupId: string, expenseId: string, body: any) {
  return new Promise<void | {}>(function(resolve, reject) {
    var examples: Examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

