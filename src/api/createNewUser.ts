import { ERROR_MESSAGE, API } from '../data/constants';
import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import showMessageWithTimer from '../features/showMessageWithTimer';

async function createNewUser(name: string) {
    const langObj = getLangObj();
    const request = `${API.baseUrl}${API.users}`;
    console.log('Post new User request=', request);

    try {
        const response = await fetch(request, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                name,
                groupList: [],
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

        return await response.json();
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
}

export default createNewUser;
