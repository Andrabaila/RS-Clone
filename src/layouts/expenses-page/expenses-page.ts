import { addFocusedToBtn, addPictureBasketOrArrow } from '../../features/tools';
import { expensesArr } from '../../data/database';
import { makeMainHtml, addExpensesItem } from './expenses-pageHtml';
import stringToElement from '../../components/stringToElement';
import getExpensesArr from '../../api/getExpensesArr';

const addButtonItemElementLogic = (e: MouseEvent) => {
    if (!(e.currentTarget instanceof HTMLElement)) return;
    const expenseid = e.currentTarget?.dataset.expenseid;
    if (expenseid) window.location.hash = `#/expense-${expenseid}`;
};

export const addExpensesPageHtml = async () => {
    const mainElement = stringToElement(makeMainHtml());
    document.querySelector('.header')?.after(mainElement);

    const expensesBlockElement = document.querySelector('.expenses-block');
    await getExpensesArr();
    if (expensesBlockElement) expensesBlockElement.innerHTML = '';
    expensesArr.forEach((expense) => {
        const expensesItemString = expense.title
            ? addExpensesItem(
                  'goods',
                  expense.id,
                  expense.title,
                  String(expense.by.name),
                  expense.amount,
                  addPictureBasketOrArrow('basket')
              )
            : addExpensesItem(
                  'settle',
                  expense.id,
                  `From ${expense.by.name}`,
                  `To ${expense.for[0].name}`,
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
