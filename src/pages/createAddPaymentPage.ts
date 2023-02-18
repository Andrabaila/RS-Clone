import createAddPaymentMain from '../layouts/createAddPaymentMain';
import createFooter from '../layouts/createFooter';

function createAddPaymentPage() {
    document.querySelector('header')?.remove();
    document.querySelector('.shadow')?.classList.remove('shadow_active');
    createAddPaymentMain();

    createFooter();
}

export default createAddPaymentPage;
