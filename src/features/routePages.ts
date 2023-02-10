import createMainPage from '../pages/createMainPage';
import createNewGroupPage from '../pages/createNewGroupPage';
import createStartPage from '../pages/createStartPage';
import createJoinGroupPage from '../pages/createJoinGroupPage';
import { makeUserPage } from '../layouts/user-page/user-page';

function routePages() {
    const { hash } = window.location;
    const page = hash.split('-')[0];

    switch (page) {
        case '':
            createStartPage();
            break;
        case '#/main':
            createMainPage();
            break;
        case '#/new_group':
            createNewGroupPage();
            break;
        case '#/join_group':
            createJoinGroupPage();
            break;
        case '#/user_page':
            makeUserPage();
            break;
        default:
            createMainPage();
    }
}

export default routePages;
