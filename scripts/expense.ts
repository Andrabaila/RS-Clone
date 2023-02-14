import { pool } from '../data/config';
import { Expense, GetExpense, Group, JsonGroup, SendExpense, UserInGroup } from "data/interfaces";
import { jsonGroupToGroup } from './jsonToObject';
import { getUserInGroup } from './userInGroup';

export function addExpense(groupId: number, expense: Expense): void {
  pool.query('SELECT * FROM groups WHERE id = ?', groupId, (error: Error, jsonGroup: JsonGroup[]) => {
    if (error) throw error;
    
    let { expenses } = jsonGroupToGroup(jsonGroup[0]);
    expenses.push(expense);
    jsonGroup[0].expenses = JSON.stringify(expenses);
    
    updateExpense(jsonGroup[0], groupId);
  });
}

function updateExpense(group: JsonGroup, groupId: number): void {
  pool.query('UPDATE groups SET ? WHERE id = ?', [group, groupId], (error: Error) => {
    if (error) throw error;
  });
}

export async function convertToGet(expense: Expense) {
  let forUsers: Promise<UserInGroup[]>[] = [];
  const connection = pool.promise();

  expense.for.forEach((forUser) => {
    forUsers.push(connection.execute('SELECT * FROM users WHERE id = ?', [forUser])
      .then((res: UserInGroup[]) => res[0]));
  })

  let ObjectsforUsers: Promise<UserInGroup[]> = Promise.all(forUsers)
    .then((forUser) => forUser.map((res) => res[0]));
  let byUser: Promise<UserInGroup> = connection.execute('SELECT * FROM users WHERE id = ?', [expense.by])
    .then((by: UserInGroup[][]) => by[0][0]);

  return {
    ...expense,
    by: await byUser,
    for: await ObjectsforUsers,
  }
}