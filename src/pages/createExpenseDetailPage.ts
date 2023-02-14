import { makeExpenseDetailPage } from '../layouts/expense-detail-page/expense-detail';

function createExpenseDetailPage() {
    document.body.innerHTML = '';
    makeExpenseDetailPage();
}

export default createExpenseDetailPage;
