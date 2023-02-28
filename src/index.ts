import getCurrencies from './api/getCurrencies';
import getGroups from './api/getGroups';
import getUsers from './api/getUsers';
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

getCurrencies();
getGroups();
getUsers();
routePages();
