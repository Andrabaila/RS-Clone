function togglePopup(popupStyle?: string) {
    document.querySelector('.shadow')?.classList.toggle('shadow_active');

    const popupName = popupStyle || '.popup_active';

    const popup = document.querySelector(popupName);
    if (popup) {
        popup.classList.toggle('popup_active');
        (<HTMLInputElement>document.querySelector('.input'))?.focus();
    }
}

export default togglePopup;
