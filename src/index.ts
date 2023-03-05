import getCurrencyRates from './api/getCurrencyRates';
import routePages from './features/routePages';
import setHash from './features/setHash';

window.addEventListener('click', setHash);
window.addEventListener('hashchange', routePages);
if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'english');
}

if (!localStorage.getItem('currency')) {
    localStorage.setItem('currency', 'BYN');
}

if (!localStorage.getItem('currencyRate')) {
    localStorage.setItem('currencyRate', '1');
}

if (!localStorage.getItem('currencyScale')) {
    localStorage.setItem('currencyScale', '1');
}

getCurrencyRates();
routePages();
