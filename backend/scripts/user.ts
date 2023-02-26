import { JsonGroup, User } from "../data/interfaces";
import { Request, Response } from 'express';
import { pool } from '../data/config';
import { removeUserFromGroup } from "./group";
import { userToJsonUser } from "./jsonToObject";

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

async function createId(): Promise<number> {
  const connection = pool.promise();
  const id = Math.floor(Math.random() * (999999999 - 1000 + 1)) + 1000;

  const result = await connection.query('SELECT id FROM users WHERE id = ?', id);

  return result[0].length ? createId() : id;
}

export function getAllUsers(response: Response) {
  pool.query(
    'SELECT * FROM users', 
    (error: Error, users: User[]) => response.send(error || users)
  );
}

export function getUser(request: Request, response: Response) {
  pool.query(
    'SELECT * FROM users WHERE id = ?', 
    request.params.id, 
    (error: Error, user: User[]) => response.send(error || user[0])
  );
}

function isNumberArray(groupList: number[]): boolean {
  if (!Array.isArray(groupList)) return false;
  if (!groupList.every((group: number) => typeof group === 'number')) return false;
  return true;
}

function validateUser(recivedUser: User) {
  if (!recivedUser.hasOwnProperty('name') || !recivedUser.hasOwnProperty('groupList')) return 'Ненайдены поле name или поле groupList';
  if ((typeof recivedUser.name !== 'string') || recivedUser.name.trim().length === 0) return 'Поле name должно быть непустой строкой';
  if (!isNumberArray(recivedUser.groupList)) return 'Поле groupList должно быть пустым массивом или массивом чисел';
}

export function updateUser(request: Request, response: Response): Response<void> | void {
  const recivedUser = request.body;
  const userIsNotUser = validateUser(recivedUser);
  if (userIsNotUser) return response.status(400).send(userIsNotUser);

  const user = {
    id: +request.params.id,
    name: recivedUser.name,
    groupList: recivedUser.groupList,
  }

  pool.query(
    'UPDATE users SET ? WHERE id = ?',
    [userToJsonUser(user), request.params.id],
    (error: Error) => response.send(error || user)
  );
}

export async function createUser(request: Request, response: Response) {
  const recivedUser = request.body;
  const userIsNotUser = validateUser(recivedUser);
  if (userIsNotUser) return response.status(400).send(userIsNotUser);
  const id = await createId();

  const user = {
    id: id,
    name: recivedUser.name,
    groupList: recivedUser.groupList,
  }

  pool.query(
    'INSERT INTO users SET ?', 
    userToJsonUser(user), 
    (error: Error) => response.send(error || user)
  );
}