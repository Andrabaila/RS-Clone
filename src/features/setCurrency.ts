function setCurrency(event: MouseEvent) {
    let currency: string;
    if (
        event instanceof MouseEvent &&
        event.type === 'click' &&
        (event.target instanceof HTMLLIElement || event.target instanceof HTMLSpanElement) &&
        event.target.id
    ) {
        currency = event.target.id;
        localStorage.setItem('currency', currency);
        window.history.back();
    }
}

export default setCurrency;
