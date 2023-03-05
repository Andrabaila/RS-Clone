import { GetExpense, GetGroup, User } from './types';

export const groupsArr: GetGroup[] = [];
export const expensesArr: GetExpense[] = [];
export const usersArr: User[] = [];
export const selectedUser: User = { name: 'testName', id: 1, groupList: [] };
