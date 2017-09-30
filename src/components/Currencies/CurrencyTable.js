import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { Table } from 'reactstrap';

import CurrencyRow from './CurrencyRow';

class CurrencyTable extends Component {
  render() {
    const { currencies, settingsStore } = this.props;

    return (
      <Table hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Symbol</th>
            <th>Price ({settingsStore.fiatCurrency})</th>
            <th>24h change</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency) => (
            <CurrencyRow key={currency.id} currency={currency} />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default inject('settingsStore')(observer(CurrencyTable));
