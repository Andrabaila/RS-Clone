function convertAmountAtExchangeRate(amount: number) {
    let convertedAmount = amount;
    if (localStorage.getItem('currencyRate') && localStorage.getItem('currencyScale')) {
        const currencyRate = Number(localStorage.getItem('currencyRate'));
        const currencyScale = Number(localStorage.getItem('currencyScale'));
        convertedAmount = Math.round((amount / currencyRate) * currencyScale * 100) / 100;
    }

    return convertedAmount;
}

export default convertAmountAtExchangeRate;
