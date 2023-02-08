import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';

function createNewGroupMain() {
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
        content: langObj.buttonCreate,
    }).dataset.hash = 'overview';

    getHtmlElement({ parent: '.main__wrapper', style: ['wrapper', 'wrapper_input-new-group'] });

    (<HTMLInputElement>(
        getHtmlElement({ parent: '.wrapper_input-new-group', tag: 'input', style: ['input', 'input_new-group'] })
    )).placeholder = langObj.placeholderNewGroup;

    (<HTMLInputElement>document.querySelector('.input')).focus();

    getHtmlElement({ parent: '.main__wrapper', style: ['wrapper', 'wrapper_currency'] });

    getHtmlElement({
        parent: '.wrapper_currency',
        tag: 'button',
        style: ['button', 'button_currency'],
        content: langObj.buttonCurrency,
    }).dataset.hash = 'currency';

    getHtmlElement({
        parent: '.wrapper_currency',
        tag: 'button',
        style: ['button', 'button_currency'],
        content: langObj.currency,
    }).dataset.hash = 'currency';
}
export default createNewGroupMain;
