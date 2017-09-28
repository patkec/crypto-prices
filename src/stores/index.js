import { CurrencyStore } from './CurrencyStore';
import currencyTransport from '../transports/CurrencyTransport';

const currencyStore = new CurrencyStore(currencyTransport);

export {
  currencyStore
};
