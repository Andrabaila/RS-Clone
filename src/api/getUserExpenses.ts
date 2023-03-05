import { API, ERROR_MESSAGE } from '../data/constants';

export default function getUserExpenses(userId: number) {
    return fetch(`${API.baseUrl}${API.users}/expenses/${localStorage.currentGroup}/${userId}`)
        .then((response) => response.json())
        .then((userExpenses) => userExpenses)
        .catch((err) => {
            console.log(err);
            throw new Error(ERROR_MESSAGE);
        });
}
