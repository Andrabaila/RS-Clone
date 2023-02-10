import createMainPage from '../pages/createMainPage';
import createNewGroupPage from '../pages/createNewGroupPage';
import createStartPage from '../pages/createStartPage';
import createJoinGroupPage from '../pages/createJoinGroupPage';
import createOverviewPage from '../pages/createOverviewPage';

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
        case '#/overview':
            createOverviewPage();
            break;
        default:
            createMainPage();
    }
}

export default routePages;
