import routePages from './features/routePages';

window.addEventListener('hashchange', routePages);
if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'english');
}
routePages();
