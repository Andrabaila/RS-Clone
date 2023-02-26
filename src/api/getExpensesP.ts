import { API, ERROR_MESSAGE1 } from '../data/constants';
import { expensesArr } from '../data/database';
import { GetExpense } from '../data/types';

// interface GetExpense {
//   id: number;
//   title?: string; // название платежа (необязательное поле) пустая строка в случае взаиморасчетов!
//   amount: number; // сумма платежа
//   by: UserInGroup; // тот кто купил
//   for: UserInGroup[]; // перечень пользователей для кого купили
//   date: number; // дата платежа
// }

async function getExpensesP() {
    const currentGroupId = localStorage.getItem('currentGroup');
    expensesArr.length = 0;
    const request = `${API.baseUrl}${API.expenses}/${currentGroupId}`;
    console.log('GET_expenses_request=', request);

    try {
        const response = await fetch(request);
        const data = await response.json();

        data.forEach((expenseObj: GetExpense) => {
            expensesArr.push(expenseObj);
        });
        console.log('expensesArr=', expensesArr);
        return expensesArr;
    } catch (err) {
        console.log(err);
        throw new Error(ERROR_MESSAGE1);
    }
}

export default getExpensesP;
