import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import switchLanguage from '../features/switchLanguage';
import createFooter from './createFooter';

function createInstructionPage() {
    const langObj = getLangObj();
    window.location.hash = '#/instruction';
    document.querySelector('.main')?.remove();

    getHtmlElement({ parent: 'body', tag: 'main', style: ['main', 'main_new-group-page'] });
    getHtmlElement({ parent: '.main', style: ['main__wrapper', 'main__wrapper_new-group-page'] });
    getHtmlElement({ parent: '.main__wrapper', style: ['main__header'] });
    const buttonCreate = getHtmlElement({
        parent: '.main__header',
        tag: 'button',
        style: ['button', 'button_main-header', 'button_back'],
    });

    getHtmlElement({
        parent: '.main__header',
        tag: 'button',
        style: ['button', 'button_language'],
        id: 'startPageButtonLanguage',
        content: langObj.language,
    }).addEventListener('click', () => {
        switchLanguage();
        createInstructionPage();
    });

    buttonCreate.addEventListener('click', () => {
        window.history.back();
    });

    getHtmlElement({
        parent: '.main__wrapper',
        tag: 'p',
        style: ['text', 'text_instruction-page'],
    }).innerHTML = langObj.instructionText;

    createFooter();
}
export default createInstructionPage;
