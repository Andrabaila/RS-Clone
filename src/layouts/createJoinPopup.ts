import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import togglePopup from '../features/togglePopup';

function createJoinPopup() {
    const langObj = getLangObj();
    document.querySelector('.shadow')?.remove();
    const shadow = getHtmlElement({ parent: 'body', style: ['shadow'] });
    shadow.addEventListener('click', () => {
        togglePopup();
        window.history.back();
    });

    document.querySelector('.popup')?.remove();
    getHtmlElement({ parent: 'main', style: ['popup'] });
    getHtmlElement({ parent: '.popup', style: ['wrapper', 'wrapper_popup'] });
    const xButton = getHtmlElement({ parent: '.popup', style: ['button', 'button_x'], content: 'x' });
    xButton.addEventListener('click', () => {
        togglePopup();
        window.history.back();
    });
    getHtmlElement({ parent: '.wrapper_popup', tag: 'h1', style: ['popup__title'], content: langObj.joinPageText });
    getHtmlElement({ parent: '.wrapper_popup', tag: 'form', style: ['form', 'form_add-group'] });
    (<HTMLInputElement>(
        getHtmlElement({ parent: '.form', tag: 'input', style: ['input', 'input_new-group'] })
    )).placeholder = langObj.placeholderJoinGroup;

    getHtmlElement({
        parent: '.wrapper_popup',
        tag: 'button',
        style: ['button'],
        content: langObj.buttonJoin,
    }).dataset.hash = 'overview';
}
export default createJoinPopup;
