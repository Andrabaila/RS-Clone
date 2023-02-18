function toggleText(element: HTMLElement) {
    const el = element;

    if (el.dataset.text && el.textContent) {
        const newText = el.dataset.text;
        el.dataset.text = el.textContent;
        el.textContent = newText;
    }
}

export default toggleText;
