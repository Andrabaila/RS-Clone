import createExpense from '../api/createExpense';
import getGroup from '../api/getGroup';
import { SendExpense, UserInGroup } from '../data/types';

export default async function setPayment() {
    const paymentForm = document.querySelector('.form_add-payment');
    if (!(paymentForm instanceof HTMLFormElement)) return;

    const inputs = Array.from(paymentForm.elements) as HTMLInputElement[];
    console.log('inputs=', inputs);
    const options = Array.from(document.querySelectorAll('option')) as HTMLOptionElement[];
    const userBy = options.find((option) => option.value === inputs[1].value);
    console.log('userBy', userBy);
    if (!userBy || !userBy.dataset.userId) return;
    console.log('userBy.dataset=', userBy.dataset);
    const { userId } = userBy.dataset;

    const group = await getGroup();

    const users = group.users.map((user: UserInGroup) => user.id).filter((id: number) => id !== +userId);

    const expense: SendExpense = {
        title: '',
        amount: +inputs[0].value,
        date: new Date().getTime(),
        by: +userId,
        for: users,
    };

    await createExpense(expense);
}
