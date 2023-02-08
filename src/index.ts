import routePages from './features/routePages';
import setHash from './features/setHash';

window.addEventListener('click', setHash);
window.addEventListener('hashchange', routePages);
if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'english');
}

routePages();
