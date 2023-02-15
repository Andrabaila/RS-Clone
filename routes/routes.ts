import { pool } from "../data/config";
import { Request, Response, Express } from 'express';
import { deleteUser } from "../scripts/user";
import { groupToJsonGroup, userToJsonUser } from "../scripts/jsonToObject";
import { Group, User } from "../data/interfaces";
import { addExpense, getExpense, getExpenses } from "../scripts/expense";
import { removeGroup } from "../scripts/group";

const router = (app: Express) => {
  app.get('/users', (_, response: Response) => {
    pool.query(
      'SELECT * FROM users', 
      (error: Error, users: User[]) => response.send(error || users)
    );
  });

  app.get('/users/:id', (request: Request, response: Response) => {
    pool.query(
      'SELECT * FROM users WHERE id = ?', 
      request.params.id, 
      (error: Error, user: User[]) => response.send(error || user[0])
    );
  });

  app.post('/users', (request: Request, response: Response) => {
    pool.query(
      'INSERT INTO users SET ?', 
      userToJsonUser(request.body), 
      (error: Error) => response.send(error || 'User created')
    );
  });

  app.put('/users/:id', (request: Request, response: Response) => {
    pool.query(
      'UPDATE users SET ? WHERE id = ?', 
      [request.params.id, userToJsonUser(request.body)], 
      (error: Error) => response.send(error || 'User updated')
    );
  });

  app.delete('/users/:id', (request: Request, response: Response) => deleteUser(+request.params.id, response));

  app.get('/groups/:id', (request: Request, response: Response) => {
    pool.query(
      'SELECT * FROM groups WHERE id = ?',
      request.params.id,
      (error: Error, group: Group[]) => response.send(error || group[0])
    );
  });

  app.get('/groups', (_, response: Response) => {
    pool.query(
      'SELECT * FROM groups',
      (error: Error, groups: Group[]) => response.send(error || groups)
    );
  });

  app.post('/groups', (request: Request, response: Response) => {
    pool.query(
      'INSERT INTO groups SET ?',
      groupToJsonGroup(request.body), 
      (error: Error) => response.send(error || 'Group created')
    );
  });

  app.put('/groups/:id', (request: Request, response: Response) => {
    pool.query(
      'UPDATE groups SET ? WHERE id = ?', 
      [groupToJsonGroup(request.body), request.params.id], 
      (error: Error) => response.send(error || 'Group updated')
    );
  });

  app.delete('/groups/:id', (request: Request, response: Response) => {
    removeGroup(+request.params.id, response)
  });

  app.get('/expenses/:groupId', (request: Request, response: Response) => {
    getExpenses(+request.params.groupId, response)
  });

  app.get('/expenses/:groupId/:expenseId', (request: Request, response: Response) => {
    getExpense(+request.params.groupId, +request.params.expenseId, response);
  });

  app.post('/expenses/:groupId', (request: Request, response: Response) => {
    addExpense(+request.params.groupId, request.body, response);
  });

  // app.put('/expenses/:groupId/:expenseId', (request: Request, response: Response) => {
  //   const groupId = +request.params.groupId;
  //   const expenseId = +request.params.expenseId;

  //   const expense: SendExpense = JSON.parse(request.body);

  //   pool.query('UPDATE groups SET ? WHERE id = ?', [group, groupId], (error: Error) => {
  //     if (error) throw error;
  //     response.send('Expense updated');
  //   });
  // });
}

export default router;
