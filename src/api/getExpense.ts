import { API, ERROR_MESSAGE } from '../data/constants';
import { GetExpense } from '../data/types';

export default async function getExpense(expenseId: string) {
    return fetch(`${API.baseUrl}${API.expenses}/${localStorage.currentGroup}/${expenseId}`)
        .then((response) => response.json())
        .then((expense: GetExpense) => expense)
        .catch((err) => {
            console.log(err);
            throw new Error(ERROR_MESSAGE);
        });
}
