import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { Button } from 'reactstrap';

import Error from '../shared/Error';
import CurrencyDetail from './CurrencyDetail';

class CurrencyDetailView extends Component {
  componentDidMount() {
    const { currencyStore, match } = this.props;
    currencyStore.loadCurrency(match.params.id);
  }

  refresh = () => {
    const { currencyStore, match } = this.props;
    currencyStore.loadCurrency(match.params.id, true);
  }

  render() {
    const { currency, error } = this.props.currencyStore;

    if (!currency && !error) {
      return <div>Loading ...</div>;
    }

    const content = error
      ? <Error error={error} />
      : <CurrencyDetail currency={currency} />;

    return (
      <div>
        <Button onClick={this.refresh}>Refresh</Button>
        {content}
      </div>
    );
  }
}

export default inject('currencyStore')(observer(CurrencyDetailView));
