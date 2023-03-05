import createNewUser from '../api/createNewUser';
import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import togglePopup from '../features/togglePopup';

function createGreetingPopup() {
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
    getHtmlElement({
        parent: '.wrapper_popup',
        tag: 'h1',
        style: ['popup__title'],
        content: langObj.createUserGreeting,
    });
    getHtmlElement({ parent: '.wrapper_popup', tag: 'form', style: ['form', 'form_add-group'] });
    const inputName = <HTMLInputElement>(
        getHtmlElement({ parent: '.form', tag: 'input', style: ['input', 'input_new-group'] })
    );
    inputName.placeholder = langObj.placeholderNewGroup;

    const buttonCreate = getHtmlElement({
        parent: '.wrapper_popup',
        tag: 'button',
        style: ['button'],
        content: langObj.createUserButton,
    });

    buttonCreate.addEventListener('click', () => {
        createNewUser(inputName.value).then(() => {
            window.location.hash = '';
        });
    });
}
export default createGreetingPopup;
