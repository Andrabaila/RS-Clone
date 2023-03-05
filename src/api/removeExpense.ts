import { API, ERROR_MESSAGE } from '../data/constants';

export default function removeExpense(expenseId?: string) {
    return fetch(`${API.baseUrl}${API.expenses}/${localStorage.currentGroup}/${expenseId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
        .then((response) => response.status)
        .catch((err) => {
            console.log(err);
            throw new Error(ERROR_MESSAGE);
        });
}
