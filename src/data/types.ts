export interface RegularExpressions {
    [index: string]: RegExp;
}

export interface FunctionObject {
    [id: string]: () => void;
}
export interface User {
    id: number;
    groups: number[]; // перечень групп который подключил/создал пользователь
}

export interface Group {
    photo: string; // фото группы
    name: string; // имя группы
    persons: Person[]; // перечень добавленных людей
    expense: Expense[]; // перечень платежей
}

export interface Person {
    id: number;
    name: string; // имя человека
    expenses: Expense[]; // перечень платежей человека
    balance: number; // текущий баланс человека
}

export interface Expense {
    id: number;
    title?: string; // название платежа (необязательное поле)
    amount: number; // сумма платежа
    by: number; // id того кто купил
    for: number[]; // перечень id для кого купили
    date: number; // дата платежа
}

/* Примечание.
  User - пользователь который может просматривать/редактировать группу.
  Person - объект созданный непосредственно в группе, никак не свзязанный с User.
  
  Другими словами: User это любой пользователь который может получить доступ у группе по его id. 
  Persone же это просто объект в группе.
  */
