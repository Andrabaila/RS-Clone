export const addExpensesItem = (
    type: string,
    expenseId: number,
    expenseTitle: string,
    whoPaid: string,
    sum: number,
    svg: string
) =>
    `<div data-type=${type} data-expenseid=${expenseId} class="expenses-item">
  <div class="expenses-picture-text-wrapper">
    <div class="item-picture-expenses"><?xml version="1.0" ?>${svg}</div>
    <div class="item-text-expenses">
      <div class="text-top-expenses">${expenseTitle}</div>
      <div class="text-bottom-expenses">${whoPaid}</div>
    </div>
  </div>
  <div class="item-amount-expenses">${sum}</div>
</div>`;

export const makeMainHtml = () =>
    `<main class="expenses-main">
  <div class="expenses-block">
  
  </div>
</main>>`;
