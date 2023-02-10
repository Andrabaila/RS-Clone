import { MAX_MOBILE_WIDTH } from '../data/constants';
import togglePopup from '../features/togglePopup';
import createFooter from '../layouts/createFooter';
import createNewGroupMain from '../layouts/createNewGroupMain';

function createNewGroupPage() {
    document.querySelector('header')?.remove();
    if (window.innerWidth < MAX_MOBILE_WIDTH) {
        createNewGroupMain();

        createFooter();
    } else {
        togglePopup();
    }
}
export default createNewGroupPage;
