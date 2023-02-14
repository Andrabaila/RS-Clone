import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';

function createAddPaymentMain() {
    const langObj = getLangObj();

    document.querySelector('.main')?.remove();

    getHtmlElement({ parent: 'body', tag: 'main', style: ['main', 'main_add-payment-page'] });
    getHtmlElement({ parent: '.main', style: ['main__wrapper', 'main__wrapper_add-payment-page'] });
    getHtmlElement({ parent: '.main__wrapper', style: ['main__header'] });
    getHtmlElement({
        parent: '.main__header',
        tag: 'button',
        style: ['button', 'button_main-header'],
        content: langObj.buttonBack,
    }).addEventListener('click', () => {
        window.history.back();
    });
    getHtmlElement({
        parent: '.main__header',
        tag: 'button',
        style: ['button', 'button_main-header'],
        content: langObj.buttonCreate,
    }).dataset.hash = 'overview';
}

export default createAddPaymentMain;
