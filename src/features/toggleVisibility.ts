function toggleVisibility(elements: HTMLElement[]) {
    elements.forEach((element) => {
        element.classList.toggle('invisible');
        element.classList.toggle('hidden');
        element.classList.toggle('absolute');
    });
}

export default toggleVisibility;
