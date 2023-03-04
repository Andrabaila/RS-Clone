import currencyRatesArr from '../data/currencyRates';

function setCurrency(event: MouseEvent) {
    let currency: string;
    if (
        event instanceof MouseEvent &&
        event.type === 'click' &&
        (event.target instanceof HTMLLIElement || event.target instanceof HTMLSpanElement) &&
        event.target.id
    ) {
        currency = event.target.id;
        localStorage.setItem('currency', currency);
        currencyRatesArr.forEach((currencyObj) => {
            if (String(currencyObj.Cur_Abbreviation) === String(currency)) {
                localStorage.setItem('currencyRate', String(currencyObj.Cur_OfficialRate));
                localStorage.setItem('currencyScale', String(currencyObj.Cur_Scale));
            }
        });
        window.history.back();
    }
}

export default setCurrency;
