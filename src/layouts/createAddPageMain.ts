import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import switchLanguage from '../features/switchLanguage';
import createFooter from './createFooter';

function createAddPageMain() {
    const langObj = getLangObj();
    document.querySelector('header')?.remove();

    document.querySelector('.main')?.remove();
    document.querySelector('main')?.remove();
    getHtmlElement({ parent: 'body', tag: 'header', style: ['header_start-page'] });
    getHtmlElement({ parent: 'body', tag: 'main', style: ['main', 'main_start-page'] });
    getHtmlElement({ parent: '.main', style: ['main__wrapper', 'main__wrapper_start-page'] });
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
        id: 'startPageButtonNew',
        content: langObj.startPageButtonNew,
    }).dataset.hash = 'new_group';
    getHtmlElement({
        parent: '.wrapper_start-page-buttons',
        tag: 'button',
        style: ['button', 'button_start-page'],
        id: 'startPageButtonJoin',
        content: langObj.startPageButtonJoin,
    }).dataset.hash = 'join_group';

    getHtmlElement({
        parent: '.header_start-page',
        tag: 'button',
        style: ['button', 'button_language'],
        id: 'startPageButtonLanguage',
        content: langObj.language,
    }).addEventListener('click', () => {
        switchLanguage();
        createAddPageMain();
        createFooter();
    });
}

export default createAddPageMain;
