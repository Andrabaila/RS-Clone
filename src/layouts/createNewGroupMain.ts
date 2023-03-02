import createGroup from '../api/createGroup';
import joinGroup from '../api/joinGroup';
import getHtmlElement from '../components/getHtmlElement';
import { GetGroup } from '../data/types';
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
        style: ['button', 'button_main-header', 'button_back'],
    }).addEventListener('click', () => {
        window.history.back();
    });
    const buttonCreate = getHtmlElement({
        parent: '.main__header',
        tag: 'button',
        style: ['button', 'button_main-header'],
        content: langObj.buttonCreate,
    });

    getHtmlElement({ parent: '.main__wrapper', style: ['wrapper', 'wrapper_input-new-group'] });

    const inputName = <HTMLInputElement>getHtmlElement({
        parent: '.wrapper_input-new-group',
        tag: 'input',
        style: ['input', 'input_new-group'],
    });
    inputName.placeholder = langObj.placeholderNewGroup;
    inputName.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && inputName.value !== '') {
            const group = createGroup(inputName.value);

            group.then((newGroup: GetGroup) => {
                localStorage.currentGroup = newGroup.id;
                joinGroup().then(() => {
                    window.location.hash = '/overview';
                });
            });
        }
    });

    buttonCreate.addEventListener('click', () => {
        const group = createGroup(inputName.value);

        group.then((newGroup: GetGroup) => {
            localStorage.currentGroup = newGroup.id;
            joinGroup().then(() => {
                window.location.hash = '/overview';
            });
        });
    });

    (<HTMLInputElement>document.querySelector('.input')).focus();

    getHtmlElement({ parent: '.main__wrapper', style: ['wrapper', 'wrapper_currency'] });

    getHtmlElement({
        parent: '.wrapper_currency',
        tag: 'button',
        style: ['button', 'button_currency'],
        content: langObj.buttonCurrency,
    }).dataset.hash = 'currencies';

    let currency: string | null = localStorage.getItem('currency');
    if (!currency) {
        currency = langObj.currency;
    }
    getHtmlElement({
        parent: '.wrapper_currency',
        tag: 'button',
        style: ['button', 'button_currency'],
        content: currency,
    }).dataset.hash = 'currencies';
}
export default createNewGroupMain;
