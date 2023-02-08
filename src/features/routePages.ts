import createMainPage from '../pages/createMainPage';
import createNewGroupPage from '../pages/createNewGroupPage';
import createStartPage from '../pages/createStartPage';
import createJoinGroupPage from '../pages/createJoinGroupPage';

function routePages() {
    const { hash } = window.location;
    const page = hash.split('-')[0];

    switch (page) {
        case '':
            createStartPage();
            break;
        case '#/':
            createMainPage();
            break;
        case '#/new_group':
            createNewGroupPage();
            break;
        case '#/join_group':
            createJoinGroupPage();
            break;
        default:
            createMainPage();
    }
}

export default routePages;
