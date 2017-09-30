import { extendObservable, reaction, action } from 'mobx';
import { asyncAction } from 'mobx-utils';

export class CurrencyStore {
  constructor(transport, settingsStore) {
    extendObservable(this, {
      error: null,
      currency: null,
      currencies: []
    });

    this.transport = transport;

    this.handleError = action(this.handleError);
    this.loadCurrency = asyncAction(this.loadCurrency);
    this.loadCurrencies = asyncAction(this.loadCurrencies);

    this.fiatCurrency = settingsStore.fiatCurrency;
    reaction(() => settingsStore.fiatCurrency, (fiatCurrency) => {
      this.fiatCurrency = fiatCurrency;
      // Fiat currency changed, list of currencies has to be refreshed to get prices in new fiat currency.
      this.currencies = [];
    });
  }

  handleError = (error) => {
    this.error = error;
    return null;
  };

  * loadCurrencies() {
    this.error = null;
    this.currencies = yield this.transport.fetchCurrencies(this.fiatCurrency).catch(this.handleError) || [];
  }

  * loadCurrency(id, force) {
    if (force) {
      this.currencies = [];
    }

    let result = this.currencies.find((currency) => currency.id === id);
    if (!result) {
      this.error = null;
      result = yield this.transport.fetchCurrency(id, this.fiatCurrency).catch(this.handleError);
    }
    this.currency = result;
  }
}
