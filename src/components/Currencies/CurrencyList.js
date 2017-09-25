import React, { Component } from 'react';
import browse from '../../actions/Browse';
import { inject, observer } from "mobx-react";

class CurrencyList extends Component {
  componentDidMount() {
    browse.fetchCurrencies();
  }

  render() {
    const { currencyStore } = this.props;
    return (
      <div>
        {currencyStore.currencies.map((currency) => (<div key={currency.id}>
          id: {currency.id}
          available_supply: {currency.available_supply}
          last_updated: {currency.last_updated}
          market_cap_usd: {currency.market_cap_usd}
          name: {currency.name}
          percent_change_1h: {currency.percent_change_1h}
          percent_change_7d: {currency.percent_change_7d}
          percent_change_24h: {currency.percent_change_24h}
          price_btc: {currency.price_btc}
          price_usd: {currency.price_usd}
          rank: {currency.rank}
          symbol: {currency.symbol}
          total_supply: {currency.total_supply}
        </div>))}
      </div>
    );
  }
}

export default inject('currencyStore')(observer(CurrencyList));
