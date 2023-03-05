import getLangObj from '../../features/getLangObj';
import { addExpenseDetailHtml, addModalBlockForHtml } from './expense-detailHtml';
import { addRemoveClassInElement, addPictureBasketOrArrow, roundTwoDigitsAfter } from '../../features/tools';
import { GetExpense } from '../../data/types';
import stringToElement from '../../components/stringToElement';
import removeExpense from '../../api/removeExpense';
import getDateFromMs from '../../features/getDateFromMs';
import getExpense from '../../api/getExpense';

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

        const expenseContainer = document.querySelector('[data-expense-id]');
        if (!(expenseContainer instanceof HTMLElement)) return;
        const expenseId = expenseContainer.dataset?.expenseId;
        if (!expenseId) return;
        removeExpense(expenseId).then(() => {
            window.location.hash = '#/expenses_page';
        });
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
    const numberOfPayers = obj.for.length + 1;
    const sumPerUser = roundTwoDigitsAfter(obj.amount / numberOfPayers);
    obj.for.forEach((object) => {
        parent?.prepend(stringToElement(addModalBlockForHtml(object.name, sumPerUser)));
    });
    parent?.prepend(stringToElement(addModalBlockForHtml(obj.by.name, sumPerUser)));
};

export const makeExpenseDetailHtml = async () => {
    const mainCurrency = localStorage.getItem('currency');
    const expenseid = window.location.hash.split('-')[1];
    const expenseObject = await getExpense(expenseid);
    if (expenseObject?.title) {
        const expenseDetailHtml = addExpenseDetailHtml(
            expenseObject.id,
            langObj.btnEdit,
            addPictureBasketOrArrow('basket'),
            langObj.amount,
            expenseObject.amount,
            langObj.currencies,
            mainCurrency || 'no LS currency',
            langObj.by,
            expenseObject.by.name,
            langObj.forWhom,
            expenseObject.for.length + 1,
            langObj.forWhom,
            expenseObject.for[0].name,
            langObj.date,
            getDateFromMs(expenseObject.date),
            langObj.btnDelete,
            langObj.checkText,
            langObj.btnCancel,
            langObj.btnDone,
            '',
            'display-none',
            langObj.persons
        );

        document.body.innerHTML = expenseDetailHtml;
        addListenerBtnEdit(expenseObject.title);
        makeModalBlockForElement(expenseObject);
    } else if (expenseObject) {
        const expenseDetailHtml = addExpenseDetailHtml(
            expenseObject.id,
            langObj.btnEdit,
            addPictureBasketOrArrow('arrow'),
            langObj.amount,
            expenseObject.amount,
            langObj.currencies,
            mainCurrency || 'no LS currency',
            langObj.by,
            expenseObject.by.name,
            langObj.forWhom,
            expenseObject.for.length,
            langObj.forWhom,
            expenseObject.for[0].name,
            langObj.date,
            getDateFromMs(expenseObject.date),
            langObj.btnDelete,
            langObj.checkText,
            langObj.btnCancel,
            langObj.btnDone,
            'display-none',
            '',
            langObj.persons
        );
        document.body.innerHTML = expenseDetailHtml;
        addListenerBtnEdit(langObj.payment);
    }
    addListenersModal();
};
