import stringToElement from '../../components/stringToElement';
import { addModalTrashCanHtml, penSvg, getHeaderHtml, addBurgerGroupItemHtml } from './headerHTML';
import {
    innerHtmlInElement,
    addListenerOpenCloseModal,
    removeElementFromBody,
    addRemoveClassInAllElements,
    addRemoveClassInElement,
    changeHeaderGroupText,
    toggleClassInElementById,
} from '../../features/tools';
import getLangObj from '../../features/getLangObj';
import { GetGroup } from '../../data/types';
import deleteGroup from '../../api/deleteGroup';
import getGroups from '../../api/getGroups';
import createOverviewPage from '../../pages/createOverviewPage';

const langObj = getLangObj();

const DOCUMENT_BODY = document.body;

const addHeaderHtml = (): void => {
    const headerHtml = getHeaderHtml(
        langObj.burgerTop,
        langObj.burgerFeedback,
        langObj.burgerAbout,
        langObj.dottedTotal,
        langObj.dottedAdd,
        langObj.dottedChangeName,
        langObj.dottedChangeCurrency,
        langObj.dottedLeaveGroup,
        langObj.headerLeftButton,
        langObj.headerRightButton,
        penSvg
    );

    DOCUMENT_BODY.prepend(stringToElement(headerHtml));

    const currentGroupId = localStorage.getItem('currentGroup');
    if (currentGroupId) {
        changeHeaderGroupText(currentGroupId, 'server');
    }
};

const addListenerForDottedMenu = () =>
    addListenerOpenCloseModal('.dot__menu-wrap', '.modal', 'modal-open', '.dotted__nav');

const addListenerForPlusMenu = () => {
    const plusBtn = document.querySelector('.button__add-groupe');
    plusBtn?.addEventListener('click', () => {
        window.location.hash = '#/add';
    });
};

const closeModal1 = () => {
    document
        .querySelector('.modal1')
        ?.addEventListener('click', () => addRemoveClassInElement('.modal1', 'modal-open', 'remove'));
};

const changeInnerBtnPen = () => {
    const buttonSelectGroupe = document.querySelector('.button__select-groupe');

    buttonSelectGroupe?.addEventListener('click', () => {
        if (buttonSelectGroupe.innerHTML === langObj.penButton) {
            buttonSelectGroupe.innerHTML = penSvg;
            addRemoveClassInAllElements('.burger__row2', '.group-name_trash', 'display-none', 'add');
        } else {
            addRemoveClassInAllElements('.burger__row2', '.group-name_trash', 'display-none', 'remove');
            buttonSelectGroupe.innerHTML = langObj.penButton;
        }
    });
};

const changeTextToSvg = () => {
    const btnPen = document.querySelector('.button__select-groupe');
    if (btnPen) btnPen.innerHTML = penSvg;
};

const closeModal = () => {
    const modalFullScreen = document.querySelector('.modal');
    modalFullScreen?.addEventListener('click', () => {
        addRemoveClassInAllElements('.header__row1', '.modal-open', 'modal-open', 'remove');
        changeTextToSvg();
        addRemoveClassInAllElements('.burger__row2', '.group-name_trash', 'display-none', 'add');
    });
};

const addTrashButtonLogic = (e: Event) => {
    if (e.target instanceof HTMLElement) {
        const targetGroupId = e.target.dataset.id;
        const mainGroupId = e.target.id;
        if (mainGroupId) {
            localStorage.setItem('currentGroup', `${mainGroupId}`);
            // changeHeaderGroupText(mainGroupId, '');
            // addRemoveClassInAllElements('.burger__row2', '.burger__group-name', 'background-group-name', 'remove');
            // addRemoveClassInElementById(mainGroupId, 'background-group-name', 'add');
            // document.location.hash = '#/overview';
            createOverviewPage();
        }
        if (targetGroupId) {
            innerHtmlInElement(
                '.modal1',
                addModalTrashCanHtml(langObj.cancelButton, langObj.leaveButton, langObj.leaveGroupButton)
            );
            addRemoveClassInElement('.modal1', 'modal-open', 'add');
            const buttonsModalBlock = document.querySelector('.modal1__trash-block');
            buttonsModalBlock?.addEventListener('click', (ev) => {
                if (ev.target instanceof HTMLElement) {
                    const targetId1 = ev.target.dataset.id;
                    if (targetId1 === 'cancel') {
                        addRemoveClassInElement('.modal1', 'modal-open', 'remove');
                    } else if (targetId1 === 'leave') {
                        removeElementFromBody(targetGroupId);
                        (async () => {
                            await deleteGroup(targetGroupId);
                            const firstGroup = document.querySelector('.burger__group-name');
                            if (!firstGroup || !(firstGroup instanceof HTMLElement)) {
                                localStorage.setItem('currentGroup', '');
                                window.location.hash = '#/add';
                                return;
                            }

                            firstGroup.click();
                            // const nextGroupObj = await getGroups();
                            // const nextGroupId = nextGroupObj[0].id;
                            // changeHeaderGroupText(String(nextGroupId), '');
                            // toggleClassInElementById(String(nextGroupId), 'background-group-name');
                            localStorage.setItem('currentGroup', `${firstGroup.id}`);
                        })();
                        addRemoveClassInElement('.modal1', 'modal-open', 'remove');
                    }
                }
            });
        }
    }
};

const addBurgerGroupNameHtml = (groupName: string, id = groupName): void => {
    const parentDiv = document.querySelector('.burger__row2');
    const nameItem = addBurgerGroupItemHtml(groupName, id);
    const btnItem = stringToElement(nameItem);
    btnItem.addEventListener('click', addTrashButtonLogic);
    parentDiv?.append(btnItem);
};
const addGroupNames = async () => {
    const arrOfGroups: GetGroup[] = await getGroups();
    const namesContainer = document.querySelector('.burger__row2');
    if (namesContainer) {
        namesContainer.innerHTML = '';
    }
    arrOfGroups?.forEach((obj) => addBurgerGroupNameHtml(obj.name, String(obj.id)));
    const currentGroupId = localStorage.getItem('currentGroup');
    if (currentGroupId) {
        toggleClassInElementById(currentGroupId, 'background-group-name');
    }
};
const addListenerForBurgerMenu = () => {
    addListenerOpenCloseModal('.burger__menu', '.modal', 'modal-open', '.burger__nav', addGroupNames);
};

const createHeader = () => {
    document.querySelector('.header')?.remove();
    // if (!isElementInBody('.header')) {
    addHeaderHtml();
    // }
    closeModal();
    closeModal1();
    changeInnerBtnPen();
    addListenerForBurgerMenu();
    addListenerForDottedMenu();
    addListenerForPlusMenu();
};

export default createHeader;
