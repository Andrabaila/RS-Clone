import { JsonGroup } from "../data/interfaces";
import { jsonGroupToGroup } from "./jsonToObject";
import { pool } from "../data/config";

function removeUserFromGroup(userId: number, groupId: number): void {
  pool.query('SELECT * FROM groups WHERE id = ?', groupId, (error: Error, jsonGroup: JsonGroup[]) => {
    if (error) throw error;
;
    let { users } = jsonGroupToGroup(jsonGroup[0]);
    if (users.indexOf(userId) >= 0) users.splice(users.indexOf(userId), 1);
    jsonGroup[0].users = JSON.stringify(users);
    
    removeUserFromGroup(userId, groupId);
    updateGroup(jsonGroup[0], groupId);
  });
}

function updateGroup(newData: JsonGroup, id: number): void {
  pool.query('UPDATE groups SET ? WHERE id = ?', [newData, id], (error: Error) => {
    if (error) throw error;
  });
}

export {
  removeUserFromGroup,
}