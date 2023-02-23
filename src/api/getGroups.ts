import { API, ERROR_MESSAGE } from '../data/constants';
import { groupsArr } from '../data/database';
import { GetGroup } from '../data/types';

async function getGroups() {
    const request = `${API.baseUrl}${API.groups}`;

    try {
        const response = await fetch(request);
        const data = await response.json();

        data.forEach((groupObj: GetGroup) => {
            groupsArr.push(groupObj);
        });

        return groupsArr;
    } catch (err) {
        console.log(err);
        throw new Error(ERROR_MESSAGE);
    }
}

export default getGroups;
