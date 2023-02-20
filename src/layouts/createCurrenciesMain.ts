import getHtmlElement from '../components/getHtmlElement';
import currenciesArr from '../data/currencies';

function createCurrenciesMain() {
    document.querySelector('.main')?.remove();

    getHtmlElement({ parent: 'body', tag: 'main', style: ['main', 'main_currencies-page'] });
    getHtmlElement({ parent: '.main', style: ['main__wrapper', 'main__wrapper_currencies-page'] });
    getHtmlElement({ parent: '.main__wrapper', style: ['main__header'] });
    getHtmlElement({
        parent: '.main__header',
        tag: 'button',
        style: ['button', 'button_main-header', 'button_back'],
    }).addEventListener('click', () => {
        window.history.back();
    });

    getHtmlElement({ parent: '.main__wrapper', tag: 'ul', style: ['currencies__item'] });

    getHtmlElement({
        parent: '.currencies__item',
        tag: 'span',
        style: ['currencies__abbreviation'],
        content: 'BYN',
    });
    getHtmlElement({
        parent: '.currencies__item',
        tag: 'span',
        style: ['currencies__currency-name'],
        content: 'Belarusian Ruble',
    });

    getHtmlElement({ parent: '.main__wrapper', tag: 'ul', style: ['currencies'] });
    currenciesArr.forEach((currencyObj) => {
        getHtmlElement({
            parent: '.currencies',
            tag: 'li',
            style: ['currencies__item'],
        });
        getHtmlElement({
            parent: '.currencies__item',
            tag: 'span',
            style: ['currencies__abbreviation'],
            content: <string>currencyObj.Cur_Abbreviation,
        });
        getHtmlElement({
            parent: '.currencies__item',
            tag: 'span',
            style: ['currencies__currency-name'],
            content: <string>currencyObj.Cur_Name_Eng,
        });
    });
}
export default createCurrenciesMain;
