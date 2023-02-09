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

export const innerHtmlInElement = (elemClass: string, insertHtml: string) => {
    const elem = document.querySelector(elemClass);
    if (elem) elem.innerHTML = insertHtml;
};

export const addListenerOpenCloseModal = (
    btnClass: string,
    modalClass: string,
    addClass: string,
    menuHash: string,
    menuClass?: string
): void => {
    const btn = document.querySelector(btnClass);

    btn?.addEventListener('click', () => {
        if (menuClass) {
            const menu = document.querySelector(menuClass);
            menu?.classList.add(addClass);
        }
        const modal = document.querySelector(modalClass);
        modal?.classList.add(addClass);

        window.location.hash = menuHash;
    });
};
