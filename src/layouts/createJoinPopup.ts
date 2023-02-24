import getHtmlElement from '../components/getHtmlElement';
import { groupsArr } from '../data/database';
import { GetGroup } from '../data/types';
import getLangObj from '../features/getLangObj';
import setCurrentGroup from '../features/setCurrentGroup';
import togglePopup from '../features/togglePopup';

function createJoinPopup() {
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
    const xButton = getHtmlElement({ parent: '.popup', style: ['button', 'button_x'] });
    xButton.addEventListener('click', () => {
        togglePopup();
        window.history.back();
    });
    getHtmlElement({ parent: '.wrapper_popup', tag: 'h1', style: ['popup__title'], content: langObj.joinPageText });
    getHtmlElement({ parent: '.wrapper_popup', tag: 'form', style: ['form', 'form_add-group'] });
    const inputCode = <HTMLInputElement>(
        getHtmlElement({ parent: '.form', tag: 'input', style: ['input', 'input_new-group'] })
    );
    inputCode.placeholder = langObj.placeholderJoinGroup;

    const buttonJoin = getHtmlElement({
        parent: '.wrapper_popup',
        tag: 'button',
        style: ['button'],
        content: langObj.buttonJoin,
    });
    buttonJoin.dataset.hash = 'overview';

    buttonJoin.addEventListener('click', () => {
        groupsArr.forEach((groupObj: GetGroup) => {
            if (String(groupObj.id) === inputCode.value) {
                setCurrentGroup(inputCode.value);
            }
        });
    });
}
export default createJoinPopup;
