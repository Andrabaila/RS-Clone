import { pool } from "../data/config";
import { Request, Response, Express } from 'express';
import { removeGroupFromUser } from "../scripts/user";
import { groupToJsonGroup, jsonGroupToGroup, jsonUserToUser, userToJsonUser } from "../scripts/jsonToObject";
import { JsonUser, JsonGroup, Group, SendExpense } from "../data/interfaces";
import { convertToGet } from "../scripts/expense";

const router = (app: Express) => {
  app.get('/users', (request: Request, response: Response) => {
    pool.query('SELECT * FROM users', (error: Error, jsonUsers: JsonUser[]) => {
      if (error) throw error;

      const users = jsonUsers.map((jsonUser) => jsonUserToUser(jsonUser))

      response.send(users);
    });
  });

  app.get('/users/:id', (request: Request, response: Response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM users WHERE id = ?', id, (error: Error, jsonUser: JsonUser[]) => {
      if (error) throw error;

      const user = jsonUserToUser(jsonUser[0]);
      response.send(user);
    });
  });

  app.post('/users', (request: Request, response: Response) => {
    const user = userToJsonUser(request.body)

    pool.query('INSERT INTO users SET ?', user, (error: Error) => {
      if (error) throw error;
      response.send('User created');
    });
  });

  app.put('/users/:id', (request: Request, response: Response) => {
    const id = request.params.id;
    const user = userToJsonUser(request.body)

    pool.query('UPDATE users SET ? WHERE id = ?', [user, id], (error: Error) => {
      if (error) throw error;
      response.send('User updated');
    });
  });

  app.delete('/users/:id', (request: Request, response: Response) => {
    const id = request.params.id;
    
    pool.query('DELETE FROM users WHERE id = ?', id, (error: Error) => {
      if (error) throw error;
      response.send('User deleted');
    });
  });

  app.get('/groups/:id', (request: Request, response: Response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM groups WHERE id = ?', id, (error: Error, jsonGroups: JsonGroup[]) => {
      if (error) throw error;

      const groups = jsonGroups.map((jsonGroup) => jsonGroupToGroup(jsonGroup))

      response.send(groups);
    });
  });

  app.get('/groups', (request: Request, response: Response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM groups', (error: Error, jsonGroup: JsonGroup[]) => {
      if (error) throw error;

      const group = jsonGroupToGroup(jsonGroup[0]);

      response.send(group);
    });
  });

  app.post('/groups', (request: Request, response: Response) => {
    const group = groupToJsonGroup(request.body);

    pool.query('INSERT INTO groups SET ?', group, (error: Error) => {
      if (error) throw error;
      response.send('Group created');
    });
  });

  app.put('/groups/:id', (request: Request, response: Response) => {
    const id = request.params.id;
    const group = groupToJsonGroup(request.body);

    pool.query('UPDATE groups SET ? WHERE id = ?', [group, id], (error: Error) => {
      if (error) throw error;
      response.send('Group updated');
    });
  });

  app.delete('/groups/:id', (request: Request, response: Response) => {
    const id = +request.params.id;

    pool.query('SELECT * FROM groups WHERE id = ?', id, (error: Error, jsonGroup: JsonGroup[]) => {
      if (error) throw error;

      const { users } = jsonGroupToGroup(jsonGroup[0]);
      users.forEach((user) => removeGroupFromUser(user.id, id));
    });

    pool.query('DELETE FROM groups WHERE id = ?', id, (error: Error) => {
      if (error) throw error;
      response.send('Group deleted');
    });
  });

  app.get('/expenses/:groupId', (request: Request, response: Response) => {
    const groupId = request.params.groupId;

    pool.query('SELECT * FROM groups WHERE id = ?', groupId, (error: Error, group: Group[]) => {
      if (error) throw error;
      const expenses = group[0].expenses.map((expense) => {
        return convertToGet(expense);
      })
      Promise.all(expenses).then((newExpenses) => response.send(newExpenses))
    });
  });

  app.get('/expenses/:groupId/:expenseId', (request: Request, response: Response) => {
    const groupId = request.params.groupId;
    const expenseId = +request.params.expenseId;

    pool.query('SELECT * FROM groups WHERE id = ?', groupId, (error: Error, jsonGroup: JsonGroup[]) => {
      if (error) throw error;
      const group = jsonGroupToGroup(jsonGroup[0]);
      response.send(group.expenses[expenseId]);
    });
  });

  app.post('/expenses/:groupId', (request: Request, response: Response) => {
    const expense = JSON.parse(request.body);

    pool.query('INSERT INTO groups SET ?', expense, (error: Error) => {
      if (error) throw error;
      response.send('Group created');
    });
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
