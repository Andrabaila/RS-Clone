import getHtmlElement from '../components/getHtmlElement';
import currenciesArr from '../data/currencies';
import setCurrency from '../features/setCurrency';

function createCurrenciesMain() {
    document.querySelector('.main')?.remove();
    document.querySelector('.shadow_active')?.classList.remove('shadow_active');

    let currency = '';
    if (localStorage.getItem('currency')) {
        currency = <string>localStorage.getItem('currency');
    }

    const main = getHtmlElement({ parent: 'body', tag: 'main', style: ['main', 'main_currencies-page'] });
    main.addEventListener('click', setCurrency);
    getHtmlElement({ parent: '.main', style: ['main__wrapper', 'main__wrapper_currencies-page'] });
    getHtmlElement({ parent: '.main__wrapper', style: ['main__header'] });
    getHtmlElement({
        parent: '.main__header',
        tag: 'button',
        style: ['button', 'button_main-header', 'button_back'],
    }).addEventListener('click', () => {
        window.history.back();
    });

    let currencyName = '';
    currenciesArr.forEach((currencyObj) => {
        if (currencyObj.Cur_Abbreviation === currency) {
            currencyName = <string>currencyObj.Cur_Name_Eng;
        }
    });

    const selectedItem = getHtmlElement({ parent: '.main__wrapper', tag: 'ul', style: ['currencies__item'] });
    selectedItem.id = currency;
    selectedItem.addEventListener('click', () => window.history.back());
    getHtmlElement({
        parent: '.currencies__item',
        tag: 'span',
        style: ['currencies__abbreviation'],
        content: currency,
    });
    getHtmlElement({
        parent: '.currencies__item',
        tag: 'span',
        style: ['currencies__currency-name'],
        content: currencyName,
    });

    getHtmlElement({ parent: '.main__wrapper', tag: 'ul', style: ['currencies'] });
    currenciesArr.forEach((currencyObj) => {
        if (currencyObj.Cur_Abbreviation !== currency) {
            getHtmlElement({
                parent: '.currencies',
                tag: 'li',
                style: ['currencies__item'],
            }).id = <string>currencyObj.Cur_Abbreviation;

            getHtmlElement({
                parent: '.currencies__item',
                tag: 'span',
                style: ['currencies__abbreviation'],
                content: <string>currencyObj.Cur_Abbreviation,
            }).id = <string>currencyObj.Cur_Abbreviation;
            getHtmlElement({
                parent: '.currencies__item',
                tag: 'span',
                style: ['currencies__currency-name'],
                content: <string>currencyObj.Cur_Name_Eng,
            }).id = <string>currencyObj.Cur_Abbreviation;
        }
    });
}
export default createCurrenciesMain;
