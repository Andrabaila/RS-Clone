import { GetGroup, User, GetExpense } from './types';
// Person

export const groups: GetGroup[] = [];
export const users: User[] = [];
export const expenses: GetExpense[] = [
    {
        id: 1,
        title: 'за конфеты', // название платежа (пустая строка в случае взаиморасчетов)
        amount: 9, // сумма платежа
        by: { id: 1, name: 'Павел', balance: 20 }, // тот кто купил interface UserInGroup
        //     interface UserInGroup {
        //     id: number;
        //     name: string; // имя человека
        //     balance: number; // текущий баланс
        // }
        for: [
            { id: 1, name: 'Павел', balance: 20 },
            { id: 2, name: 'Саша', balance: 30 },
            { id: 3, name: 'Юра', balance: 50 },
        ], // перечень пользователей для кого купили
        date: 1676359147167, // дата платежа
    },
    {
        id: 2,
        title: '', // пустая строка в случае взаиморасчетов
        amount: 9, // сумма платежа
        by: { id: 1, name: 'Павел', balance: 20 }, // тот кто купил interface UserInGroup
        for: [{ id: 3, name: 'Юра', balance: 50 }], // в случае взаиморасчетов может быть только один юзер
        date: 1676359147167, // дата платежа
    },
];
