import createMainPage from '../pages/createMainPage';
import createStartPage from '../pages/createStartPage';

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
        default:
            createMainPage();
    }
}

export default routePages;
