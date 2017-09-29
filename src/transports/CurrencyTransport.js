import { handleError } from './utils';

export class CurrencyTransport {
  fetchCurrencies() {
    return fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(handleError)
      .then((response) => response.json())
      .then((list) => {
        list.forEach((currency) => {
          currency.last_updated = new Date(parseInt(currency.last_updated, 10) * 1000);
        });
        return list;
      });
  }

  fetchCurrency(id) {
    return fetch(`https://api.coinmarketcap.com/v1/ticker/${id}/`)
      .then(handleError)
      .then((response) => response.json())
      .then((list) => {
        if (list.length !== 1) {
          throw new Error(`Error retrieving information for ${id}.`);
        }
        const result = list[0];
        result.last_updated = new Date(parseInt(result.last_updated, 10) * 1000);
        return result;
      });
  }
}

const transport = new CurrencyTransport();
export default transport;
