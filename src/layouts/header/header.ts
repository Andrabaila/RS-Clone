import stringToElement from '../../components/stringToElement';
import { addModalTrashCanHtml, penSvg, getHeaderHtml, addBurgerGroupItemHtml, addModalBtnPlusHtml } from './headerHTML';
import {
    innerHtmlInElement,
    addListenerOpenCloseModal,
    removeElementFromBody,
    addRemoveClassInAllElements,
    isElementInBody,
    addRemoveClassInElement,
} from '../../features/tools';
import getLangObj from '../../features/getLangObj';
import { groupsArr } from '../../data/database';

const langObj = getLangObj();

const DOCUMENT_BODY = document.body;

const addHeaderHtml = (): void => {
    let groupName = '';
    if (typeof localStorage.getItem('currentGroup') === 'string') {
        const currentGroupId = localStorage.getItem('currentGroup');

        groupsArr.forEach((groupObj) => {
            if (String(groupObj.id) === currentGroupId) {
                groupName = groupObj.name;
            }
        });
    }

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
        penSvg,
        groupName
        /*         'Group name API' */
    );

    DOCUMENT_BODY.prepend(stringToElement(headerHtml));
};

const addListenerForBurgerMenu = () => {
    addListenerOpenCloseModal('.burger__menu', '.modal', 'modal-open', '.burger__nav');
};

const addListenerForDottedMenu = () =>
    addListenerOpenCloseModal('.dot__menu-wrap', '.modal', 'modal-open', '.dotted__nav');

const addListenerForPlusMenu = () => {
    const plusBtn = document.querySelector('.button__add-groupe');
    plusBtn?.addEventListener('click', () => {
        innerHtmlInElement(
            '.modal1',
            addModalBtnPlusHtml(langObj.newGroupButton, langObj.choiceGroupButton, langObj.makeChoiceButton)
        );
        addRemoveClassInElement('.modal1', 'modal-open', 'add');
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

const addGroupNames = () => {
    const namesContainer = document.querySelector('.burger__row2');
    if (namesContainer) {
        namesContainer.innerHTML = '';
    }
    groupsArr.forEach((obj) => addBurgerGroupNameHtml(obj.name, String(obj.id)));
};
const createHeader = () => {
    document.querySelector('.header')?.remove();
    if (!isElementInBody('.header')) {
        addHeaderHtml();
    }
    closeModal();
    closeModal1();
    changeInnerBtnPen();
    addGroupNames();
    addListenerForBurgerMenu();
    addListenerForDottedMenu();
    addListenerForPlusMenu();
};

export default createHeader;
