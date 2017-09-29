import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class CurrencyList extends Component {
  constructor(props) {
    super(props);

    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    const { currencyStore } = this.props;
    currencyStore.loadCurrencies();
  }

  refresh() {
    const { currencyStore } = this.props;
    currencyStore.loadCurrencies();
  }

  render() {
    const { currencies } = this.props.currencyStore;
    return (
      <div>
        <Button onClick={this.refresh}>Refresh</Button>
        <Table hover>
          <thead>
            <tr>
              <th>rank</th>
              <th>symbol</th>
              <th>price</th>
              <th>24h change</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map((currency) => (
              <tr key={currency.id}>
                <th scope="row">{currency.rank}</th>
                <td>
                  <Link to={`/currencies/${currency.id}`}>{currency.symbol}</Link>
                </td>
                <td>{currency.price_usd}</td>
                <td>{currency.percent_change_24h}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default inject('currencyStore')(observer(CurrencyList));
