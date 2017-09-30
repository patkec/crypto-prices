import React from 'react';
import { mount } from 'enzyme';

import SettingsForm from './SettingsForm';

it('renders without crashing', () => {
  mount(<SettingsForm />);
});

it('displays given fiat currency as currently selected', () => {
  const wrapper = mount(<SettingsForm fiatCurrency="EUR" />);

  expect(wrapper.find('select')).toHaveProp('value', 'EUR');
});

it('calls the save callback with selected fiat currency', () => {
  let fiatCurrency = null;
  const callback = (value) => { fiatCurrency = value; };
  const wrapper = mount(<SettingsForm fiatCurrency="EUR" onSave={callback} />);

  wrapper.instance().save({ preventDefault: () => {} });

  expect(fiatCurrency).toEqual('EUR');
});
