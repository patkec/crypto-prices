import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { Badge, Button } from 'reactstrap';

class CurrencyDetail extends Component {
  render() {
    const { currency, settingsStore } = this.props;
    const fiatCurrency = settingsStore.fiatCurrency;
    const fiatCurrencyProp = fiatCurrency.toLowerCase();

    return (
      <div>
        <h1>
          <small>#{currency.rank}</small> {currency.name} <small><Badge>{currency.symbol}</Badge></small>
          <Button className="float-right" onClick={this.props.refresh}>Refresh</Button>
        </h1>

        <dl className="row">
          <dt className="col-sm-3">Price (BTC)</dt>
          <dd className="col-sm-9">{currency.price_btc}</dd>

          <dt className="col-sm-3">Price ({fiatCurrency})</dt>
          <dd className="col-sm-9">{currency[`price_${fiatCurrencyProp}`]}</dd>
        </dl>

        <dl className="row">
          <dt className="col-sm-3">24h volume</dt>
          <dd className="col-sm-9">{currency[`24h_volume_${fiatCurrencyProp}`]} {fiatCurrency}</dd>

          <dt className="col-sm-3">Market cap</dt>
          <dd className="col-sm-9">{currency[`market_cap_${fiatCurrencyProp}`]} {fiatCurrency}</dd>
        </dl>

        <dl className="row">
          <dt className="col-sm-3">Change (1h)</dt>
          <dd className="col-sm-9">{currency.percent_change_1h}</dd>

          <dt className="col-sm-3">Change (24h)</dt>
          <dd className="col-sm-9">{currency.percent_change_24h}</dd>

          <dt className="col-sm-3">Change (7d)</dt>
          <dd className="col-sm-9">{currency.percent_change_7d}</dd>
        </dl>

        <dl className="row">
          <dt className="col-sm-3">Total supply</dt>
          <dd className="col-sm-9">{currency.total_supply}</dd>

          <dt className="col-sm-3">Available supply</dt>
          <dd className="col-sm-9">{currency.available_supply}</dd>
        </dl>
      </div>
    );
  }
}

export default inject('settingsStore')(observer(CurrencyDetail));
