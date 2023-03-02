import joinGroup from '../api/joinGroup';
import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import setCurrentGroup from '../features/setCurrentGroup';
import showMessageWithTimer from '../features/showMessageWithTimer';
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
    const xButton = getHtmlElement({ parent: '.popup', style: ['button', 'button_x'] });
    xButton.addEventListener('click', () => {
        togglePopup();
        window.history.back();
    });
    getHtmlElement({ parent: '.wrapper_popup', tag: 'h1', style: ['popup__title'], content: langObj.joinPageText });
    getHtmlElement({ parent: '.wrapper_popup', tag: 'form', style: ['form', 'form_add-group'] });
    const inputCode = <HTMLInputElement>(
        getHtmlElement({ parent: '.form', tag: 'input', style: ['input', 'input_new-group'] })
    );
    inputCode.placeholder = langObj.placeholderJoinGroup;

    const buttonJoin = getHtmlElement({
        parent: '.wrapper_popup',
        tag: 'button',
        style: ['button'],
        content: langObj.buttonJoin,
    });

    buttonJoin.addEventListener('click', () => {
        joinGroup(inputCode.value)
            .then((status) => {
                if (status === 200) {
                    setCurrentGroup(inputCode.value);
                    window.location.hash = '#/overview';
                } else {
                    throw new Error();
                }
            })
            .catch(() => {
                document.querySelector('.message')?.remove();
                const message = getHtmlElement({
                    parent: '.main',
                    style: ['message'],
                    content: `${langObj.noGroupMessage}${inputCode.value}`,
                });
                showMessageWithTimer(message, 3000);
            });
    });

    inputCode.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && inputCode.value !== '') {
            event.preventDefault();
            joinGroup(inputCode.value)
                .then((status) => {
                    if (status === 200) {
                        setCurrentGroup(inputCode.value);
                        window.location.hash = '#/overview';
                    } else {
                        throw new Error();
                    }
                })
                .catch(() => {
                    document.querySelector('.message')?.remove();
                    const message = getHtmlElement({
                        parent: '.main',
                        style: ['message'],
                        content: `${langObj.noGroupMessage}${inputCode.value}`,
                    });
                    showMessageWithTimer(message, 3000);
                });
        }
    });
}
export default createJoinPopup;
