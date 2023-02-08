import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import togglePopup from '../features/togglePopup';

function createPopup() {
    const langObj = getLangObj();
    document.querySelector('.shadow')?.remove();
    const shadow = getHtmlElement({ parent: 'body', style: ['shadow'] });
    shadow.addEventListener('click', () => {
        togglePopup();
        window.history.back();
    });
    getHtmlElement({ parent: 'main', style: ['popup'] });
    getHtmlElement({ parent: '.popup', style: ['wrapper', 'wrapper_popup'] });
    const xButton = getHtmlElement({ parent: '.popup', style: ['button', 'button_x'], content: 'x' });
    xButton.addEventListener('click', () => {
        togglePopup();
        window.history.back();
    });
    getHtmlElement({ parent: '.wrapper_popup', tag: 'h1', style: ['popup__title'], content: langObj.addGroupTitle });
    getHtmlElement({ parent: '.wrapper_popup', tag: 'form', style: ['form', 'form_add-group'] });
    (<HTMLInputElement>(
        getHtmlElement({ parent: '.form', tag: 'input', style: ['input', 'input_new-group'] })
    )).placeholder = langObj.placeholderNewGroup;

    getHtmlElement({ parent: '.form', style: ['wrapper', 'wrapper_popup-currency'] });

    getHtmlElement({
        parent: '.wrapper_popup-currency',
        tag: 'button',
        style: ['button', 'button_currency'],
        content: langObj.buttonCurrency,
    }).dataset.hash = 'currency';

    getHtmlElement({
        parent: '.wrapper_popup-currency',
        tag: 'button',
        style: ['button', 'button_currency'],
        content: langObj.currency,
    }).dataset.hash = 'currency';

    getHtmlElement({
        parent: '.wrapper_popup',
        tag: 'button',
        style: ['button'],
        content: langObj.buttonCreate,
    }).dataset.hash = 'overview';
}
export default createPopup;