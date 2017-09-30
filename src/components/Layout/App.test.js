import React from 'react';
import { Provider } from 'mobx-react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

it('renders without crashing', () => {
  const settingsStore = { fiatCurrency: 'USD' };
  const currencyStore = { currencies: [], loadCurrencies: () => {} };

  mount(
    <Provider currencyStore={currencyStore} settingsStore={settingsStore}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
});
