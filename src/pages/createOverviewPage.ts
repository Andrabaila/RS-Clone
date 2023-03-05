import createFooter from '../layouts/createFooter';
import createInvitePopup from '../layouts/createInvitePopup';
import createOverviewMain from '../layouts/createOverviewMain';
import createHeader from '../layouts/header/header';
import { addFocusedToBtn } from '../features/tools';
import createShadow from '../components/createShadow';
import createAddPopup from '../layouts/createAddPopup';

function createOverviewPage() {
    document.querySelector('.shadow')?.remove();
    document.querySelector('header')?.remove();
    document.querySelector('main')?.remove(); // Добавил Павел для удаления накладывания нового HTML на новый в области main
    createShadow();
    createHeader();
    addFocusedToBtn('.header__btn-wrapper', '.button-overview');
    createOverviewMain();

    createFooter();
    createInvitePopup();
    createAddPopup();
}
export default createOverviewPage;
