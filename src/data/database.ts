import { Group, Person, User, Expense } from './types';

export const groups: Group[] = [];
export const users: User[] = [];
export const expenses: Expense[] = [
    {
        id: 1,
        title: 'expense1 title', // название платежа (необязательное поле)
        amount: 100500, // сумма платежа
        by: 1, // id того кто купил
        for: [1], // перечень id для кого купили
        date: 452452, // дата платежа
    },
    {
        id: 2,
        title: 'expense2 title', // название платежа (необязательное поле)
        amount: 100500, // сумма платежа
        by: 1, // id того кто купил
        for: [1], // перечень id для кого купили
        date: 452453, // дата платежа
    },
];
export const persons: Person[] = [
    {
        id: 1,
        name: 'person1 name', // имя человека
        expenses: [
            {
                id: 1,
                title: 'expense title', // название платежа (необязательное поле)
                amount: 100500, // сумма платежа
                by: 1, // id того кто купил
                for: [1], // перечень id для кого купили
                date: 452452, // дата платежа
            },
        ], // перечень платежей человека
        balance: 16, // текущий баланс человека
    },
    {
        id: 2,
        name: 'person2 name', // имя человека
        expenses, // перечень платежей человека
        balance: 15, // текущий баланс человека
    },
];
