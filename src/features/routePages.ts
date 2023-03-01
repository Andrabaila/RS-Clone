import createNewGroupPage from '../pages/createNewGroupPage';
import createJoinGroupPage from '../pages/createJoinGroupPage';
import createOverviewPage from '../pages/createOverviewPage';
import createUserPage from '../pages/createUserPage';
import createExpensesPage from '../pages/createExpensesPage';
import createAddPaymentPage from '../pages/createAddPaymentPage';
import createAddExpensePage from '../pages/createAddExpensePage';
import createCurrenciesPage from '../pages/createCurrenciesPage';
import createGreetingPage from '../pages/createGreetingPage';
import createInstruction from '../pages/createInstruction';
import createStartPage from '../pages/createStartPage';

function routePages() {
    const { hash } = window.location;
    const page = hash.split('-')[0];

    if (!localStorage.getItem('user')) {
        createGreetingPage();
        return;
    }

    switch (page) {
        case '': {
            if (localStorage.getItem('currentGroup')) {
                createOverviewPage();
            } else {
                createStartPage();
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
        case '#/instruction':
            createInstruction();
            break;
        default:
            createInstruction();
    }
}

export default routePages;
