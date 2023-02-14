import makeExpensesPage from '../layouts/expenses-page/expenses-page';
import createMainPage from './createMainPage';

function createExpensesPage() {
    createMainPage();
    makeExpensesPage();
}

export default createExpensesPage;
