import { CurrencyStore } from './CurrencyStore';
import { SettingsStore } from './SettingsStore';
import currencyTransport from '../transports/CurrencyTransport';

const settingsStore = new SettingsStore();
const currencyStore = new CurrencyStore(currencyTransport, settingsStore);

export {
  currencyStore,
  settingsStore
};
