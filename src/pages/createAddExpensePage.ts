import createAddExpenseMain from '../layouts/createAddExpenseMain';
import createFooter from '../layouts/createFooter';

function createExpensePage() {
    document.querySelector('header')?.remove();
    document.querySelector('.shadow')?.classList.remove('shadow_active');
    createAddExpenseMain();

    createFooter();
}

export default createExpensePage;
