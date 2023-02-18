import createFooter from '../layouts/createFooter';
import createStartPageMain from '../layouts/createStartPageMain';
import createPopup from '../layouts/createPopup';
import createShadow from '../components/createShadow';

function createStartPage() {
    document.querySelector('header')?.remove();
    createStartPageMain();

    createFooter();
    createShadow();
    createPopup();
}

export default createStartPage;
