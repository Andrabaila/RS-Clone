import { pool } from '../data/config';
import { Expense, GetExpense, Group, UserInGroup } from "data/interfaces";
import { Response } from 'express';
import { updateBalance } from './userInGroup';

export function addExpense(groupId: number, expense: Expense, response: Response): void {
  const connection = pool.promise();

  connection.execute('SELECT * FROM groupList WHERE id = ?', [groupId])
    .then((group: Group[][]) => { 
      const { expenses } = group[0][0];
      expenses.push(expense)
      let newExpenses = JSON.stringify(expenses);

      connection.execute('UPDATE groupList SET expenses = ? WHERE id = ?', [newExpenses, groupId])
        .then(() => updateBalance(groupId).then(() => response.send('Expense created')));
    });
}

export function deleteExpense(groupId: number, expenceId: number, response: Response): void {
  const connection = pool.promise();

  connection.execute('SELECT expenses FROM groupList WHERE id = ?', [groupId])
    .then((group: Group[][]) => { 
      let { expenses } = group[0][0];
      expenses = expenses.filter((expense) => expense.id !== expenceId)
      let newExpenses = JSON.stringify(expenses);

      connection.execute('UPDATE groupList SET expenses = ? WHERE id = ?', [newExpenses, groupId])
        .then(() => updateBalance(groupId).then(() => response.send('Expense deleted')));
    });
}

export function getExpenses(groupId: number, response: Response) {
  const connection = pool.promise();

  connection.execute('SELECT * FROM groupList WHERE id = ?', [groupId])
    .then((group: Group[][]) => {
      const { expenses } = group[0][0];
      const awaitExpenses = expenses.map((expense) => convertExpenseToGet(expense, group[0][0]))
      Promise.all(awaitExpenses).then((newExpenses) => response.send(newExpenses))
    });
}

export function getExpense(groupId: number, expenseId: number, response: Response) {
  const connection = pool.promise();

  connection.execute('SELECT * FROM groupList WHERE id = ?', [groupId])
    .then((group: Group[][]) => {
      const { expenses } = group[0][0];
      const desiredExpense = expenses.find((expense: Expense) => expense.id === expenseId);
      if (!desiredExpense) return response.send('Expense not found');

      convertExpenseToGet(desiredExpense, group[0][0]).then((expense: GetExpense) => response.send(expense));
    });
}

export function updateExpanse(groupId: number, expenseId: number, expense: Expense, response: Response) {
  const connection = pool.promise();

  connection.execute('SELECT * FROM groupList WHERE id = ?', [groupId])
    .then((group: Group[][]) => {
      const { expenses } = group[0][0];
      const desiredExpense = expenses.find((expense: Expense) => expense.id === expenseId);
      
      if (!desiredExpense) return addExpense(groupId, expense, response);

      const expensePosition = expenses.indexOf(desiredExpense);
      expenses[expensePosition] = expense;
      const newExpenses = JSON.stringify(expenses);
      
      connection.execute('UPDATE groupList SET expenses = ? WHERE id = ?', [newExpenses, groupId])
        .then(() => updateBalance(groupId).then(() => response.send('Expense updated')));
    });
}

export async function convertExpenseToGet(expense: Expense, group: Group): Promise<GetExpense> {
  const forUsers: UserInGroup[] = group.users.filter((user) => expense.for.includes(user.id));
  const byUser = group.users.find((user) => expense.by === user.id) as UserInGroup;

  return {
    ...expense,
    by: byUser,
    for: forUsers,
  }
}