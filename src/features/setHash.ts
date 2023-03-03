function setHash(event: MouseEvent) {
    if (
        event instanceof MouseEvent &&
        event.type === 'click' &&
        event.target instanceof HTMLElement &&
        event.target.dataset.hash
    ) {
        if (event.target.dataset.userName) {
            localStorage.setItem('userNameSelected', event.target.dataset.userName);
        }
        if (event.target.dataset.userBalance) {
            localStorage.setItem('userBalanceSelected', event.target.dataset.userBalance);
        }
        if (event.target.dataset.userId) {
            localStorage.setItem('userIdSelected', event.target.dataset.userId);
        }

        event.preventDefault();
        window.location.hash = `/${event.target.dataset.hash}`;
    }
}

export default setHash;
