import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from "mobx-react";

import { getCurrencyRoute } from '../../constants/routes';

class CurrencyRow extends Component {
  render() {
    const { currency, settingsStore } = this.props;
    const fiatCurrency = settingsStore.fiatCurrency.toLowerCase();

    return (
      <tr>
        <th scope="row">{currency.rank}</th>
        <td>
          <Link to={getCurrencyRoute(currency.id)}>{currency.symbol}</Link>
        </td>
        <td>{currency[`price_${fiatCurrency}`]}</td>
        <td>{currency.percent_change_24h}</td>
      </tr>
    );
  }
}

export default inject('settingsStore')(observer(CurrencyRow));
