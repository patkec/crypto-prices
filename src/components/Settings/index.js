import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { Link } from 'react-router-dom';
import { Alert, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { currencies } from '../../constants/routes';

import SettingsForm from './SettingsForm';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = { saved: false };
  }

  save = (fiatCurrency) => {
    this.setState({ saved: true });
    this.props.settingsStore.setFiatCurrency(fiatCurrency);
  }

  dismissAlert = () => {
    this.setState({ saved: false });
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to={currencies}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Settings</BreadcrumbItem>
        </Breadcrumb>

        <Alert color="success" isOpen={this.state.saved} toggle={this.dismissAlert}>
          Settings have been updated.
        </Alert>

        <SettingsForm onSave={this.save} fiatCurrency={this.props.settingsStore.fiatCurrency} />
      </div>
    );
  }
}

export default inject('settingsStore')(observer(Settings));
