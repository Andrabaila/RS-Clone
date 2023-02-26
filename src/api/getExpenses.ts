import { API, ERROR_MESSAGE } from '../data/constants';
import { GetExpense } from '../data/types';

export default async function getExpenses(groupId: number) {
    return fetch(`${API.baseUrl}${API.expenses}/${groupId}`)
        .then((response) => response.json())
        .then((expenses: GetExpense[]) => expenses)
        .catch((err) => {
            console.log(err);
            throw new Error(ERROR_MESSAGE);
        });
}
