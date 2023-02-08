import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';

function createJoinGroupMain() {
    const langObj = getLangObj();

    document.querySelector('.main')?.remove();

    getHtmlElement({ parent: 'body', tag: 'main', style: ['main', 'main_new-group-page'] });
    getHtmlElement({ parent: '.main', style: ['main__wrapper', 'main__wrapper_new-group-page'] });
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
        content: langObj.buttonJoin,
    }).dataset.hash = 'overview';

    getHtmlElement({ parent: '.main__wrapper', style: ['wrapper', 'wrapper_input-new-group'] });

    const inputCode = <HTMLInputElement>(
        getHtmlElement({ parent: '.wrapper_input-new-group', tag: 'input', style: ['input', 'input_join-group'] })
    );
    inputCode.placeholder = langObj.placeholderJoinGroup;

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
