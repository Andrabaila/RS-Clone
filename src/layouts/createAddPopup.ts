import createShadow from '../components/createShadow';
import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';

function createAddPopup() {
    const langObj = getLangObj();
    createShadow();

    document.querySelector('.popup_add')?.remove();
    getHtmlElement({ parent: 'main', style: ['popup', 'popup_add'] });
    getHtmlElement({ parent: '.popup_add', style: ['wrapper', 'wrapper_popup-add'] });

    getHtmlElement({ parent: '.wrapper_popup-add', style: ['popup-add__item'] });
    getHtmlElement({ parent: '.popup-add__item', style: ['popup-add__item-content'] });
    getHtmlElement({
        parent: '.popup-add__item-content',
        tag: 'h3',
        style: ['popup-add__item-title'],
        content: langObj.popupTitleNewExpense,
    });
    getHtmlElement({
        parent: '.popup-add__item-content',
        tag: 'p',
        style: ['popup-add__item-text'],
        content: langObj.popupTextNewExpense,
    });
    getHtmlElement({
        parent: '.popup-add__item',
        tag: 'button',
        style: ['button', 'button_add-light'],
        content: langObj.buttonNewExpense,
    }).dataset.hash = 'add_expense';

    const newPaymentItem = getHtmlElement({ parent: '.wrapper_popup-add', style: ['popup-add__item'] });
    const newPaymentItemContent = getHtmlElement({ parentNode: newPaymentItem, style: ['popup-add__item-content'] });
    getHtmlElement({
        parentNode: newPaymentItemContent,
        tag: 'h3',
        style: ['popup-add__item-title'],
        content: langObj.popupTitleNewPayment,
    });
    getHtmlElement({
        parentNode: newPaymentItemContent,
        tag: 'p',
        style: ['popup-add__item-text'],
        content: langObj.popupTextNewPayment,
    });
    getHtmlElement({
        parentNode: newPaymentItem,
        tag: 'button',
        style: ['button', 'button_add-light'],
        content: langObj.buttonNewPayment,
    }).dataset.hash = 'add_payment';
}
export default createAddPopup;
