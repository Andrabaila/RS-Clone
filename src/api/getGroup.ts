import { API, ERROR_MESSAGE } from '../data/constants';
import { GetGroup } from '../data/types';

export default function getGroup() {
    return fetch(`${API.baseUrl}${API.groups}/${localStorage.currentGroup}`)
        .then((response) => response.json())
        .then((group: GetGroup) => group)
        .catch((err) => {
            console.log(err);
            throw new Error(ERROR_MESSAGE);
        });
}
