import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { currencies } from '../../constants/routes';

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
      : <CurrencyDetail currency={currency} refresh={this.refresh} />;

    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to={currencies}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{currency ? currency.name : 'Detail'}</BreadcrumbItem>
        </Breadcrumb>

        {content}
      </div>
    );
  }
}

export default inject('currencyStore')(observer(CurrencyDetailView));
