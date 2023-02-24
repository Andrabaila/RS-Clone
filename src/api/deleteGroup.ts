import { ERROR_MESSAGE, API } from '../data/constants';
import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import showMessageWithTimer from '../features/showMessageWithTimer';

async function deleteGroup(groupId: string) {
    const langObj = getLangObj();
    const request = `${API.baseUrl}${API.groups}/${groupId}`;

    try {
        const response = await fetch(request, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
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

export default deleteGroup;
