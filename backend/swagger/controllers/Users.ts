'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.addUser = function addUser (req: swaggerRequest, res: Response, next: any) {
  var body = req.swagger.params['body'].value;
  Users.addUser(body)
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUser = function deleteUser (req: swaggerRequest, res: Response, next: any) {
  var id = req.swagger.params['id'].value;
  Users.deleteUser(id)
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllUsers = function getAllUsers (req: swaggerRequest, res: Response, next: any) {
  Users.getAllUsers()
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUser = function getUser (req: swaggerRequest, res: Response, next: any) {
  var id = req.swagger.params['id'].value;
  Users.getUser(id)
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserGroups = function getUserGroups (req: swaggerRequest, res: Response, next: any) {
  var id = req.swagger.params['id'].value;
  Users.getUserGroups(id)
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUser = function updateUser (req: swaggerRequest, res: Response, next: any) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Users.updateUser(id,body)
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};
