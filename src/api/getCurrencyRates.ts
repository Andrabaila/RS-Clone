import { API_NBRB, ERROR_MESSAGE } from '../data/constants';
import currencyRatesArr from '../data/currencyRates';
import { CurrencyRateObj } from '../data/types';
import getCurrencies from './getCurrencies';

async function getCurrencyRates() {
    const request = `${API_NBRB.baseUrl}${API_NBRB.rates}?periodicity=0`;

    try {
        const response = await fetch(request);
        const data = await response.json();

        data.forEach((currency: CurrencyRateObj) => {
            currencyRatesArr.push(currency);
        });
        getCurrencies();
    } catch (err) {
        console.log(err);
        throw new Error(ERROR_MESSAGE);
    }
}

export default getCurrencyRates;
