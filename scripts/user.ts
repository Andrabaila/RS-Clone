import { JsonUser } from "../data/interfaces";
import { jsonUserToUser } from "./jsonToObject";
import { pool } from '../data/config';

function removeGroupFromUser(userId: number, groupId: number): void {
  pool.query('SELECT * FROM users WHERE id = ?', userId, (error: Error, jsonUser: JsonUser[]) => {
    if (error) throw error;

    let { groups } = jsonUserToUser(jsonUser[0]);
    if (groups.indexOf(groupId) >= 0) groups.splice(groups.indexOf(groupId), 1);
    jsonUser[0].groups = JSON.stringify(groups);

    updateUser(jsonUser[0], userId);
  });
}

function updateUser(newData: JsonUser, id: number): void {
  pool.query('UPDATE users SET ? WHERE id = ?', [newData, id], (error: Error) => {
    if (error) throw error;
  });
}

export {
  removeGroupFromUser,
}