import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import { Form, FormGroup, Label, Button, Input, Alert } from 'reactstrap';

import { AVAILABLE_FIAT_CURRENCIES } from '../../constants/fiatCurrencies';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saved: false,
      fiatCurrency: props.settingsStore.fiatCurrency
    };
  }

  save = (e) => {
    e.preventDefault();
    this.setState({ saved: true });
    this.props.settingsStore.setFiatCurrency(this.state.fiatCurrency);
  }

  dismissAlert = () => {
    this.setState({ saved: false });
  }

  render() {
    return (
      <div>
        <Alert color="success" isOpen={this.state.saved} toggle={this.dismissAlert}>
          Settings have been updated.
        </Alert>
        <Form onSubmit={this.save}>
          <FormGroup>
            <Label for="fiatCurrency">Fiat currency</Label>
            <Input
              type="select"
              name="fiatCurrency"
              id="fiatCurrency"
              value={this.state.fiatCurrency}
              onChange={(value) => { this.setState({ fiatCurrency: value.target.value }); }}
              className="form-control"
            >
              {AVAILABLE_FIAT_CURRENCIES.map((fiatCurrency) => (<option key={fiatCurrency} value={fiatCurrency}>{fiatCurrency}</option>))}
            </Input>
          </FormGroup>
          <Button>Save</Button>
        </Form>
      </div>
    );
  }
}

export default inject('settingsStore')(observer(Settings));
