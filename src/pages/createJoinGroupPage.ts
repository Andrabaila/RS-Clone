import { MAX_MOBILE_WIDTH } from '../data/constants';
import togglePopup from '../features/togglePopup';
import createFooter from '../layouts/createFooter';
import createJoinGroupMain from '../layouts/createJoinGroupMain';
import createJoinPopup from '../layouts/createJoinPopup';
import createStartPage from './createStartPage';

function createJoinGroupPage() {
    document.querySelector('header')?.remove();
    if (window.innerWidth < MAX_MOBILE_WIDTH) {
        createJoinGroupMain();

        createFooter();
    } else {
        createStartPage();
        createJoinPopup();
        togglePopup('.popup');
    }
}
export default createJoinGroupPage;
