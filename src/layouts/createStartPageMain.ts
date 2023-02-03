import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';

function createStartPageMain() {
    const langObj = getLangObj();

    document.querySelector('.main')?.remove();

    getHtmlElement({ parent: 'body', tag: 'main', style: ['main', 'main_start-page'] });
    getHtmlElement({ parent: '.main', style: ['main__wrapper', 'main__wrapper_start-page'] });
    getHtmlElement({ parent: '.main__wrapper', tag: 'h1', style: ['main_title'], content: langObj.startPageTitle });
    getHtmlElement({
        parent: '.main__wrapper',
        tag: 'p',
        style: ['text', 'text_start-page'],
        content: langObj.startPageText,
    });
    getHtmlElement({ parent: '.main', style: ['wrapper', 'wrapper_start-page-buttons'] });
    getHtmlElement({
        parent: '.wrapper_start-page-buttons',
        tag: 'button',
        style: ['button', 'button_start-page'],
        content: langObj.startPageButtonNew,
    });
    getHtmlElement({
        parent: '.wrapper_start-page-buttons',
        tag: 'button',
        style: ['button'],
        content: langObj.startPageButtonJoin,
    });
}

export default createStartPageMain;
