import { pool } from '../data/config';
import { Expense, GetExpense, Group, UserInGroup } from "data/interfaces";
import { Response } from 'express';
import { updateBalance } from './userInGroup';

async function createId(groupId: number): Promise<number | void> {
  const connection = pool.promise();
  const result = await connection.query('SELECT expenses FROM groupList WHERE id = ?', groupId);
  if (!result[0][0]) return;

  function check(): number {
    const id = Math.floor(Math.random() * (999999999 - 1000 + 1)) + 1000;
    return result[0][0].expenses.some((expense: Expense) => expense.id === id) ? check() : id;
  }

  return check();
}

function validateExpense(expense: Expense): string | void {
  const fields = ['title', 'amount', 'date', 'by', 'for'];

  for (let i = 0; i < fields.length; i++) {
    if (!expense.hasOwnProperty(fields[i])) return `Отсутствует поле ${fields[i]}`;
  }

  if (typeof expense.title !== 'string') return 'Поле title должно быть строкой';
  if (typeof expense.amount !== 'number') return 'Поле amount должно быть числом';
  if (typeof expense.date !== 'number') return 'Поле date должно быть числом';
  if (typeof expense.by !== 'number') return 'Поле by должно быть числом';
  if (!Array.isArray(expense.for) || expense.for.length === 0) return 'Поле for должно быть массивом чисел';
}

export async function addExpense(groupId: number, expense: Expense, response: Response) {
  const recivedExpense = expense;
  const expenseIsNotExpense = validateExpense(recivedExpense);
  if (expenseIsNotExpense) return response.status(400).send(expenseIsNotExpense);
  const id = await createId(groupId);
  if (!id) return response.status(400).send('Group not found');

  const newExpense: Expense = {
    id: id,
    title: recivedExpense.title,
    amount: recivedExpense.amount,
    date: recivedExpense.date,
    by: recivedExpense.by,
    for: recivedExpense.for
  }

  const connection = pool.promise();

  connection.execute('SELECT * FROM groupList WHERE id = ?', [groupId])
    .then((group: Group[][]) => { 
      const { expenses } = group[0][0];
      expenses.push(newExpense)

      connection.execute('UPDATE groupList SET expenses = ? WHERE id = ?', [JSON.stringify(expenses), groupId])
        .then(() => updateBalance(groupId).then(() => getExpense(groupId, id, response)));
    })
    .catch(() => response.status(400).send('Group not found'));
}

export function deleteExpense(groupId: number, expenceId: number, response: Response): void {
  const connection = pool.promise();

  connection.execute('SELECT expenses FROM groupList WHERE id = ?', [groupId])
    .then((group: Group[][]) => { 
      let { expenses } = group[0][0];
      expenses = expenses.filter((expense) => expense.id !== expenceId)
      let newExpenses = JSON.stringify(expenses);

      connection.execute('UPDATE groupList SET expenses = ? WHERE id = ?', [newExpenses, groupId])
        .then(() => updateBalance(groupId).then(() => response.send('Expense deleted')))
        .catch(() => response.status(400).send('Expense not found'));
    })
    .catch(() => response.status(400).send('Expense or group not found'));
}

export function getExpenses(groupId: number, response: Response) {
  const connection = pool.promise();

  connection.execute('SELECT * FROM groupList WHERE id = ?', [groupId])
    .then((group: Group[][]) => {
      const { expenses } = group[0][0];
      const awaitExpenses = expenses.map((expense) => convertExpenseToGet(expense, group[0][0]))
      Promise.all(awaitExpenses).then((newExpenses) => response.send(newExpenses))
    })
    .catch(() => response.status(400).send('Group not found'));
}

export function getExpense(groupId: number, expenseId: number, response: Response) {
  const connection = pool.promise();

  connection.execute('SELECT * FROM groupList WHERE id = ?', [groupId])
    .then((group: Group[][]) => {
      const { expenses } = group[0][0];
      const desiredExpense = expenses.find((expense: Expense) => expense.id === expenseId);
      if (!desiredExpense) return response.status(400).send('Expense not found');

      convertExpenseToGet(desiredExpense, group[0][0]).then((expense: GetExpense) => response.send(expense));
    })
    .catch(() => response.status(400).send('Expense or group not found'));
}

export function updateExpanse(groupId: number, expenseId: number, expense: Expense, response: Response) {
  const recivedExpense = expense;
  const expenseIsNotExpense = validateExpense(recivedExpense);
  if (expenseIsNotExpense) return response.status(400).send(expenseIsNotExpense);

  const newExpense: Expense = {
    id: expenseId,
    title: recivedExpense.title,
    amount: recivedExpense.amount,
    date: recivedExpense.date,
    by: recivedExpense.by,
    for: recivedExpense.for
  }

  const connection = pool.promise();

  connection.execute('SELECT * FROM groupList WHERE id = ?', [groupId])
    .then((group: Group[][]) => {
      const { expenses } = group[0][0];
      const desiredExpense = expenses.find((expense: Expense) => expense.id === expenseId);
      
      if (!desiredExpense) return addExpense(groupId, expense, response);

      const expensePosition = expenses.indexOf(desiredExpense);
      expenses[expensePosition] = newExpense;
      
      connection.execute('UPDATE groupList SET expenses = ? WHERE id = ?', [JSON.stringify(expenses), groupId])
        .then(() => updateBalance(groupId).then(() => getExpense(groupId, expenseId, response)));
    })
    .catch(() => response.status(400).send('Expense or group not found'));
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