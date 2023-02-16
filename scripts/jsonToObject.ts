import { Group, JsonGroup, JsonUser, User } from "data/interfaces";

export function jsonGroupToGroup(jsonGroup: JsonGroup): Group {
  const group: Group = {
    ...jsonGroup,
    users: JSON.parse(jsonGroup.users),
    expenses: JSON.parse(jsonGroup.expenses),
  }

  return group;
}

export function jsonUserToUser(jsonUser: JsonUser): User {
  const user: User = {
    ...jsonUser,
    groups: JSON.parse(jsonUser.groups),
  }

  return user;
}

export function groupToJsonGroup(group: Group): JsonGroup {
  const jsonGroup: JsonGroup = {
    ...group,
    users: JSON.stringify(group.users),
    expenses: JSON.stringify(group.expenses),
  }

  return jsonGroup;
}

export function userToJsonUser(user: User): JsonUser {
  const JsonUser: JsonUser = {
    ...user,
    groups: JSON.stringify(user.groups),
  }

  return JsonUser;
}