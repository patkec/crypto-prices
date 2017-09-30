import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { Button } from 'reactstrap';

import Error from '../shared/Error';
import CurrencyTable from './CurrencyTable';

class CurrencyList extends Component {
  componentDidMount() {
    const { currencyStore } = this.props;
    if (currencyStore.currencies.length === 0) {
      currencyStore.loadCurrencies();
    }
  }

  refresh = () => {
    const { currencyStore } = this.props;
    currencyStore.loadCurrencies();
  }

  render() {
    const { currencyStore } = this.props;

    const content = currencyStore.error
      ? <Error error={currencyStore.error} />
      : <CurrencyTable currencies={currencyStore.currencies} />;

    return (
      <div>
        <Button onClick={this.refresh}>Refresh</Button>
        {content}
      </div>
    );
  }
}

export default inject('currencyStore')(observer(CurrencyList));
