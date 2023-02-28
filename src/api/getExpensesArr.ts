import { API, ERROR_MESSAGE1 } from '../data/constants';
import { expensesArr } from '../data/database';
import { GetExpense } from '../data/types';

async function getExpensesArr() {
    const currentGroupId = localStorage.getItem('currentGroup');
    expensesArr.length = 0;
    const request = `${API.baseUrl}${API.expenses}/${currentGroupId}`;

    try {
        const response = await fetch(request);
        const data = await response.json();

        data.forEach((expenseObj: GetExpense) => {
            expensesArr.push(expenseObj);
        });
        console.log('expensesArrFromApiFUNCgetExpensesArr=', expensesArr);
        return expensesArr;
    } catch (err) {
        console.log(err);
        throw new Error(ERROR_MESSAGE1);
    }
}

export default getExpensesArr;
