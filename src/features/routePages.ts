import createNewGroupPage from '../pages/createNewGroupPage';
import createJoinGroupPage from '../pages/createJoinGroupPage';
import createOverviewPage from '../pages/createOverviewPage';
import createUserPage from '../pages/createUserPage';
import createExpensesPage from '../pages/createExpensesPage';
import createAddPaymentPage from '../pages/createAddPaymentPage';
import createAddExpensePage from '../pages/createAddExpensePage';
import createCurrenciesPage from '../pages/createCurrenciesPage';
import createGreetingPage from '../pages/createGreetingPage';

function routePages() {
    const { hash } = window.location;
    const page = hash.split('-')[0];

    switch (page) {
        case '': {
            if (localStorage.getItem('user')) {
                createOverviewPage();
            } else {
                createGreetingPage();
            }
            break;
        }
        case '#/new_group':
            createNewGroupPage();
            break;
        case '#/join_group':
            createJoinGroupPage();
            break;
        case '#/overview':
            createOverviewPage();
            break;
        case '#/user_page':
            createUserPage();
            break;
        case '#/expenses_page':
            createExpensesPage();
            break;
        case '#/add_payment':
            createAddPaymentPage();
            break;
        case '#/add_expense':
            createAddExpensePage();
            break;
        case '#/currencies':
            createCurrenciesPage();
            break;
        default:
            createExpensesPage();
    }
}

export default routePages;
