import React from 'react';
import { Provider } from 'mobx-react';
import { shallow, mount } from 'enzyme';

import CurrencyListView from './CurrencyListView';

it('renders without crashing', () => {
  const currencyStore = {};

  shallow(<CurrencyListView currencyStore={currencyStore} />);
});

it('loads currencies on first run', () => {
  let called = false;
  const settingsStore = {};
  const currencyStore = { currencies: [], loadCurrencies: () => { called = true; } };

  mount(
    <Provider currencyStore={currencyStore} settingsStore={settingsStore}>
      <CurrencyListView />
    </Provider>
  );

  expect(called).toEqual(true);
});

it('does not load currencies if already loaded', () => {
  let called = false;
  const settingsStore = {};
  const currencyStore = { currencies: [], loadCurrencies: () => { called = true; } };
  currencyStore.currencies.length = 1;

  mount(
    <Provider currencyStore={currencyStore} settingsStore={settingsStore}>
      <CurrencyListView />
    </Provider>
  );

  expect(called).toEqual(false);
});

it('loads currencies on refresh', () => {
  let called = false;
  const settingsStore = {};
  const currencyStore = { currencies: [], loadCurrencies: () => { called = true; } };

  const wrapper = mount(
    <Provider currencyStore={currencyStore} settingsStore={settingsStore}>
      <CurrencyListView />
    </Provider>
  );

  wrapper.find('button').simulate('click');

  expect(called).toEqual(true);
});
