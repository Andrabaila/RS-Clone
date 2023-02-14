import { UserInGroup } from "../data/interfaces";
import { pool } from '../data/config';

export function getUserInGroup(id: number): Promise<UserInGroup> {
  return pool.query('SELECT * FROM users WHERE id = ?', id, (error: Error, userInGroup: UserInGroup[]) => {
    if (error) throw error;
    return userInGroup[0];
  })
}