import { addFocusedToBtn, addPictureBasketOrArrow, findObjectById } from '../../features/tools';
import { expensesArr } from '../../data/database';
import { makeMainHtml, addExpensesItem } from './expenses-pageHtml';
import stringToElement from '../../components/stringToElement';
import { makeExpenseDetailHtml, makeModalBlockForElement } from '../expense-detail-page/expense-detail';
import getLangObj from '../../features/getLangObj';

// [
//   {
//       "by": {
//           "id": 49848441,
//           "name": "Alex",
//           "balance": -12000
//       },
//       "id": 882969475,
//       "for": [
//           {
//               "id": 95992185,
//               "name": "Peter",
//               "balance": 5333.333333333333
//           },
//           {
//               "id": 185707768,
//               "name": "Skyner",
//               "balance": -6666.666666666667
//           }
//       ],
//       "date": 1677431324504,
//       "title": "Oil",
//       "amount": 10000
//   },
//   {
//       "by": {
//           "id": 95992185,
//           "name": "Peter",
//           "balance": 5333.333333333333
//       },
//       "id": 826869450,
//       "for": [
//           {
//               "id": 49848441,
//               "name": "Alex",
//               "balance": -12000
//           }
//       ],
//       "date": 1677431324600,
//       "title": "",
//       "amount": 12000
//   }
// ]
const langObj = getLangObj();

const addButtonItemElementLogic = (e: MouseEvent) => {
    if (e.currentTarget instanceof HTMLElement) {
        const expenseid = e.currentTarget?.dataset.expenseid;
        if (expenseid) {
            const expenseObject = findObjectById(expensesArr, Number(expenseid));
            if (expenseObject?.title) {
                makeExpenseDetailHtml(
                    expenseObject.title,
                    'basket',
                    expenseObject.amount,
                    'USD',
                    expenseObject.by.name,
                    expenseObject.for.length,
                    expenseObject.by.name,
                    expenseObject.for[0].name,
                    String(new Date().setTime(expenseObject.date)),
                    '',
                    'display-none'
                );
                makeModalBlockForElement(expenseObject);
            } else if (expenseObject) {
                makeExpenseDetailHtml(
                    langObj.payment,
                    'arrow',
                    expenseObject.amount,
                    'USD',
                    expenseObject.by.name,
                    expenseObject.for.length,
                    expenseObject.by.name,
                    expenseObject.for[0].name,
                    String(expenseObject.date),
                    'display-none',
                    ''
                );
            }
        }
    }
};

const addExpensesPageHtml = () => {
    const mainElement = stringToElement(makeMainHtml());
    document.querySelector('.header')?.after(mainElement);

    const expensesBlockElement = document.querySelector('.expenses-block');
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
