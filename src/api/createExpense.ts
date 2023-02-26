import { API, ERROR_MESSAGE } from '../data/constants';
import { SendExpense } from '../data/types';

export default async function createExpense(expense: SendExpense) {
    return fetch(`${API.baseUrl}${API.expenses}/${localStorage.currentGroup}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(expense),
    }).catch((err) => {
        console.log(err);
        throw new Error(ERROR_MESSAGE);
    });
}
