import { addFocusedToBtn, addPictureBasketOrArrow } from '../../features/tools';
import { expenses } from '../../data/database';
import { makeMainHtml, addExpensesItem } from './expenses-pageHtml';
import stringToElement from '../../components/stringToElement';
import setHash from '../../features/setHash';

const addButtonItemElementLogic = (e: MouseEvent) => {
    if (e.currentTarget instanceof HTMLElement) {
        console.log(e.currentTarget?.dataset.expense);
        setHash(e);

        console.log(window.location.hash);
    }
};

const addExpensesPageHtml = () => {
    const mainElement = stringToElement(makeMainHtml());
    document.querySelector('.header')?.after(mainElement);

    const expensesBlockElement = document.querySelector('.expenses-block');
    expenses.forEach((expense) => {
        const expensesItemString = expense.title
            ? addExpensesItem(
                  'goods_page',
                  expense.id,
                  expense.title,
                  String(expense.by),
                  expense.amount,
                  addPictureBasketOrArrow('basket')
              )
            : addExpensesItem(
                  'payment_page',
                  expense.id,
                  `From ${expense.by}`,
                  `To ${expense.for[0]}`,
                  expense.amount,
                  addPictureBasketOrArrow('arrow')
              );

        const expensesItemElement = stringToElement(expensesItemString);
        expensesItemElement?.addEventListener('click', addButtonItemElementLogic);
        expensesBlockElement?.append(expensesItemElement);
    });
};

const makeExpensesPage = () => {
    addFocusedToBtn('.header__btn-wrapper', '.button-expenses');
    addExpensesPageHtml();
};
export default makeExpensesPage;
