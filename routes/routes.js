const pool = require('../data/config');
const user = require('../scripts/user');

const router = (app) => {
  app.get('/', (request, response) => {
    response.send({
      message: 'hello world' 
    })
  });
  
  app.get('/users', (request, response) => {
    pool.query('SELECT * FROM users', (error, result) => {
      if (error) throw error;
      response.send(result);
    });
  });

  app.get('/users/:id', (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
      if (error) throw error;
      response.send(result);
    });
  });

  app.post('/users', (request, response) => {
    pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
      if (error) throw error;
      response.status(201).send(`User added with ID: ${result.insertId}`);
    });
  });

  app.put('/users/:id', (request, response) => {
    const id = request.params.id;
    pool.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;
        response.send('User updated successfully.');
    });
  });

  app.delete('/users/:id', (request, response) => {
    const id = request.params.id;
    pool.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
        if (error) throw error;
        response.send('User deleted.');
    });
  });

  app.get('/groups/:id', (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM groups WHERE id = ?', id, (error, result) => {
      if (error) throw error;
      response.send(result);
    });
  });

  app.get('/groups', (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM groups', (error, result) => {
      if (error) throw error;
      response.send(result);
    });
  });

  app.post('/groups', (request, response) => {
    pool.query('INSERT INTO groups SET ?', request.body, (error, result) => {
        if (error) throw error;
        response.status(201).send(`Group added with ID: ${result.insertId}`);
    });
  });

  app.put('/groups/:id', (request, response) => {
    const id = request.params.id;
    pool.query('UPDATE groups SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;
        response.send('Group updated successfully.');
    });
  });

  app.delete('/groups/:id', (request, response) => {
    const id = request.params.id;
    pool.query('SELECT * FROM groups WHERE id = ?', id, (error, group) => {
      if (error) throw error;

      const users = JSON.parse(group[0].users);
      users.forEach((userId) => user.removeGroupFromUser(userId, id));
    });

    pool.query('DELETE FROM groups WHERE id = ?', id, (error, result) => {
        if (error) throw error;
        response.send('Group deleted.');
    });
  });
}

module.exports = router
