import { Group, UserInGroup } from "../data/interfaces";
import { pool } from '../data/config';

export function getUserInGroup(id: number): Promise<UserInGroup> {
  return pool.query('SELECT * FROM users WHERE id = ?', id, (error: Error, userInGroup: UserInGroup[]) => {
    if (error) throw error;
    return userInGroup[0];
  })
}

export async function updateBalance(groupId: number): Promise<void> {
  const connection = pool.promise();

  await connection.execute('SELECT * FROM groupList WHERE id = ?', [groupId])
    .then(async (group: Group[][]) => { 
      const { expenses } = group[0][0];
      const { users } = group[0][0];

      expenses.forEach((expense, i) => {
        const byUser = users.find((user) => user.id === expense.by) as UserInGroup;
        const byUserPosition = users.indexOf(byUser);
      
        const forUsers = users.filter((user) => expense.for.includes(user.id));
        const forUserPositions = forUsers.map((user) => users.indexOf(user));

        if (forUsers.length === 1) {
          if (i === 0) {
            users[byUserPosition].balance = 0;
            users[forUserPositions[0]].balance = 0;
          }

          users[byUserPosition].balance += expense.amount;
          users[forUserPositions[0]].balance -= expense.amount;
      
          return;
        }
      
        const amountForOne = Math.floor(expense.amount / users.length);
        const amountForByer = Math.floor(expense.amount - amountForOne);
      
        if (i === 0) users[byUserPosition].balance = 0;

        console.log(amountForByer, byUserPosition, users)
        users[byUserPosition].balance += amountForByer;
        forUserPositions.forEach((user) => {
          if (i === 0) users[user].balance = 0;
          users[user].balance -= amountForOne;
        })
      })

      const newUsers = JSON.stringify(users);

      await connection.execute('UPDATE groupList SET users = ? WHERE id = ?', [newUsers, groupId]);
    });
  }