import makeExpensesPage from '../layouts/expenses-page/expenses-page';
import createMainPage from './createMainPage';

function createExpensesPage() {
    document.body.innerHTML = '';
    createMainPage();
    makeExpensesPage();
}

export default createExpensesPage;
