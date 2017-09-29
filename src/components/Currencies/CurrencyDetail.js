import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

class CurrencyDetail extends Component {
  componentDidMount() {
    const { currencyStore, match } = this.props;
    currencyStore.loadCurrency(match.params.id);
  }

  render() {
    const { currency } = this.props.currencyStore;

    if (!currency) {
      return <div>Not found.</div>;
    }

    return (
      <div>{currency.id}</div>
    );
  }
}

export default inject('currencyStore')(observer(CurrencyDetail));
