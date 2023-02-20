import { JsonGroup, User } from "../data/interfaces";
import { pool } from '../data/config';
import { Response } from "express";
import { removeUserFromGroup } from "./group";

export async function removeGroupFromUser(userId: number, groupId: number): Promise<void> {
  const connection = pool.promise();

  connection.execute('SELECT groupList FROM users WHERE id = ?', [userId])
    .then((user: User[][]) => {
      let newGroups = user[0][0].groupList;
      newGroups = newGroups.filter((group) => group !== groupId);
      return JSON.stringify(newGroups);
    })
    .then((groups: JsonGroup) => connection.query('UPDATE users SET groupList = ? WHERE id = ?', [groups, userId]))
}

export async function deleteUser(userId: number, response: Response): Promise<void> {
  const connection = pool.promise();

  connection.query('SELECT * FROM users WHERE id = ?', userId)
    .then((user: User[][]) => {
      const awaitDeleteUsers: Promise<Response>[] = [];
      user[0][0].groupList.forEach((group) => awaitDeleteUsers.push(removeUserFromGroup(userId, group)));

      return awaitDeleteUsers;
    })
    .then((awaitDeleteUsers: Promise<Response>[]) => {
      Promise.allSettled(awaitDeleteUsers)
        .then(() => {
          pool.query('DELETE FROM users WHERE id = ?', userId, (error: Error) => response.send(error || 'User deleted'));
        })
    })
}