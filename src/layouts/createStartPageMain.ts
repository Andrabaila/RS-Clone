import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';

function createStartPageMain() {
    const langObj = getLangObj();

    document.querySelector('.main')?.remove();

    getHtmlElement({ parent: 'body', tag: 'main', style: ['main', 'main_start-page'] });
    getHtmlElement({ parent: '.main', style: ['main_wrapper'] });
    getHtmlElement({ parent: '.main_wrapper', tag: 'h1', style: ['main_title'], content: langObj.startPageTitle });
    getHtmlElement({
        parent: '.main_wrapper',
        tag: 'p',
        style: ['text', 'text_start-page'],
        content: langObj.startPageText,
    });
    getHtmlElement({ parent: '.main_wrapper', tag: 'button', style: ['button'], content: langObj.startPageButtonNew });
    getHtmlElement({ parent: '.main_wrapper', tag: 'button', style: ['button'], content: langObj.startPageButtonJoin });
}

export default createStartPageMain;
