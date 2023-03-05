import createFooter from '../layouts/createFooter';
import createAddPageMain from '../layouts/createAddPageMain';
import createPopup from '../layouts/createPopup';
import createShadow from '../components/createShadow';

function createAddPage() {
    document.querySelector('header')?.remove();
    createAddPageMain();

    createFooter();
    createShadow();
    createPopup();
}

export default createAddPage;
