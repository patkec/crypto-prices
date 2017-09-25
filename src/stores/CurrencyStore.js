import { extendObservable, action } from 'mobx';

export class CurrencyStore {
  constructor() {
    extendObservable(this, {
      currencies: []
    });

    this.setList = action(this.setList);
  }

  setList(list) {
    this.currencies = list;
  }
}

const store = new CurrencyStore();
export default store;
