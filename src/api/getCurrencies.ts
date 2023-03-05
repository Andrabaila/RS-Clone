import { API_NBRB, ERROR_MESSAGE } from '../data/constants';
import currenciesArr from '../data/currencies';
import currencyRatesArr from '../data/currencyRates';
import { CurrencyObj } from '../data/types';

async function getCurrencies() {
    const request = `${API_NBRB.baseUrl}${API_NBRB.currencies}`;

    try {
        const response = await fetch(request);
        const data = await response.json();

        data.forEach((currency: CurrencyObj) => {
            currencyRatesArr.forEach((curRateObj) => {
                if (curRateObj.Cur_ID === currency.Cur_ID) {
                    currenciesArr.push(currency);
                }
            });
        });
    } catch (err) {
        console.log(err);
        throw new Error(ERROR_MESSAGE);
    }
}

export default getCurrencies;
