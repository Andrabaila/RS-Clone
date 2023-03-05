import { ERROR_MESSAGE, API } from '../data/constants';
import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import showMessageWithTimer from '../features/showMessageWithTimer';
import { GetGroup, UserInGroup } from '../data/types';

async function renameUserInGroup(newUserName: string, userId: number, group: GetGroup) {
    const langObj = getLangObj();
    const request = `${API.baseUrl}${API.groups}/${group.id}`;
    const newUsersArray: UserInGroup[] = [];
    try {
        group.users.forEach((userObj) => {
            if (userObj.id === userId) {
                newUsersArray.push({
                    id: userObj.id,
                    name: newUserName,
                    balance: userObj.balance,
                });
            } else {
                newUsersArray.push({
                    id: userObj.id,
                    name: userObj.name,
                    balance: userObj.balance,
                });
            }
        });
        const response = await fetch(request, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                id: group.id,
                photo: group.photo,
                name: group.name,
                currency: group.currency,
                users: newUsersArray,
                expenses: group.expenses,
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
        return data;
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
}

export default renameUserInGroup;
