import createNewUser from '../api/createNewUser';
import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';

function createGreetingMain() {
    const langObj = getLangObj();

    document.querySelector('.main')?.remove();

    getHtmlElement({ parent: 'body', tag: 'main', style: ['main', 'main_new-group-page'] });
    getHtmlElement({ parent: '.main', style: ['main__wrapper', 'main__wrapper_new-group-page'] });
    getHtmlElement({ parent: '.main__wrapper', style: ['main__header'] });
    const buttonCreate = getHtmlElement({
        parent: '.main__header',
        tag: 'button',
        style: ['button', 'button_main-header'],
        content: langObj.createUserButton,
    });

    getHtmlElement({ parent: '.main__wrapper', style: ['wrapper', 'wrapper_input-new-group'] });

    const inputName = <HTMLInputElement>getHtmlElement({
        parent: '.wrapper_input-new-group',
        tag: 'input',
        style: ['input', 'input_new-group'],
    });
    inputName.placeholder = langObj.placeholderNewGroup;

    buttonCreate.addEventListener('click', () => {
        createNewUser(inputName.value).then((user) => {
            localStorage.user = user.id;
            window.location.hash = '';
        });
    });

    (<HTMLInputElement>document.querySelector('.input')).focus();

    getHtmlElement({
        parent: '.main__wrapper',
        tag: 'p',
        style: ['text', 'text_join-page'],
        content: langObj.createUserGreeting,
    });
}
export default createGreetingMain;
