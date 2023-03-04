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
        console.log(currencyRatesArr);
        currencyRatesArr.forEach((currencyObj) => {
            console.log(currencyObj.Cur_Abbreviation);
            //           console.log(currency);
            if (String(currencyObj.Cur_Abbreviation) === String(currency)) {
                console.log('yes');
                localStorage.setItem('currencyRate', String(currencyObj.Cur_OfficialRate));
                localStorage.setItem('currencyScale', String(currencyObj.Cur_Scale));
            }
        });
        window.history.back();
    }
}

export default setCurrency;
