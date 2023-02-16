import getLangObj from '../../features/getLangObj';
import { addExpenseDetailHtml, addModalBlockForHtml } from './expense-detailHtml';
import { addRemoveClassInElement, addPictureBasketOrArrow, roundTwoDigitsAfter } from '../../features/tools';
import { GetExpense } from '../../data/types';
import stringToElement from '../../components/stringToElement';

const langObj = getLangObj();

const addListenerBtnEdit = (inputValue: string) => {
    const btnEdit = document.querySelector('.btn-expense-detail-edit');
    const input = document.querySelector('.expense-detail-input');
    if (input instanceof HTMLInputElement) {
        input.value = inputValue;

        btnEdit?.addEventListener('click', () => {
            if (btnEdit.innerHTML === langObj.btnEdit) {
                btnEdit.innerHTML = langObj.btnDone;
                addRemoveClassInElement('.expense-detail-input', 'disabled', 'remove');
                addRemoveClassInElement('.expense-detail-input', 'bordered', 'add');
                addRemoveClassInElement('.button-expense-detail', 'display-none', 'remove');
                input.focus();
            } else {
                btnEdit.innerHTML = langObj.btnEdit;
                addRemoveClassInElement('.expense-detail-input', 'disabled', 'add');
                addRemoveClassInElement('.expense-detail-input', 'bordered', 'remove');
                addRemoveClassInElement('.button-expense-detail', 'display-none', 'add');
                // ============================TO API изменение имени =======================================
                console.log(input.value);
            }
        });
    }
};

const addListenersModal = () => {
    document.querySelector('.button-expense-detail')?.addEventListener('click', () => {
        addRemoveClassInElement('.modal1', 'modal-open', 'add');
        addRemoveClassInElement('.modal-expense-detail-block', 'display-none', 'remove');
        addRemoveClassInElement('.modal-expense-detail-block-for', 'display-none', 'add');
    });

    document.querySelector('.modal1__trash-cancel')?.addEventListener('click', () => {
        addRemoveClassInElement('.modal1', 'modal-open', 'remove');
    });

    document.querySelector('.modal1__trash-delete')?.addEventListener('click', () => {
        addRemoveClassInElement('.modal1', 'modal-open', 'remove');

        // сюда добавить функциюю удаления юзера с сервера
    });
    document.querySelector('.expense-detail-for-btn')?.addEventListener('click', () => {
        addRemoveClassInElement('.modal1', 'modal-open', 'add');
        addRemoveClassInElement('.modal-expense-detail-block', 'display-none', 'add');
        addRemoveClassInElement('.modal-expense-detail-block-for', 'display-none', 'remove');
    });

    document.querySelector('.expense-detail-for-done-btn')?.addEventListener('click', () => {
        addRemoveClassInElement('.modal1', 'modal-open', 'remove');
    });
};

export const makeModalBlockForElement = (obj: GetExpense) => {
    const parent = document.querySelector('.modal-expense-detail-block-for');
    const numberOfPayers = obj.for.length;
    const sumPerUser = roundTwoDigitsAfter(obj.amount / numberOfPayers);
    const percentPerUser = roundTwoDigitsAfter(100 / numberOfPayers);
    obj.for.forEach((object) => {
        parent?.prepend(stringToElement(addModalBlockForHtml(object.name, percentPerUser, sumPerUser)));
    });
};

export const makeExpenseDetailHtml = (
    expensesTitle: string,
    picture: string,
    amountSum: number,
    currencyType: string,
    byName: string,
    forUsers: number,
    from: string,
    to: string,
    dateText: string,
    settleDisplayNone: string,
    goodsDisplayNone: string
) => {
    const expenseDetailHtml = addExpenseDetailHtml(
        langObj.btnEdit,
        addPictureBasketOrArrow(picture),
        langObj.amount,
        amountSum,
        langObj.currencies,
        currencyType,
        langObj.by,
        byName,
        langObj.forWhom,
        forUsers,
        from,
        to,
        langObj.date,
        dateText,
        langObj.btnDelete,
        langObj.btnDelete,
        langObj.btnCancel,
        langObj.btnDone,
        settleDisplayNone,
        goodsDisplayNone,
        langObj.persons
    );
    document.body.innerHTML = expenseDetailHtml;
    addListenerBtnEdit(expensesTitle);
    addListenersModal();
};
