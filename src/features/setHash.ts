function setHash(event: MouseEvent) {
    if (
        event instanceof MouseEvent &&
        event.type === 'click' &&
        event.target instanceof HTMLElement &&
        event.target.dataset.hash
    ) {
        if (event.target.dataset.userName) {
            localStorage.setItem('userName', event.target.dataset.userName);
        }
        if (event.target.dataset.userBalance) {
            localStorage.setItem('userBalance', event.target.dataset.userBalance);
        }

        event.preventDefault();
        window.location.hash = `/${event.target.dataset.hash}`;
    }
}

export default setHash;
