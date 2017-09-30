import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

class CurrencyDetail extends Component {
  render() {
    const { currency, settingsStore } = this.props;
    const fiatCurrency = settingsStore.fiatCurrency.toLowerCase();

    return (
      <div>
        Rank: {currency.rank} <br />
        Name: {currency.name} <br />
        Symbol: {currency.symbol} <br />
        Price (BTC): {currency.price_btc} <br />
        Price ({fiatCurrency}): {currency[`price_${fiatCurrency}`]} <br />
        24h volume ({fiatCurrency}): {currency[`24h_volume_${fiatCurrency}`]} <br />
        Market cap ({fiatCurrency}): {currency[`market_cap_${fiatCurrency}`]} <br />
        Change (1h): {currency.percent_change_1h} <br />
        Change (24h): {currency.percent_change_24h} <br />
        Change (7d): {currency.percent_change_7d} <br />
        Total supply: {currency.total_supply} <br />
        Available supply: {currency.available_supply} <br />
      </div>
    );
  }
}

export default inject('settingsStore')(observer(CurrencyDetail));
