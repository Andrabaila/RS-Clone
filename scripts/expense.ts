import { pool } from '../data/config';
import { Expense, Group, JsonGroup } from "data/interfaces";
import { jsonGroupToGroup } from './jsonToObject';

export function addExpense(groupId: number, expense: Expense): void {
  pool.query('SELECT * FROM groups WHERE id = ?', groupId, (error: Error, jsonGroup: JsonGroup[]) => {
    if (error) throw error;
    
    let { expenses } = jsonGroupToGroup(jsonGroup[0]);
    expenses.push(expense);
    jsonGroup[0].expenses = JSON.stringify(expenses);
    
    return jsonGroup
  });
}