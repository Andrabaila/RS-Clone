import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import toggleText from '../features/toggleText';
import toggleVisibility from '../features/toggleVisibility';

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
        content: langObj.buttonSave,
    }).dataset.hash = 'overview';

    getHtmlElement({ parent: '.main__wrapper', tag: 'form', style: ['form_add-payment'] });

    //* ***************************first item***********************************

    getHtmlElement({ parent: '.form_add-payment', style: ['form__item_amount'] });
    getHtmlElement({ parent: '.form__item_amount', style: ['form__amount'] });
    getHtmlElement({
        parent: '.form__amount',
        tag: 'span',
        style: ['text', 'text_add-payment'],
        content: langObj.textAmount,
    });
    getHtmlElement({ parent: '.form__amount', tag: 'input', style: ['input', 'input_add-payment'] });
    getHtmlElement({ parent: '.form__amount', tag: 'span', style: ['text', 'text_add-payment'], content: 'Br' });

    const currencyItem = getHtmlElement({
        parent: '.form__item_amount',
        style: ['form__currency', 'hidden', 'invisible', 'absolute'],
    });
    getHtmlElement({
        parent: '.form__currency',
        tag: 'span',
        style: ['text', 'text_add-payment'],
        content: langObj.textCurrency,
    });
    getHtmlElement({
        parent: '.form__currency',
        tag: 'span',
        style: ['text', 'text_add-payment'],
        content: 'Br (BYN)',
    });

    //* ***************************second item***********************************

    getHtmlElement({ parent: '.form_add-payment', style: ['form__item_from-to'] });
    getHtmlElement({ parent: '.form__item_from-to', style: ['form__from'] });
    getHtmlElement({
        parent: '.form__from',
        tag: 'span',
        style: ['text', 'text_add-payment'],
        content: langObj.textFrom,
    });
    getHtmlElement({ parent: '.form__from', tag: 'span', style: ['text', 'text_add-payment'], content: 'One' });

    getHtmlElement({ parent: '.form__item_from-to', style: ['form__to'] });
    getHtmlElement({
        parent: '.form__to',
        tag: 'span',
        style: ['text', 'text_add-payment'],
        content: langObj.textTo,
    });
    getHtmlElement({ parent: '.form__to', tag: 'span', style: ['text', 'text_add-payment'], content: 'Another' });

    //* ***************************third item***********************************

    const dateItem = getHtmlElement({
        parent: '.form_add-payment',
        style: ['form__item_date', 'hidden', 'invisible', 'absolute'],
    });
    getHtmlElement({ parent: '.form__item_date', style: ['form__date'] });
    getHtmlElement({
        parent: '.form__date',
        tag: 'span',
        style: ['text', 'text_add-payment'],
        content: langObj.textDate,
    });
    getHtmlElement({ parent: '.form__date', tag: 'span', style: ['text', 'text_add-payment'], content: '18.02.2023' });

    const buttonMore = getHtmlElement({
        parent: '.main__wrapper',
        tag: 'button',
        style: ['button', 'button_overview'],
        content: langObj.buttonMore,
    });

    buttonMore.dataset.text = langObj.buttonLess;

    buttonMore.addEventListener('click', () => {
        toggleVisibility([currencyItem, dateItem]);
        toggleText(buttonMore);
    });
}

export default createAddPaymentMain;
