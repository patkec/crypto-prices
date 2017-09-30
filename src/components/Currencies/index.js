import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { currencies, currency } from '../../constants/routes';

import CurrencyListView from './CurrencyListView';
import CurrencyDetailView from './CurrencyDetailView';

class Currencies extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={currencies} component={CurrencyListView} />
        <Route path={currency} component={CurrencyDetailView} />
      </Switch>
    );
  }
}

export default Currencies;
