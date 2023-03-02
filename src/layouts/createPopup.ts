import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import togglePopup from '../features/togglePopup';
import createGroup from '../api/createGroup';
import joinGroup from '../api/joinGroup';
import { GetGroup } from '../data/types';

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
    const xButton = getHtmlElement({ parent: '.popup', style: ['button', 'button_x'] });
    xButton.addEventListener('click', () => {
        togglePopup();
        window.history.back();
    });
    getHtmlElement({ parent: '.wrapper_popup', tag: 'h1', style: ['popup__title'], content: langObj.addGroupTitle });
    getHtmlElement({ parent: '.wrapper_popup', tag: 'form', style: ['form', 'form_add-group'] });
    const inputName = <HTMLInputElement>(
        getHtmlElement({ parent: '.form', tag: 'input', style: ['input', 'input_new-group'] })
    );
    inputName.placeholder = langObj.placeholderNewGroup;
    inputName.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && inputName.value !== '') {
            event.preventDefault();
            const group = createGroup(inputName.value);

            group.then((newGroup: GetGroup) => {
                localStorage.currentGroup = newGroup.id;
                joinGroup().then(() => {
                    window.location.hash = '/overview';
                });
            });
        }
    });
    getHtmlElement({ parent: '.form', style: ['wrapper', 'wrapper_popup-currency'] });

    getHtmlElement({
        parent: '.wrapper_popup-currency',
        tag: 'button',
        style: ['button', 'button_currency'],
        content: langObj.buttonCurrency,
    }).dataset.hash = 'currencies';

    let currency: string | null = localStorage.getItem('currency');
    if (!currency) {
        currency = langObj.currency;
    }
    getHtmlElement({
        parent: '.wrapper_popup-currency',
        tag: 'button',
        style: ['button', 'button_currency'],
        content: currency,
    }).dataset.hash = 'currencies';

    const buttonCreate = getHtmlElement({
        parent: '.wrapper_popup',
        tag: 'button',
        style: ['button'],
        content: langObj.buttonCreate,
    });
    buttonCreate.addEventListener('click', () => {
        const group = createGroup(inputName.value);

        group.then((newGroup: GetGroup) => {
            localStorage.currentGroup = newGroup.id;
            joinGroup().then(() => {
                window.location.hash = '/overview';
            });
        });
    });
}
export default createPopup;
