import createExpense from '../api/createExpense';
// import getGroup from '../api/getGroup';
import { SendExpense } from '../data/types';

export default async function setPayment() {
    const paymentForm = document.querySelector('.form_add-payment');
    if (!(paymentForm instanceof HTMLFormElement)) return;

    const inputs = Array.from(paymentForm.elements) as HTMLInputElement[];
    const options = Array.from(document.querySelectorAll('option')) as HTMLOptionElement[];
    const userBy = options.find((option) => option.value === inputs[1].value);
    const userTo = options.find((option) => option.value === inputs[2].value);
    if (!userBy || !userBy.dataset.userId) return;
    if (!userTo || !userTo.dataset.userId) return;
    const userById = userBy.dataset.userId;
    const userToId = userTo.dataset.userId;

    const expense: SendExpense = {
        title: '',
        amount: +inputs[0].value,
        date: new Date().getTime(),
        by: +userById,
        for: [+userToId],
    };

    await createExpense(expense);
}
