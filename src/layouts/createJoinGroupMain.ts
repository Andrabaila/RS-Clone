import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import setCurrentGroup from '../features/setCurrentGroup';
import { groupsArr } from '../data/database';
import { GetGroup } from '../data/types';

function createJoinGroupMain() {
    const langObj = getLangObj();

    document.querySelector('.main')?.remove();

    getHtmlElement({ parent: 'body', tag: 'main', style: ['main', 'main_new-group-page'] });
    getHtmlElement({ parent: '.main', style: ['main__wrapper', 'main__wrapper_new-group-page'] });
    getHtmlElement({ parent: '.main__wrapper', style: ['main__header'] });
    getHtmlElement({
        parent: '.main__header',
        tag: 'button',
        style: ['button', 'button_main-header', 'button_back'],
        content: langObj.buttonBack,
    }).addEventListener('click', () => {
        window.history.back();
    });
    const buttonJoin = getHtmlElement({
        parent: '.main__header',
        tag: 'button',
        style: ['button', 'button_main-header'],
        content: langObj.buttonJoin,
    });
    buttonJoin.dataset.hash = 'overview';

    getHtmlElement({ parent: '.main__wrapper', style: ['wrapper', 'wrapper_input-new-group'] });

    const inputCode = <HTMLInputElement>(
        getHtmlElement({ parent: '.wrapper_input-new-group', tag: 'input', style: ['input', 'input_join-group'] })
    );
    inputCode.placeholder = langObj.placeholderJoinGroup;

    buttonJoin.addEventListener('click', () => {
        groupsArr.forEach((groupObj: GetGroup) => {
            if (String(groupObj.id) === inputCode.value) {
                setCurrentGroup(inputCode.value);
            }
        });
    });

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
