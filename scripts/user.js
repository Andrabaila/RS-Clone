const pool = require('../data/config');

function removeGroupFromUser(userId, groupId) {
  pool.query('SELECT * FROM users WHERE id = ?', userId, (error, user) => {
    if (error) throw error;
    console.log(user);
    let groups = JSON.parse(user[0].groups);
    groups.splice(groups.indexOf(groupId), 1);
    user[0].groups = JSON.stringify(groups);

    updateUser(user, userId);
  });
}

function updateUser(newData, id) {
  pool.query('UPDATE users SET ? WHERE id = ?', [newData, id], (error, result) => {
    if (error) throw error;
    response.send('User updated successfully.');
  });
}

module.exports = {
  removeGroupFromUser,
}