function setHash(event: MouseEvent) {
    if (
        event instanceof MouseEvent &&
        event.type === 'click' &&
        event.target instanceof HTMLButtonElement &&
        event.target.dataset.hash
    ) {
        event.preventDefault();
        window.location.hash = `/${event.target.dataset.hash}`;
    }
}

export default setHash;
