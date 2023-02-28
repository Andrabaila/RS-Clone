'use strict';

/**
 * Создание новой группы
 *
 * body GroupSet 
 * returns GroupSet
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
 * Удаление группы по ее id
 *
 * id Object id группы
 * no response value expected for this operation
 **/
exports.deleteGroup = function(id: string)  {
  return new Promise<void | {}>(function(resolve, reject) {
    resolve();
  });
}


/**
 * Получить данные всех групп
 *
 * returns List
 **/
exports.getAllgroups = function() {
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
 * Получить данные группы по ее id
 *
 * id Object id группы
 * returns Group
 **/
exports.getGroup = function(id: string)  {
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
 * Обновление данных группы по ее id
 *
 * id Object id группы
 * body Group 
 * returns Group
 **/
exports.updateGroup = function(id: string, body: any) {
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

