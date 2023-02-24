import { API, ERROR_MESSAGE } from '../data/constants';
import { usersArr } from '../data/database';
import { User } from '../data/types';

async function getUsers() {
    const request = `${API.baseUrl}${API.users}`;

    try {
        const response = await fetch(request);
        const data = await response.json();

        data.forEach((groupObj: User) => {
            usersArr.push(groupObj);
        });
        return usersArr;
    } catch (err) {
        console.log(err);
        throw new Error(ERROR_MESSAGE);
    }
}

export default getUsers;
