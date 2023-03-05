import getHtmlElement from './getHtmlElement';
import togglePopup from '../features/togglePopup';

function createShadow() {
    document.querySelector('.shadow')?.remove();
    getHtmlElement({ parent: 'body', style: ['shadow'] }).addEventListener('click', () => {
        togglePopup();
    });
}

export default createShadow;
