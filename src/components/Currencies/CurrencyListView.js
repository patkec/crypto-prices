import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';

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
        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
        </Breadcrumb>

        <h1>
          Top 100 cryptocurrencies
          <Button className="float-right" onClick={this.refresh}>Refresh</Button>
        </h1>
        {content}
      </div>
    );
  }
}

export default inject('currencyStore')(observer(CurrencyList));
