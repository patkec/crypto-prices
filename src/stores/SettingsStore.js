import { extendObservable, action } from 'mobx';

import { DEFAULT_FIAT_CURRENCY } from '../constants/fiatCurrencies';

export class SettingsStore {
  constructor() {
    extendObservable(this, {
      fiatCurrency: DEFAULT_FIAT_CURRENCY
    });

    this.setFiatCurrency = action(this.setFiatCurrency);
  }

  setFiatCurrency(value) {
    this.fiatCurrency = value;
  }
}
