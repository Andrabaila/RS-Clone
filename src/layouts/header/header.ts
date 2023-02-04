// const BTN_BURGER = document.querySelector('.burger__menu');
const BURGER_MENU = document.querySelector('.burger__nav');
const MODAL = document.querySelector('.modal');
const BURGER_MENU_HASH = '#burger_menu';

export const addListenerForBurgerMenu = (): void => {
    const BTN_BURGER = document.querySelector('.burger__menu');

    BTN_BURGER?.addEventListener('click', () => {
        BURGER_MENU?.classList.add('burger__nav-open');
        MODAL?.classList.add('modal-open');

        window.location.hash = BURGER_MENU_HASH;
    });
};

export const createHeader = () => {
    addListenerForBurgerMenu();
};
