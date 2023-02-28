'use strict';


/**
 * Создание нового пользователя
 *
 * body User 
 * returns User
 **/
exports.addUser = function(body: any) {
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
 * Удаление пользователя по его id
 *
 * id Object id пользователя
 * no response value expected for this operation
 **/
exports.deleteUser = function(id: string) {
  return new Promise<void | {}>(function(resolve, reject) {
    resolve();
  });
}


/**
 * Получить данные всех пользователей
 *
 * returns List
 **/
exports.getAllUsers = function() {
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
 * Получить данные пользователя по его id
 *
 * id Object id пользователя
 * returns User
 **/
exports.getUser = function(id: string) {
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
 * Получить все группы пользователя
 *
 * id Object id пользователя
 * returns List
 **/
exports.getUserGroups = function(id: string) {
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
 * Обновление данных пользователя по его id
 *
 * id Object id пользователя
 * body User 
 * returns User
 **/
exports.updateUser = function(id: string, body: any) {
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

