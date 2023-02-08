function togglePopup() {
    const shadow = document.querySelector('.shadow');
    if (shadow) {
        shadow.classList.toggle('shadow_active');
    }

    const popup = document.querySelector('.popup');
    if (popup) {
        popup.classList.toggle('popup_active');
        (<HTMLInputElement>document.querySelector('.input')).focus();
    }
}

export default togglePopup;
