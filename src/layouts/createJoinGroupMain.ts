import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import setCurrentGroup from '../features/setCurrentGroup';
import showMessageWithTimer from '../features/showMessageWithTimer';
import joinGroup from '../api/joinGroup';

function createJoinGroupMain() {
    const langObj = getLangObj();

    document.querySelector('.main')?.remove();

    getHtmlElement({ parent: 'body', tag: 'main', style: ['main', 'main_new-group-page'] });
    getHtmlElement({ parent: '.main', style: ['main__wrapper', 'main__wrapper_new-group-page'] });
    getHtmlElement({ parent: '.main__wrapper', style: ['main__header'] });
    getHtmlElement({
        parent: '.main__header',
        tag: 'button',
        style: ['button', 'button_main-header', 'button_back'],
    }).addEventListener('click', () => {
        window.history.back();
    });
    const buttonJoin = getHtmlElement({
        parent: '.main__header',
        tag: 'button',
        style: ['button', 'button_main-header'],
        content: langObj.buttonJoin,
    });

    getHtmlElement({ parent: '.main__wrapper', style: ['wrapper', 'wrapper_input-new-group'] });

    const inputCode = <HTMLInputElement>(
        getHtmlElement({ parent: '.wrapper_input-new-group', tag: 'input', style: ['input', 'input_join-group'] })
    );
    inputCode.placeholder = langObj.placeholderJoinGroup;
    inputCode.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && inputCode.value !== '') {
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

    inputCode.focus();
    inputCode.type = 'number';
    inputCode.maxLength = 6;

    getHtmlElement({
        parent: '.main__wrapper',
        tag: 'p',
        style: ['text', 'text_join-page'],
        content: langObj.joinPageText,
    });
}
export default createJoinGroupMain;
