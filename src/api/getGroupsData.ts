import { API, ERROR_MESSAGE } from '../data/constants';

async function getGroupsData() {
    const request = `${API.baseUrl}${API.groups}`;

    try {
        const response = await fetch(request);
        const data = await response.json();

        return data;
    } catch (err) {
        console.log(err);
        throw new Error(ERROR_MESSAGE);
    }
}

export default getGroupsData;
