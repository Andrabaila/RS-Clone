import { API, ERROR_MESSAGE } from '../data/constants';

export default function joinGroup(id?: string) {
    return fetch(`${API.baseUrl}${API.groups}/user/${id || localStorage.currentGroup}/${localStorage.user}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
        .then((response) => response.status)
        .catch((err) => {
            console.log(err);
            throw new Error(ERROR_MESSAGE);
        });
}
