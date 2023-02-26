import { 
  Request, 
  Response, 
  Express 
} from 'express';
import { 
  createUser, 
  deleteUser, 
  getAllUsers, 
  getUser, 
  updateUser
} from "../scripts/user";
import { 
  addExpense, 
  deleteExpense, 
  getExpense, 
  getExpenses, 
  updateExpanse 
} from "../scripts/expense";
import { 
  getUsersGroup, 
  removeGroup, 
  getGroup, 
  getAllGroups, 
  createGroup, 
  updateGroup, 
  addUserForGroup,
  deleteUserFromGroup
} from "../scripts/group";

const router = (app: Express) => {
  app.get('/users', (request: Request, response: Response) => {
    getAllUsers(response);
  });

  app.get('/users/:id', (request: Request, response: Response) => {
    getUser(request, response);
  });

  app.get('/users/:id/groups', (request: Request, response: Response) => {
    getUsersGroup(+request.params.id, response);
  });

  app.post('/users', (request: Request, response: Response) => {
    createUser(request, response);
  });

  app.put('/users/:id', (request: Request, response: Response) => {
    updateUser(request, response);
  });

  app.delete('/users/:id', (request: Request, response: Response) => deleteUser(+request.params.id, response));

  app.get('/groups/:id', (request: Request, response: Response) => {
    getGroup(request, response);
  });

  app.get('/groups', (request: Request, response: Response) => {
    getAllGroups(response);
  });

  app.post('/groups', (request: Request, response: Response) => {
    createGroup(request, response);
  });

  app.post('/groups/user/:groupId/:userId', (request: Request, response: Response) => {
    addUserForGroup(request, response);
  });

  app.delete('/groups/user/:groupId/:userId', (request: Request, response: Response) => {
    deleteUserFromGroup(request, response);
  });

  app.put('/groups/:id', (request: Request, response: Response) => {
    updateGroup(request, response);
  });

  app.delete('/groups/:id', (request: Request, response: Response) => {
    removeGroup(+request.params.id, response)
  });

  app.get('/expenses/:groupId', (request: Request, response: Response) => {
    getExpenses(+request.params.groupId, response);
  });

  app.get('/expenses/:groupId/:expenseId', (request: Request, response: Response) => {
    getExpense(+request.params.groupId, +request.params.expenseId, response);
  });

  app.post('/expenses/:groupId', (request: Request, response: Response) => {
    addExpense(+request.params.groupId, request.body, response);
  });

  app.put('/expenses/:groupId/:expenseId', (request: Request, response: Response) => {
    updateExpanse(+request.params.groupId, +request.params.expenseId, request.body, response);
  });

  app.delete('/expenses/:groupId/:expenseId', (request: Request, response: Response) => {
    deleteExpense(+request.params.groupId, +request.params.expenseId, response);
  });
}

export default router;
