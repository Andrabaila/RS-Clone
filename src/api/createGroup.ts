import { ERROR_MESSAGE, API } from '../data/constants';
import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import showMessageWithTimer from '../features/showMessageWithTimer';
import { GetGroup } from '../data/types';

export default async function createGroup(name: string) {
    const langObj = getLangObj();
    const currency = localStorage.getItem('currency');

    return fetch(`${API.baseUrl}${API.groups}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({
            name,
            currency,
            photo: '../assets/icons/group_logo.svg',
            users: [],
            expenses: [],
        }),
    })
        .then((response) => {
            if (response.status !== 200) {
                const message = getHtmlElement({
                    parent: '.main',
                    style: ['message'],
                    content: langObj.errorMessageAddGroup,
                });
                showMessageWithTimer(message, 3000);
            }

            return response.json();
        })
        .then((group: GetGroup) => group)
        .catch((err) => {
            console.log(err);
            throw new Error(ERROR_MESSAGE);
        });
}
