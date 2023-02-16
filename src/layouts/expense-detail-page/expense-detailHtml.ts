export const addModalBlockForHtml = (name: string, percent: number, sum: number) =>
    `<div class="expense-detail-created">
      <div class="expense-detail-text">${name}</div>
      <div class="expense-detail-num">${percent}%</div>
      <div class="expense-detail-num">${sum}</div>
    </div>`;

export const addExpenseDetailHtml = (
    btnEdit: string,
    picture: string,
    amount: string,
    amountSum: number,
    currency: string,
    currencyType: string,
    by: string,
    byName: string,
    forWhom: string,
    forUsers: number,
    from: string,
    to: string,
    date: string,
    dateText: string,
    btnDelete: string,
    deleteExpense: string,
    btnCancel: string,
    btnDONE: string,
    settleDisplayNone: string,
    goodsDisplayNone: string,
    persons: string
) => `<header class="header-expense-detail">
<div class="header__wrapper-expense-detail">
  <div class="header-expense-detail-top">
    <div class="btn-expense-detail-arrow">
      <a href='/#/expenses_page' onclick="window.location.hash = '#/expense_detail';">
        <?xml version="1.0" ?>
        <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg
          height="28px" id="Layer_1" style="enable-background:new 0 0 128 128;" version="1.1" viewBox="0 0 128 128"
          width="28px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <g>
            <g>
              <line style="fill:none;stroke:#fff;stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;"
                x1="57.12" x2="17.787" y1="103.334" y2="64" />
              <line style="fill:none;stroke:#fff;stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;"
                x1="17.787" x2="57.12" y1="64" y2="24.666" />
            </g>
            <line style="fill:none;stroke:#fff;stroke-width:12;stroke-miterlimit:10;" x1="17.787" x2="118.213"
              y1="64" y2="64" />
          </g>
        </svg>
      </a>
    </div>
    <div class="btn-expense-detail-edit">${btnEdit}</div>
  </div>
  <div class="header-expense-detail-bottom">
    <div class="expense-detail-bottom-svg">
      ${picture}
    </div>
    <div class="expense-detail-bottom-name">
      <input class="expense-detail-input disabled" type="text" name="" id="" maxlength="50">
    </div>
  </div>
</div>
</header>
<main class="expense-detail-main">
<div class="expense-detail-block">
  <div class="expense-detail-wrap">
    <div class="expense-detail-amount">
      <div class="payments-text">${amount}</div>
      <div class="payments-number">${amountSum}</div>
    </div>
    <div class="expense-detail-currency">
      <div class="payments-text">${currency}</div>
      <div class="payments-number">${currencyType}</div>
    </div>
  </div>
  <div class="expense-detail-wrap-goods ${settleDisplayNone}">
    <div class="expense-detail-by">
      <div class="payments-text">${by}</div>
      <div class="payments-number">${byName}</div>
    </div>
    <div class="expense-detail-for-btn">
      <div class="expense-detail-for">
        <div class="payments-text">${forWhom}</div>
        <div class="payments-number">${forUsers} ${persons}</div>
      </div>
    </div>
  </div>
  <div class="expense-detail-wrap-settle ${goodsDisplayNone}">
    <div class="expense-detail-by">
      <div class="payments-text">${by}</div>
      <div class="payments-number">${byName}</div>
    </div>
    <div class="expense-detail-for-btn-no">
      <div class="expense-detail-for">
        <div class="payments-text">${from}</div>
        <div class="payments-number">${to}</div>
      </div>
    </div>
  </div>
  <div class="expense-detail-created">
    <div class="payments-text">${date}</div>
    <div class="payments-number">${dateText}</div>
  </div>
</div>
<button class="button button-expense-detail display-none">${btnDelete}</button>

<div class="modal1">
  <div class="modal-expense-detail-block display-none">
    <h3 class="modal-expense-detail-h3">${deleteExpense}</h3>
    <div class="modal-expense-detail-buttons">
      <button class="modal1__trash-cancel">${btnCancel}</button>
      <a href="#/expenses_page">
        <button class="modal1__trash-delete">${btnDelete}</button>
      </a>
    </div>
  </div>
  <div class="modal-expense-detail-block-for display-none">
    
    <div class="expense-detail-for-btn-wrap">
      <button class="button expense-detail-for-done-btn">${btnDONE}</button>
    </div>
  </div>
</div>
</main>`;
