import getHtmlElement from '../components/getHtmlElement';
import getLangObj from '../features/getLangObj';
import togglePopup from '../features/togglePopup';
import { UserInGroup } from '../data/types';
import { roundTwoDigitsAfter } from '../features/tools';
import getGroup from '../api/getGroup';

async function createOverviewMain() {
    const langObj = getLangObj();
    let currentGroupUsersArr: UserInGroup[] = [];

    document.querySelector('.main')?.remove();
    getHtmlElement({ parent: 'body', tag: 'main', style: ['main', 'main_overview'] });

    const group = await getGroup();
    currentGroupUsersArr = group.users;

    getHtmlElement({ parent: '.main', style: ['main__wrapper', 'main__wrapper_overview'] });
    getHtmlElement({ parent: '.main__wrapper', tag: 'ul', style: ['members-list'] });
    currentGroupUsersArr.forEach((userObj) => {
        const listItem = getHtmlElement({ parent: '.members-list', tag: 'li', style: ['members-list__item'] });
        listItem.dataset.hash = 'user_page';
        getHtmlElement({ parentNode: listItem, tag: 'span', style: ['members-list__text'], content: userObj.name });
        getHtmlElement({
            parentNode: listItem,
            tag: 'span',
            style: ['members-list__text'],
            content: `${String(roundTwoDigitsAfter(userObj.balance))} ${localStorage.getItem('currency')}`,
        });
    });

    getHtmlElement({
        parent: '.main__wrapper',
        tag: 'button',
        style: ['button', 'button_overview'],
        content: langObj.buttonInvite,
    }).addEventListener('click', () => {
        if (localStorage.getItem('currentGroup')) {
            const code = localStorage.getItem('currentGroup');
            const codeField = document.querySelector('.popup__title_invite');
            if (codeField instanceof HTMLElement && code) {
                codeField.textContent = code;
            }
        }
        togglePopup('.popup_invite');
    });

    getHtmlElement({ parent: '.main__wrapper', style: ['main__footer'] });

    getHtmlElement({
        parent: '.main__footer',
        tag: 'button',
        style: ['button', 'button_add', 'button_add-popup'],
    }).addEventListener('click', () => {
        togglePopup('.popup_add');
    });
}
export default createOverviewMain;
