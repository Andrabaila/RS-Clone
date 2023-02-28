'use strict';

var utils = require('../utils/writer.js');
var Groups = require('../service/GroupsService');

interface swaggerRequest {
  swagger: { 
    params: { 
      [x: string]: { 
        value: any; 
      }; 
    }; 
  };
}

module.exports.addUser = function addUser (req: swaggerRequest, res: Response, next: any) {
  var body = req.swagger.params['body'].value;
  Groups.addUser(body)
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteGroup = function deleteGroup (req: swaggerRequest, res: Response, next: any) {
  var id = req.swagger.params['id'].value;
  Groups.deleteGroup(id)
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllgroups = function getAllgroups (req: swaggerRequest, res: Response, next: any) {
  Groups.getAllgroups()
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGroup = function getGroup (req: swaggerRequest, res: Response, next: any) {
  var id = req.swagger.params['id'].value;
  Groups.getGroup(id)
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateGroup = function updateGroup (req: swaggerRequest, res: Response, next: any) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Groups.updateGroup(id,body)
    .then(function (response: Response) {
      utils.writeJson(res, response);
    })
    .catch(function (response: Response) {
      utils.writeJson(res, response);
    });
};
