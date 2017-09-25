import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { Button } from 'reactstrap';

import browse from '../../actions/Browse';

class CurrencyList extends Component {
  constructor(props) {
    super(props);

    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    browse.fetchCurrencies();
  }

  refresh() {
    browse.fetchCurrencies();
  }

  render() {
    const { currencyStore } = this.props;
    return (
      <div>
        <Button onClick={this.refresh}>Refresh</Button>
        {currencyStore.currencies.map((currency) => (<div key={currency.id}>
          id: {currency.id}
          available_supply: {currency.available_supply}
          last_updated: {currency.last_updated.toString()}
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
