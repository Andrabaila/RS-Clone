import { MAX_MOBILE_WIDTH } from '../data/constants';
import togglePopup from '../features/togglePopup';
import createFooter from '../layouts/createFooter';
import createJoinGroupMain from '../layouts/createJoinGroupMain';
import createJoinPopup from '../layouts/createJoinPopup';

function createJoinGroupPage() {
    document.querySelector('header')?.remove();
    if (window.innerWidth < MAX_MOBILE_WIDTH) {
        createJoinGroupMain();

        createFooter();
    } else {
        createJoinPopup();
        togglePopup();
    }
}
export default createJoinGroupPage;
