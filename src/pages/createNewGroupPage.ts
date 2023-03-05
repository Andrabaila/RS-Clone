import { MAX_MOBILE_WIDTH } from '../data/constants';
import togglePopup from '../features/togglePopup';
import createFooter from '../layouts/createFooter';
import createNewGroupMain from '../layouts/createNewGroupMain';
import createStartPage from './createStartPage';

function createNewGroupPage() {
    document.querySelector('header')?.remove();
    document.querySelector('main')?.remove(); // Добавил Павел для удаления накладывания нового HTML на новый в области main
    if (window.innerWidth < MAX_MOBILE_WIDTH) {
        createNewGroupMain();

        createFooter();
    } else {
        createStartPage();
        togglePopup('.popup');
    }
}
export default createNewGroupPage;
