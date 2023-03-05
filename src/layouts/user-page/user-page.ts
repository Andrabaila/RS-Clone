import { addRemoveClassInElement } from '../../features/tools';
import addUserPageHtml from './user-pageHtml';

import getLangObj from '../../features/getLangObj';
import getUser from '../../api/getUser';
import renameUser from '../../api/renameUser';
import renameUserInGroup from '../../api/renameUserInGroup';
import getGroup from '../../api/getGroup';
import removeUserFromGroup from '../../api/removeUserFromGroup';
import getUserExpenses from '../../api/getUserExpenses';

const langObj = getLangObj();

export const addListenerBtnEdit = () => {
    const btnEdit = document.querySelector('.btn-upage-delete');
    const input = document.querySelector('.upage-row2-input');
    if (input instanceof HTMLInputElement) {
        // ============================FROM API============================================
        if (localStorage.getItem('userNameSelected')) {
            input.value = String(localStorage.getItem('userNameSelected'));
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
                if (localStorage.getItem('userIdSelected')) {
                    const selectedUserId = localStorage.getItem('userIdSelected');
                    getUser(String(selectedUserId)).then((userObj) => {
                        renameUser(input.value, userObj.groupList, userObj.id)
                            .then(() => {
                                localStorage.setItem('userNameSelected', input.value);
                            })
                            .then(() => {
                                getGroup().then((groupObj) => {
                                    if (localStorage.getItem('userIdSelected')) {
                                        const userIdSelected = localStorage.getItem('userIdSelected');
                                        renameUserInGroup(input.value, Number(userIdSelected), groupObj);
                                    }
                                });
                            });
                    });
                }
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
        getGroup().then((groupObj) => {
            if (localStorage.getItem('userIdSelected')) {
                const userIdSelected = localStorage.getItem('userIdSelected');
                removeUserFromGroup(Number(userIdSelected), groupObj).then(() => {
                    window.location.hash = '#/overview';
                });
            }
        });
    });
};

export const makeUserPage = async () => {
    const userInfo = await getUserExpenses(localStorage.userIdSelected || localStorage.user);

    document.body.innerHTML = addUserPageHtml(
        '/#/overview',
        '/',
        '/',
        '/',
        langObj.btnEdit,
        langObj.balance,
        langObj.expenses,
        userInfo.expenses.length,
        langObj.payments,
        userInfo.payments.length,
        langObj.benefitsFrom,
        userInfo.benefits.length,
        langObj.deletePerson,
        langObj.btnCancel,
        langObj.btnDelete
    );
    addListenerBtnEdit();
    addListenersModal();
};
