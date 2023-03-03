import { ERROR_MESSAGE, API } from '../data/constants';
import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import showMessageWithTimer from '../features/showMessageWithTimer';
import { selectedUser } from '../data/database';

async function renameUser(name: string, groupList: number[], id: number) {
    const langObj = getLangObj();
    const request = `${API.baseUrl}${API.users}/${id}`;

    try {
        const response = await fetch(request, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                name,
                groupList,
                id,
            }),
        });
        if (response.status !== 200) {
            const message = getHtmlElement({
                parent: '.main',
                style: ['message'],
                content: langObj.errorMessageAddNewUser,
            });
            showMessageWithTimer(message, 3000);
        }

        const data = await response.json();
        selectedUser.name = data.name;
        selectedUser.id = data.id;
        selectedUser.groupList.splice(0);
        data.groupList.forEach((groupId: number) => {
            selectedUser.groupList.push(groupId);
        });

        return data;
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
}

export default renameUser;
