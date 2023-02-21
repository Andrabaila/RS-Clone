'use strict';

var utils = require('../utils/writer.js');
var Groups = require('../service/GroupsService');

module.exports.addUser = function addUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  Groups.addUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteGroup = function deleteGroup (req, res, next) {
  var id = req.swagger.params['id'].value;
  Groups.deleteGroup(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllgroups = function getAllgroups (req, res, next) {
  Groups.getAllgroups()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGroup = function getGroup (req, res, next) {
  var id = req.swagger.params['id'].value;
  Groups.getGroup(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateGroup = function updateGroup (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Groups.updateGroup(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
