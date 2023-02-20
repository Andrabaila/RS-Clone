import { ERROR_MESSAGE, API } from '../data/constants';
import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import showMessageWithTimer from '../features/showMessageWithTimer';

async function createGroup(name: string) {
    const langObj = getLangObj();
    const currency = localStorage.getItem('currency');
    const request = `${API.baseUrl}${API.groups}`;

    try {
        const response = await fetch(request, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                name,
                currency,
                photo: '../assets/icons/group_logo.svg',
                users: [],
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

export default createGroup;
