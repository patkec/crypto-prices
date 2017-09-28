import { extendObservable } from 'mobx';
import { asyncAction } from 'mobx-utils';

export class CurrencyStore {
  constructor(transport) {
    extendObservable(this, {
      currency: null,
      currencies: []
    });

    this.loaded = false;
    this.transport = transport;

    this.loadCurrency = asyncAction(this.loadCurrency);
    this.loadCurrencies = asyncAction(this.loadCurrencies);
  }

  * loadCurrencies() {
    this.loaded = true;
    this.currencies = yield this.transport.fetchCurrencies();
  }

  * loadCurrency(id) {
    let result = this.currencies.find((currency) => currency.id === id);
    if (!result) {
      result = yield this.transport.fetchCurrency(id);
    }
    this.currency = result;
  }
}
