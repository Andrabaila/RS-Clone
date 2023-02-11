import createFooter from '../layouts/createFooter';
import createInvitePopup from '../layouts/createInvitePopup';
import createOverviewMain from '../layouts/createOverviewMain';
import createHeader from '../layouts/header/header';

function createOverviewPage() {
    document.querySelector('.shadow')?.remove();
    createHeader();
    createOverviewMain();

    createFooter();
    createInvitePopup();
}
export default createOverviewPage;
