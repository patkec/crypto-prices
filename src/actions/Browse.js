import { ActionBase } from './ActionBase';

import currencyStore from '../stores/CurrencyStore';

export class BrowseAction extends ActionBase {
  fetchCurrencies() {
    return fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(this.handleError)
      .then(this.toJson)
      .then((list) => {
        currencyStore.setList(list);
      });
  }
}

const action = new BrowseAction();
export default action;
