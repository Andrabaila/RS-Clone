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
        return `<?xml version="1.0" ?><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M397.78,316H192.65A15,15,0,0,1,178,304.33L143.46,153.85a15,15,0,0,1,14.62-18.36H432.35A15,15,0,0,1,447,153.85L412.4,304.33A15,15,0,0,1,397.78,316ZM204.59,286H385.84l27.67-120.48H176.91Z"/><path d="M222,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,222,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,222,365.05Z"/><path d="M368.42,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,368.42,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,368.42,365.05Z"/><path d="M158.08,165.49a15,15,0,0,1-14.23-10.26L118.14,78H70.7a15,15,0,1,1,0-30H129a15,15,0,0,1,14.23,10.26l29.13,87.49a15,15,0,0,1-14.23,19.74Z"/></g></svg>`;
    }
    return `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 256 256" height="50px" id="Layer_1" version="1.1" viewBox="0 0 256 256" width="50px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M52.688,128c0-3.534,2.865-6,6.4-6h122.034l-47.141-45.956c-2.538-2.463-2.597-6.616-0.138-9.149  c1.256-1.295,2.925-1.995,4.594-1.995c1.606,0,3.216,0.576,4.456,1.782l58.466,56.737c1.244,1.206,1.943,2.855,1.943,4.587  s-0.699,3.385-1.943,4.591l-58.466,56.743c-2.528,2.459-6.584,2.401-9.05-0.139c-2.459-2.534-2.4-6.789,0.138-9.251L181.122,134  H59.088C55.553,134,52.688,131.534,52.688,128z M0,128c0,70.578,57.422,128,128,128s128-57.422,128-128S198.578,0,128,0  S0,57.422,0,128z M12.8,128C12.8,64.479,64.479,12.8,128,12.8S243.2,64.479,243.2,128S191.521,243.2,128,243.2  S12.8,191.521,12.8,128z"/></svg>`;
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
