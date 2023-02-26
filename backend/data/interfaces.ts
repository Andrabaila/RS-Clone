export interface User {
  id: number;
  name: string; // имя человека
  groupList: number[]; // перечень групп который подключил/создал пользователь
}

export interface UserSet {
  name: string; // имя человека
  groupList: number[]; // перечень групп который подключил/создал пользователь
}

export interface JsonUser {
  id: number;
  name: string; // имя человека
  groupList: string; // перечень групп который подключил/создал пользователь
}

export interface UserInGroup {
  id: number;
  name: string; // имя человека
  balance: number; // текущий баланс
}

export interface Group {
  id: number;
  photo: string; // фото группы
  name: string; // имя группы
  currency: string; // валюта
  users: UserInGroup[]; // перечень добавленных людей
  expenses: Expense[]; // перечень платежей
}

export interface JsonGroup {
  id: number;
  photo: string; // фото группы
  name: string; // имя группы
  currency: string; // валюта
  users: string; // перечень добавленных людей
  expenses: string; // перечень платежей
}

export interface Expense {
  id: number;
  title?: string; // название платежа (необязательное поле)
  amount: number; // сумма платежа
  by: number; // id того кто купил
  for: number[]; // перечень id для кого купили
  date: number; // дата платежа
}

export interface UserInGroup {
  id: number;
  name: string; // имя человека
  balance: number; // текущий баланс
}

export interface SendGroup { // отправляете на сервер
  id: number;
  photo: string; // фото группы
  name: string; // имя группы
  currency: string; // валюта
  users: number[]; // перечень id добавленных людей
  expenses: number[]; // перечень id платежей
}

export interface GetGroup { // получаете с сервера
  id: number;
  photo: string; // фото группы
  name: string; // имя группы
  currency: string; // валюта
  users: UserInGroup[]; // перечень добавленных людей
  expenses: GetExpense[]; // перечень платежей
}

export interface SendExpense { // отправляете на сервер
  id: number;
  title?: string; // название платежа (необязательное поле)
  amount: number; // сумма платежа
  by: number; // id того кто купил
  for: number[]; // перечень id для кого купили
  date: number; // дата платежа
}

export interface GetExpense { // получаете с сервера
  id: number;
  title?: string; // название платежа (необязательное поле)
  amount: number; // сумма платежа
  by: UserInGroup; // тот кто купил
  for: UserInGroup[]; // перечень пользователей для кого купили
  date: number; // дата платежа
}