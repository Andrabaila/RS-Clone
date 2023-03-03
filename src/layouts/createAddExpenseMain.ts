import getGroup from '../api/getGroup';
import getHtmlElement from '../components/getHtmlElement';
import getCurrentDate from '../features/getCurrentDate';
import getLangObj from '../features/getLangObj';
import setExpense from '../features/setExpense';
import toggleText from '../features/toggleText';
import toggleVisibility from '../features/toggleVisibility';

const currentCurrency = localStorage.getItem('currency');
async function createAddPaymentMain() {
    const langObj = getLangObj();

    document.querySelector('.main')?.remove();

    getHtmlElement({ parent: 'body', tag: 'main', style: ['main', 'main_add-payment-page'] });
    getHtmlElement({ parent: '.main', style: ['main__wrapper', 'main__wrapper_add-payment-page'] });
    getHtmlElement({ parent: '.main__wrapper', style: ['main__header'] });
    getHtmlElement({ parent: '.main__header', style: ['main__header-container'] });
    getHtmlElement({
        parent: '.main__header-container',
        tag: 'button',
        style: ['button', 'button_main-header', 'button_back'],
    }).addEventListener('click', () => {
        window.history.back();
    });
    const btnSave = getHtmlElement({
        parent: '.main__header-container',
        tag: 'button',
        style: ['button', 'button_main-header'],
        content: langObj.buttonSave,
    });

    btnSave.addEventListener('click', () => {
        setExpense(true).then(() => {
            window.location.hash = '#/overview';
        });
    });

    getHtmlElement({ parent: '.main__wrapper', tag: 'form', style: ['form_add-payment'] });

    //* ***************************zeros item***********************************

    getHtmlElement({ parent: '.form_add-payment', style: ['form__item_amount'] });
    getHtmlElement({ parent: '.form__item_amount', style: ['form__amount'] });
    getHtmlElement({
        parent: '.form__amount',
        tag: 'span',
        style: ['text', 'text_add-payment'],
        content: langObj.titleExpense,
    });
    const name = getHtmlElement({
        parent: '.form__amount',
        tag: 'input',
        style: ['input', 'input_add-payment'],
    }) as HTMLInputElement;
    name.required = true;
    getHtmlElement({
        parent: '.form__amount',
        tag: 'span',
        style: ['text', 'text_add-payment'],
        content: '',
    });

    //* ***************************first item***********************************

    getHtmlElement({ parent: '.form_add-payment', style: ['form__item_amount'] });
    getHtmlElement({ parent: '.form__item_amount', style: ['form__amount'] });
    getHtmlElement({
        parent: '.form__amount',
        tag: 'span',
        style: ['text', 'text_add-payment'],
        content: langObj.textAmount,
    });
    const amount = getHtmlElement({
        parent: '.form__amount',
        tag: 'input',
        style: ['input', 'input_add-payment'],
    }) as HTMLInputElement;
    amount.required = true;
    getHtmlElement({
        parent: '.form__amount',
        tag: 'span',
        style: ['text', 'text_add-payment'],
        content: '',
    });

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
        content: currentCurrency || 'error LS current currency',
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
    getHtmlElement({
        parent: '.form__from',
        tag: 'select',
        style: ['select', 'select_add-payment'],
    });

    const group = await getGroup();

    group.users.forEach((user) => {
        getHtmlElement({
            parent: '.select',
            tag: 'option',
            style: ['input', 'input_add-payment'],
            content: user.name,
        }).dataset.userId = `${user.id}`;
    });

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
    getHtmlElement({
        parent: '.form__date',
        tag: 'span',
        style: ['text', 'text_add-payment'],
        content: getCurrentDate(),
    });

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
