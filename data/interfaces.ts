export interface User {
  id: number;
  name: string; // имя человека
  balance: number; // текущий баланс человека
  groups: number[]; // перечень групп который подключил/создал пользователь
}

export interface JsonUser {
  id: number;
  name: string; // имя человека
  balance: number; // текущий баланс человека
  groups: string; // перечень групп который подключил/создал пользователь
}

export interface Group {
  id: number;
  photo: string; // фото группы
  name: string; // имя группы
  users: number[]; // перечень добавленных людей
  expenses: Expense[]; // перечень платежей
}

export interface JsonGroup {
  id: number;
  photo: string; // фото группы
  name: string; // имя группы
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