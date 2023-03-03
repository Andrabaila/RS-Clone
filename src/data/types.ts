export interface RegularExpressions {
    [index: string]: RegExp;
}

export interface FunctionObject {
    [id: string]: () => void;
}

export interface User {
    id: number;
    name: string; // имя человека
    groupList: number[]; // перечень групп который подключил/создал пользователь
}

export interface SendUser {
    name: string; // имя человека
    groups: number[]; // перечень групп который подключил/создал пользователь
}

export interface UserInGroup {
    id: number;
    name: string; // имя человека
    balance: number; // текущий баланс
}

// отправляете на сервер
export interface SendGroup {
    id: number;
    photo: string; // фото группы
    name: string; // имя группы
    currency: string; // валюта
    users: number[]; // перечень id добавленных людей
    expenses: number[]; // перечень id платежей
}

// получаете с сервера
export interface GetGroup {
    id: number;
    photo: string; // фото группы
    name: string; // имя группы
    currency: string; // валюта
    users: UserInGroup[]; // перечень добавленных людей
    expenses: GetExpense[]; // перечень платежей
}

// отправляете на сервер
export interface SendExpense {
    title?: string; // название платежа (необязательное поле)
    amount: number; // сумма платежа
    by: number; // id того кто купил
    for: number[]; // перечень id для кого купили
    date: number; // дата платежа
}

// получаете с сервера
export interface GetExpense {
    id: number;
    title?: string; // название платежа (необязательное поле) пустая строка в случае взаиморасчетов!
    amount: number; // сумма платежа
    by: UserInGroup; // тот кто купил
    for: UserInGroup[]; // перечень пользователей для кого купили
    date: number; // дата платежа
}

export interface CurrencyObj {
    [index: string]: string | number;
}
