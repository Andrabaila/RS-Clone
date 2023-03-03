import { API, ERROR_MESSAGE } from '../data/constants';
import { selectedUser } from '../data/database';

async function getUser(id: string) {
    const request = `${API.baseUrl}${API.users}/${id}`;

    try {
        const response = await fetch(request);
        const data = await response.json();

        selectedUser.name = data.name;
        selectedUser.id = data.id;
        selectedUser.groupList.splice(0);
        data.groupList.forEach((groupId: number) => {
            selectedUser.groupList.push(groupId);
        });
        return selectedUser;
    } catch (err) {
        console.log(err);
        throw new Error(ERROR_MESSAGE);
    }
}

export default getUser;
