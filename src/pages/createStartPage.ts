import createFooter from '../layouts/createFooter';
import createStartPageMain from '../layouts/createStartPageMain';
import createPopup from '../layouts/createPopup';

function createStartPage() {
    document.querySelector('header')?.remove();
    createStartPageMain();

    createFooter();

    createPopup();
}

export default createStartPage;
