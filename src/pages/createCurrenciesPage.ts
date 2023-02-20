import createCurrenciesMain from '../layouts/createCurrenciesMain';
import createFooter from '../layouts/createFooter';

function createCurrenciesPage() {
    document.querySelector('header')?.remove();

    createCurrenciesMain();
    createFooter();
}
export default createCurrenciesPage;
