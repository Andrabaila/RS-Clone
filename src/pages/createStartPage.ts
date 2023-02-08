import createFooter from '../layouts/createFooter';
import createStartPageMain from '../layouts/createStartPageMain';
import createPopup from '../layouts/createPopup';

function createStartPage() {
    createStartPageMain();

    createFooter();

    createPopup();
}

export default createStartPage;
