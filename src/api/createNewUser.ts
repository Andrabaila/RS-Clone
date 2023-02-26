import { ERROR_MESSAGE, API } from '../data/constants';
import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import showMessageWithTimer from '../features/showMessageWithTimer';
// {
//   "name": "Linkoln",
//   "groupList": [
//     1,
//     2
//   ]
// }
async function createNewUser(name: string) {
    const langObj = getLangObj();
    const currency = localStorage.getItem('currency');
    const request = `${API.baseUrl}${API.users}`;
    console.log('Post new User request=', request);

    try {
        const response = await fetch(request, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                name,
                currency,
                photo: '../assets/icons/group_logo.svg',
                users: [
                    {
                        balance: 522,
                        name: 'Linkoln',
                        id: 1,
                    },
                    {
                        balance: 15,
                        name: 'Peter',
                        id: 2,
                    },
                ],
                expenses: [],
            }),
        });
        if (response.status !== 200) {
            const message = getHtmlElement({
                parent: '.main',
                style: ['message'],
                content: langObj.errorMessageAddGroup,
            });
            showMessageWithTimer(message, 3000);
        }
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
}

export default createNewUser;
