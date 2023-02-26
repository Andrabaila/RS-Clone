import { Group, JsonUser, User, UserInGroup } from "../data/interfaces";
import { Response, Request } from "express";
import { pool } from "../data/config";
import { removeGroupFromUser } from "./user";
import { groupToJsonGroup, userToJsonUser } from "./jsonToObject";

export async function removeUserFromGroup(userId: number, groupId: number): Promise<Response> {
  const connection = pool.promise();

  return connection.execute('SELECT users FROM groupList WHERE id = ?', [groupId])
    .then((group: Group[][]) => {
      let { users } = group[0][0];
      users = users.filter((user) => user.id !== userId);
      return JSON.stringify(users);
    })
    .then((users: JsonUser) => connection.query('UPDATE groupList SET users = ? WHERE id = ?', [users, groupId]))
}

export async function addUserForGroup(request: Request, response: Response) {
  const userId = request.params.userId;
  const groupId = request.params.groupId;
  const connection = pool.promise();

  const userInGroup = await connection.execute('SELECT * FROM users WHERE id = ?', [userId])
    .then((user: User[][]) => user[0][0])
    .then((user: User) => {
      const userInGroup: UserInGroup = {
        id: user.id,
        name: user.name,
        balance: 0
      }

      if (user.groupList.includes(+groupId)) return "User is already in group";

      user.groupList.push(+groupId);

      pool.query(
        'UPDATE users SET ? WHERE id = ?',
        [userToJsonUser(user), userId]
      );

      return userInGroup;
    })

  if (typeof userInGroup === 'string') return response.status(400).send(userInGroup);
  
  const group = await connection.execute('SELECT * FROM groupList WHERE id = ?', [groupId])
    .then((group: Group[][]) => {
      group[0][0].users.push(userInGroup)
      return group[0][0];
    })

  pool.query(
    'UPDATE groupList SET ? WHERE id = ?', 
    [groupToJsonGroup(group), groupId], 
    (error: Error) => response.send(error || 'User added to group')
  );
}

export async function deleteUserFromGroup(request: Request, response: Response) {
  const userId = +request.params.userId;
  const groupId = +request.params.groupId;
  const connection = pool.promise();

  await connection.execute('SELECT * FROM users WHERE id = ?', [userId])
    .then((user: User[][]) => user[0][0])
    .then((user: User) => {
      user.groupList = user.groupList.filter((id) => id !== groupId);

      pool.query(
        'UPDATE users SET ? WHERE id = ?',
        [userToJsonUser(user), userId]
      );
    })
  
  removeUserFromGroup(userId, groupId)
    .then(() => response.send('User removed from group'));
}

export async function removeGroup(groupId: number, response: Response): Promise<void> {
  const connection = pool.promise();
  const awaitGroupDeleteFromUsers: Promise<void>[] = [];

  connection.execute('SELECT users FROM groupList WHERE id = ?', [groupId])
    .then((group: Group[][]) => {  
      group[0][0].users.forEach((user: UserInGroup) => {
        awaitGroupDeleteFromUsers.push(removeGroupFromUser(user.id, groupId))
      })
    })

  Promise.allSettled(awaitGroupDeleteFromUsers)
    .then(() => {
      pool.query(
        'DELETE FROM groupList WHERE id = ?', 
        groupId, 
        (error: Error) => response.send(error || 'Group deleted')
      )
    }
  );
}

function validateGroup(group: Group): string | void {
  const fields = ['name', 'photo', 'currency', 'expenses', 'users'];

  for (let i = 0; i < fields.length; i++) {
    if (!group.hasOwnProperty(fields[i])) return `Отсутствует поле ${fields[i]}`;
  }

  if (typeof group.name !== 'string' || group.name.trim().length === 0) return 'Поле name должно быть не пустой строкой';
  if (typeof group.photo !== 'string' || group.photo.trim().length === 0) return 'Поле photo должно быть не пустой строкой';
  if (typeof group.currency !== 'string' || group.currency.trim().length === 0) return 'Поле currency должно быть не пустой строкой';
  if (!Array.isArray(group.expenses)) return 'Поле expenses должно быть массивом';
  if (!Array.isArray(group.users)) return 'Поле users должно быть пустым массивом или массивом чисел';
}

async function createId(): Promise<number> {
  const connection = pool.promise();
  const id = Math.floor(Math.random() * (999999999 - 1000 + 1)) + 1000;

  const result = await connection.query('SELECT id FROM groupList WHERE id = ?', id);

  return result[0].length ? createId() : id;
}

export function getGroup(request: Request, response: Response): void {
  pool.query(
    'SELECT * FROM groupList WHERE id = ?',
    request.params.id,
    (error: Error, group: Group[]) => response.send(error || group[0])
  );
}

export function getAllGroups(response: Response): void {
  pool.query(
    'SELECT * FROM groupList',
    (error: Error, groups: Group[]) => response.send(error || groups)
  );
}

export async function createGroup(request: Request, response: Response) {
  const recivedGroup: Group = request.body;
  const groupIsNotGroup = validateGroup(recivedGroup);
  if (groupIsNotGroup) return response.status(400).send(groupIsNotGroup);
  const id = await createId();

  const group: Group = {
    id: id,
    name: recivedGroup.name,
    photo: recivedGroup.photo,
    currency: recivedGroup.currency,
    users: recivedGroup.users,
    expenses: recivedGroup.expenses
  }

  pool.query(
    'INSERT INTO groupList SET ?',
    groupToJsonGroup(group), 
    (error: Error) => response.send(error || group)
  );
}

export function updateGroup(request: Request, response: Response) {
  const recivedGroup: Group = request.body;
  const groupIsNotGroup = validateGroup(recivedGroup);
  if (groupIsNotGroup) return response.status(400).send(groupIsNotGroup);

  const group: Group = {
    id: +request.params.id,
    name: recivedGroup.name,
    photo: recivedGroup.photo,
    currency: recivedGroup.currency,
    users: recivedGroup.users,
    expenses: recivedGroup.expenses
  }
  
  pool.query(
    'UPDATE groupList SET ? WHERE id = ?', 
    [groupToJsonGroup(group), request.params.id], 
    (error: Error) => response.send(error || group)
  );
} 

export function getUsersGroup(userId: number, response: Response): void {
  const connection = pool.promise();
  const awaitGroups: Promise<Group[]>[] = [];

  connection.execute('SELECT groupList FROM users WHERE id = ?', [userId])
    .then((user: User[][]) => {  
      user[0][0].groupList.forEach((groupId) => {
        awaitGroups.push(connection.execute('SELECT * FROM groupList WHERE id = ?', [groupId]))
      })
    })
    .then(() => Promise.all(awaitGroups).then((groups: Group[][]) => response.send(groups[0][0])));
}