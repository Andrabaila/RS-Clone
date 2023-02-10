import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import showMessageWithTimer from '../features/showMessageWithTimer';
import togglePopup from '../features/togglePopup';

function createInvitePopup() {
    const langObj = getLangObj();
    document.querySelector('.shadow')?.remove();
    const shadow = getHtmlElement({ parent: 'body', style: ['shadow'] });
    shadow.addEventListener('click', () => {
        togglePopup();
    });

    document.querySelector('.popup')?.remove();
    getHtmlElement({ parent: 'main', style: ['popup', 'popup_invite'] });
    getHtmlElement({ parent: '.popup', style: ['wrapper', 'wrapper_popup'] });

    const code = getHtmlElement({
        parent: '.wrapper_popup',
        tag: 'h1',
        style: ['popup__title', 'popup__title_invite'],
        content: langObj.placeholderJoinGroup,
    });
    getHtmlElement({ parent: '.wrapper_popup', tag: 'p', style: ['text', 'text_invite'], content: langObj.inviteText });
    getHtmlElement({
        parent: '.wrapper_popup',
        tag: 'button',
        style: ['button', 'button_copy'],
        content: langObj.buttonCopy,
    }).addEventListener('click', () => {
        if (code.textContent) {
            navigator.clipboard.writeText(code.textContent);
            const message = getHtmlElement({ parent: '.main', style: ['message'], content: langObj.confirmingMessage });
            showMessageWithTimer(message, 2000);
        }
        togglePopup();
    });
    getHtmlElement({
        parent: '.wrapper_popup',
        tag: 'button',
        style: ['button', 'button_later'],
        content: langObj.buttonLater,
    }).addEventListener('click', togglePopup);
}
export default createInvitePopup;
