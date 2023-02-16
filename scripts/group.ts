import { Group, JsonUser, User, UserInGroup } from "../data/interfaces";
import { Response } from "express";
import { pool } from "../data/config";
import { removeGroupFromUser } from "./user";

export async function removeUserFromGroup(userId: number, groupId: number): Promise<Response> {
  const connection = pool.promise();

  return connection.execute('SELECT users FROM groups WHERE id = ?', [groupId])
    .then((group: Group[][]) => {
      let { users } = group[0][0];
      users = users.filter((user) => user.id !== userId);
      return JSON.stringify(users);
    })
    .then((users: JsonUser) => connection.query('UPDATE groups SET users = ? WHERE id = ?', [users, groupId]))
}

export async function removeGroup(groupId: number, response: Response): Promise<void> {
  const connection = pool.promise();
  const awaitGroupDeleteFromUsers: Promise<void>[] = [];

  connection.execute('SELECT users FROM groups WHERE id = ?', [groupId])
    .then((group: Group[][]) => {  
      group[0][0].users.forEach((user: UserInGroup) => {
        awaitGroupDeleteFromUsers.push(removeGroupFromUser(user.id, groupId))
      })
    })

  Promise.allSettled(awaitGroupDeleteFromUsers)
    .then(() => {
      pool.query(
        'DELETE FROM groups WHERE id = ?', 
        groupId, 
        (error: Error) => response.send(error || 'Group deleted')
      )
    }
  );
}

export function getUsersGroup(userId: number, response: Response): void {
  const connection = pool.promise();
  const awaitGroups: Promise<Group[]>[] = [];

  connection.execute('SELECT groups FROM users WHERE id = ?', [userId])
    .then((user: User[][]) => {  
      user[0][0].groups.forEach((groupId) => {
        awaitGroups.push(connection.execute('SELECT * FROM groups WHERE id = ?', [groupId]))
      })
    })
    .then(() => Promise.all(awaitGroups).then((groups: Group[][]) => response.send(groups[0][0])));
}