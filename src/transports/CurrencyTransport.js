import { handleError } from './utils';

const apiUrl = 'https://api.coinmarketcap.com/v1/ticker/';

export class CurrencyTransport {
  handleResponse(response) {
    if (response.error) {
      throw new Error(response.error);
    }
    if (!Array.isArray(response)) {
      throw new Error(`Expected array, got ${typeof response}.`);
    }

    response.forEach((currency) => {
      // Convert from epoch to date.
      currency.last_updated = new Date(parseInt(currency.last_updated, 10) * 1000);
    });

    return response;
  }

  fetchCurrencies(fiatCurrency) {
    if (!fiatCurrency) {
      throw new Error('Unknown fiat currency.');
    }

    return fetch(`${apiUrl}?limit=100&convert=${fiatCurrency}`)
      .then(handleError)
      .then((response) => response.json())
      .then(this.handleResponse);
  }

  fetchCurrency(id, fiatCurrency) {
    if (!id) {
      throw new Error('Unknown currency.');
    }
    if (!fiatCurrency) {
      throw new Error('Unknown fiat currency.');
    }

    return fetch(`${apiUrl}${id}/?convert=${fiatCurrency}`)
      .then(handleError)
      .then((response) => response.json())
      .then(this.handleResponse)
      .then((list) => {
        if (list.length !== 1) {
          throw new Error(`Error retrieving information for ${id}.`);
        }

        return list[0];
      });
  }
}

const transport = new CurrencyTransport();
export default transport;
