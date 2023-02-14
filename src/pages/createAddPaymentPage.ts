import createAddPaymentMain from '../layouts/createAddPaymentMain';
import createAddPaymentPopup from '../layouts/createAddPaymentPopup';
import createFooter from '../layouts/createFooter';

function createAddPaymentPage() {
    document.querySelector('header')?.remove();
    createAddPaymentMain();

    createFooter();
    createAddPaymentPopup();
}

export default createAddPaymentPage;
