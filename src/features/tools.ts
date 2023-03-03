import { GetExpense, GetGroup } from '../data/types';
import { groupsArr } from '../data/database';
import getGroups from '../api/getGroups';
import getLangObj from './getLangObj';

const langObj = getLangObj();

export function isElementInBody(element: string) {
    const elem = document.querySelector(element);
    return document.body.contains(elem);
}

export const removeElementFromBody = (id: string) => document.getElementById(id)?.remove();

export function addRemoveClassInAllElements(
    parentClass: string,
    targetClass: string,
    addDeleteClass: string,
    choiceAddRemove: string
) {
    const parentNode = document.querySelector(parentClass);
    if (parentNode) {
        const selectorNodes = parentNode.querySelectorAll(targetClass);
        for (let i = 0; i < selectorNodes.length; i += 1) {
            if (choiceAddRemove === 'remove') {
                selectorNodes[i].classList.remove(addDeleteClass);
            } else selectorNodes[i].classList.add(addDeleteClass);
        }
    }
}

export function addRemoveClassInElement(elementClass: string, addDeleteClass: string, addRemove: string) {
    const elem = document.querySelector(elementClass);

    if (addRemove === 'remove') {
        elem?.classList.remove(addDeleteClass);
    } else if (addRemove === 'add') {
        elem?.classList.add(addDeleteClass);
    }
}
export function addRemoveClassInElementById(id: string, addDeleteClass: string, addRemove: string) {
    const elem = document.getElementById(id);

    if (addRemove === 'remove') {
        elem?.classList.remove(addDeleteClass);
    } else if (addRemove === 'add') {
        elem?.classList.add(addDeleteClass);
    }
}

export function toggleClassInElement(elementClass: string, toggleClass: string) {
    const elem = document.querySelector(elementClass);
    elem?.classList.toggle(toggleClass);
}

export function toggleClassInElementById(elementId: string, toggleClass: string) {
    const elem = document.getElementById(elementId);
    elem?.classList.toggle(toggleClass);
}

export function addFocusedToBtn(parentNode: string, btnClass: string) {
    addRemoveClassInAllElements(parentNode, '.button', 'focused', 'remove');
    toggleClassInElement(btnClass, 'focused');
}

export const innerHtmlInElement = (elemClass: string, insertHtml: string) => {
    const elem = document.querySelector(elemClass);
    if (elem) elem.innerHTML = insertHtml;
};
export const addListenerOpenCloseModal = (
    btnClass: string,
    modalClass: string,
    addClass: string,
    menuClass?: string,
    startFunction?: () => void
): void => {
    const btn = document.querySelector(btnClass);

    btn?.addEventListener('click', () => {
        if (startFunction) {
            startFunction();
        }
        if (menuClass) {
            const menu = document.querySelector(menuClass);
            menu?.classList.add(addClass);
        }
        const modal = document.querySelector(modalClass);
        modal?.classList.add(addClass);
    });
};

export const addPictureBasketOrArrow = (basket: string) => {
    if (basket === 'basket') {
        return `<?xml version="1.0" ?><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_1_7" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
        <rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_1_7)">
        <path d="M11 9.5V6.5H8V4.5H11V1.5H13V4.5H16V6.5H13V9.5H11ZM7 22.5C6.45 22.5 5.97917 22.3042 5.5875 21.9125C5.19583 21.5208 5 21.05 5 20.5C5 19.95 5.19583 19.4792 5.5875 19.0875C5.97917 18.6958 6.45 18.5 7 18.5C7.55 18.5 8.02083 18.6958 8.4125 19.0875C8.80417 19.4792 9 19.95 9 20.5C9 21.05 8.80417 21.5208 8.4125 21.9125C8.02083 22.3042 7.55 22.5 7 22.5ZM17 22.5C16.45 22.5 15.9792 22.3042 15.5875 21.9125C15.1958 21.5208 15 21.05 15 20.5C15 19.95 15.1958 19.4792 15.5875 19.0875C15.9792 18.6958 16.45 18.5 17 18.5C17.55 18.5 18.0208 18.6958 18.4125 19.0875C18.8042 19.4792 19 19.95 19 20.5C19 21.05 18.8042 21.5208 18.4125 21.9125C18.0208 22.3042 17.55 22.5 17 22.5ZM7 17.5C6.25 17.5 5.675 17.1708 5.275 16.5125C4.875 15.8542 4.86667 15.2 5.25 14.55L6.6 12.1L3 4.5H1V2.5H4.275L8.525 11.5H15.55L19.425 4.5L21.175 5.45L17.3 12.45C17.1167 12.7833 16.875 13.0417 16.575 13.225C16.275 13.4083 15.9333 13.5 15.55 13.5H8.1L7 15.5H19V17.5H7Z" fill="#ff7b00"/>
        </g>
        </svg>`;
    }
    return `<?xml version="1.0" ?><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_9_7" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
    <rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_9_7)">
    <path d="M12 20.5L10.575 19.1L16.175 13.5H4V11.5H16.175L10.575 5.9L12 4.5L20 12.5L12 20.5Z" fill="#ff7b00"/>
    </g>
    </svg>`;
};

export const findObjectById = (arr: GetExpense[], id: number) => {
    return arr.find((obj) => obj.id === id);
};

export const roundTwoDigitsAfter = (num: number) => Math.round(num * 100) / 100;

export const findNameInObjectById = (arr: GetGroup[], id: number) => {
    return arr.find((obj) => obj.id === id)?.name;
};

export const changeHeaderGroupText = async (currentGroupId: string, fromServer: string) => {
    const arr = fromServer ? await getGroups() : groupsArr;
    const groupName = findNameInObjectById(arr, Number(currentGroupId)) || `${langObj.chooseGroup}`;
    innerHtmlInElement('.header__group-name', groupName);
};

export const addCurrentGroupInLocalStorage = async () => {
    const nextGroupObj = await getGroups();
    const nextGroupId = nextGroupObj[0].id;
    changeHeaderGroupText(String(nextGroupId), '');
    localStorage.setItem('currentGroup', `${nextGroupId}`);
};
