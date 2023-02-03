function getHtmlElement({
    parent = '',
    parentNode = <Element>{},
    tag = 'div',
    style = [''],
    content = '',
    name = '',
    id = '',
}) {
    let parentContainer: Element;

    if (parent) {
        const parentArray = document.querySelectorAll(parent);
        parentContainer = parentArray[parentArray.length - 1];
    } else {
        parentContainer = parentNode;
    }

    const newElement = document.createElement(tag);

    for (let i = 0; i < style.length; i += 1) {
        newElement.classList.add(style[i]);
    }

    if (content) {
        newElement.textContent = content;
    }

    if (id) {
        newElement.id = id;
    }

    if (name && newElement instanceof HTMLInputElement) {
        newElement.name = name;
    }

    parentContainer.append(newElement);
    return newElement;
}

export default getHtmlElement;
