function showMessageWithTimer(element: HTMLElement, timeForShowMessage: number) {
    setTimeout(() => {
        element.remove();
    }, timeForShowMessage);
}

export default showMessageWithTimer;
