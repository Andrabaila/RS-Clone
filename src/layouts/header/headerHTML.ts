export const addBurgerGroupItemHtml = (text: string, id = text) =>
    `<div id=${id} class="burger__group-name">
	<span class="group-name_span">${text}</span>
	<div data-id=${id} class="group-name_trash display-none">
    <svg width="21" xmlns="http://www.w3.org/2000/svg" height="21" viewBox="0 0 96 96" xmlns:xlink="http://www.w3.org/1999/xlink">
      <path d="m24,78c0,4.968 4.029,9 9,9h30c4.968,0 9-4.032 9-9l6-48h-60l6,48zm33-39h6v39h-6v-39zm-12,0h6v39h-6v-39zm-12,0h6v39h-6v-39zm43.5-21h-19.5c0,0-1.344-6-3-6h-12c-1.659,0-3,6-3,6h-19.5c-2.487,0-4.5,2.013-4.5,4.5s0,4.5 0,4.5h66c0,0 0-2.013 0-4.5s-2.016-4.5-4.5-4.5z"/>
    </svg>
  </div>
</div>`;

export const penSvg = `<svg width="2.5rem" height="2.5rem" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>`;

export const addModalTrashCanHtml = (btnCancel: string, btnLeave: string, leaveGroup: string) => `
<div class="modal1__trash-block">
  <h3 class="modal1__trash-h3">${leaveGroup}</h3>
  <div class="modal1__trash-buttons">
    <button data-id="cancel" class="modal1__trash-cancel">${btnCancel}</button>
    <button data-id="leave" class="modal1__trash-leave">${btnLeave}</button>
  </div>
</div>`;

export const addModalBtnPlusHtml = (newGroup: string, joinGroup: string, makeChoice: string) => `
<div class="modal1__plus-block">
  <h3 class="modal1__plus-h3">${makeChoice}</h3>
  <div class="modal1__plus-links">
    <button class="modal1__btn-new">    
      <a href="/#/new_group" class="modal1__plus-new">${newGroup}</a>
    </button>
    <button class="modal1__btn-choice">
      <a href="/#/join_group" class="modal1__plus-choice">${joinGroup}</a>
    </button>
  </div>
</div>`;

export const addPlusExpenseHtml = (newGroup: string, joinGroup: string, makeChoice: string) => `
<div class="modal1__plus-block">
  <h3 class="modal1__plus-h3">${makeChoice}</h3>
  <div class="modal1__plus-links">
    <button class="modal1__btn-new">    
      <a href="/#/new_group" class="modal1__plus-new">${newGroup}</a>
    </button>
    <button class="modal1__btn-choice">
      <a href="/#/join_group" class="modal1__plus-choice">${joinGroup}</a>
    </button>
  </div>
</div>`;

export const getHeaderHtml = (
    groups: string,
    feedback: string,
    about: string,
    total: string,
    addPhoto: string,
    changeName: string,
    changeCurrency: string,
    leaveGroup: string,
    buttonOverview: string,
    buttonExpenses: string,
    svgPen: string
    // groupName?: string
) => `<header class="header">
  <div class="header__wrapper">
    <div class="header__row1">
      <div class="burger__menu">
        <span></span>
      </div>
      <div class="modal"></div>
      <div class="modal1"></div>
      <nav class="burger__nav">
        <div class="burger__top">
          <div class="burger__row1">
            <h2 class="burger__h2">${groups}</h2>
            <div class="button__select-groupe">${svgPen}</div>
          </div>
          <div class="burger__row2">
          </div>
          <button class="button button__add-groupe">+</button>
        </div>
        <div class="burger__bottom">
          <ul class="burger__list">
            <li><a href="mailto:ppl@vivanta.by" class="burger__link1">${feedback}</a></li>
            <li><a href="/" class="burger__link2">${about}</a></li>
          </ul>
        </div>
      </nav>
      <h2 class="header__group-name"></h2>
      <div class="dot__menu-wrap">
      <div class="dot__menu">
        <span></span>
      </div>
      </div>
      <nav class="dotted__nav">
        <ul class="dotted__list">
          <li><a href="/" class="dotted__link">${total}</a></li>
          <li><a href="/" class="dotted__link">${addPhoto}</a></li>
          <li><a href="/" class="dotted__link">${changeName}</a></li>
          <li><a href="/" class="dotted__link">${changeCurrency}</a></li>
        </ul>
      </nav>
    </div>
    <div class="header__row2">
      <div class="header__btn-wrapper">
        <button data-hash="overview" class="button button-overview">${buttonOverview}</button>
        <button data-hash="expenses_page" class="button button-expenses">${buttonExpenses}</button>
      </div>
    </div>
  </div>
</header>`;
