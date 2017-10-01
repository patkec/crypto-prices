import React from 'react';
import { Provider } from 'mobx-react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import CurrencyTable from './CurrencyTable';

it('should display all rows', () => {
  const settingsStore = { fiatCurrency: 'USD' };
  const currencies = [];
  for (let i = 0; i < 10; i++) {
    currencies[i] = { id: i };
  }

  const wrapper = mount(
    <Provider settingsStore={settingsStore}>
      <MemoryRouter>
        <CurrencyTable currencies={currencies} />
      </MemoryRouter>
    </Provider>);

  expect(wrapper.find('tbody tr').length).toEqual(currencies.length);
});
