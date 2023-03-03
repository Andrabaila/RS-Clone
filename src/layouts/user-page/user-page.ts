import { addRemoveClassInElement } from '../../features/tools';
import addUserPageHtml from './user-pageHtml';

import getLangObj from '../../features/getLangObj';

const langObj = getLangObj();

export const addListenerBtnEdit = () => {
    const btnEdit = document.querySelector('.btn-upage-delete');
    const input = document.querySelector('.upage-row2-input');
    if (input instanceof HTMLInputElement) {
        // ============================FROM API============================================
        if (localStorage.getItem('userName')) {
            input.value = String(localStorage.getItem('userName'));
        }

        btnEdit?.addEventListener('click', () => {
            if (btnEdit.innerHTML === langObj.btnEdit) {
                btnEdit.innerHTML = langObj.btnDone;
                addRemoveClassInElement('.upage-row2-input', 'disabled', 'remove');
                addRemoveClassInElement('.upage-row2-input', 'bordered', 'add');
                addRemoveClassInElement('.upage-block', 'display-none', 'add');
                addRemoveClassInElement('.button-upage', 'display-none', 'remove');
                input.focus();
            } else {
                btnEdit.innerHTML = langObj.btnEdit;
                addRemoveClassInElement('.upage-row2-input', 'disabled', 'add');
                addRemoveClassInElement('.upage-row2-input', 'bordered', 'remove');
                addRemoveClassInElement('.upage-block', 'display-none', 'remove');
                addRemoveClassInElement('.button-upage', 'display-none', 'add');
                // ============================TO API=======================================
            }
        });
    }
};

const addListenersModal = () => {
    document.querySelector('.button-upage')?.addEventListener('click', () => {
        addRemoveClassInElement('.modal1', 'modal-open', 'add');
    });

    document.querySelector('.modal1__trash-cancel')?.addEventListener('click', () => {
        addRemoveClassInElement('.modal1', 'modal-open', 'remove');
    });

    document.querySelector('.modal1__trash-delete')?.addEventListener('click', () => {
        addRemoveClassInElement('.modal1', 'modal-open', 'remove');
        // сюда добавить функциюю удаления юзера с сервера
    });
};

export const makeUserPage = () => {
    document.body.innerHTML = addUserPageHtml(
        '/#/overview',
        '/',
        '/',
        '/',
        langObj.btnEdit,
        langObj.balance,
        langObj.expenses,
        langObj.payments,
        langObj.benefitsFrom,
        langObj.deletePerson,
        langObj.btnCancel,
        langObj.btnDelete
    );
    addListenerBtnEdit();
    addListenersModal();
};
