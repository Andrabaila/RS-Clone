const addUserPageHtml = (
    arrowHref: string,
    expensesHref: string,
    paymentsHref: string,
    benefitHref: string,
    btnEdit: string,
    balance: string,
    expenses: string,
    payments: string,
    benefitsFrom: string,
    deletePerson: string,
    btnCancel: string,
    btnDelete: string
) =>
    `<header class="header-upage">
  <div class="header__wrapper-upage">
    <div class="header-upage-row1">
      <div class="btn-upage-arrow">
        <a href=${arrowHref}>
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
      <div class="btn-upage-delete">${btnEdit}</div>
    </div>
    <div class="header-upage-row2">
      <div class="upage-row2-name">
        <input class="upage-row2-input disabled" type="text" name="" id="" maxlength="12">
      </div>
    </div>
  </div>
</header>
<main class="upage-main">
  <div class="upage-block">
    <div class="upage-balance">
      <div class="balance-text">${balance}</div>
      <div class="balance-number">${localStorage.getItem('userBalance')}</div>
    </div>
    <div class="upage-wrap">
    <a href=${expensesHref}>
      <div class="upage-expenses">
        <div class="expenses-text">${expenses}</div>
        <div class="expenses-number">10</div>
      </div>
      </a>
      <a href=${paymentsHref}>
      <div class="upage-payments">
        <div class="payments-text">${payments}</div>
        <div class="payments-number">10</div>
      </div>
      </a>
    </div>
    <a href=${benefitHref}>
    <div class="upage-benefit">
      <div class="benefit-text">${benefitsFrom}</div>
      <div class="benefit-number">10</div>
    </div>
    </a>
  </div>
  <button class="button button-upage display-none">${btnDelete}</button>
  <div class="modal1">
    <div class="modal-upage-block">
      <h3 class="modal-upage-h3">${deletePerson}</h3>
      <div class="modal-upage-buttons">
        <button class="modal1__trash-cancel">${btnCancel}</button>
        <button class="modal1__trash-delete">${btnDelete}</button>
      </div>
    </div>
  </div>
</main>`;

export default addUserPageHtml;
