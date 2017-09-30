import React, { Component } from 'react';
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';

import { AVAILABLE_FIAT_CURRENCIES } from '../../constants/fiatCurrencies';

class SettingsForm extends Component {
  constructor(props) {
    super(props);

    this.state = { fiatCurrency: props.fiatCurrency };
  }

  save = (e) => {
    e.preventDefault();
    this.props.onSave(this.state.fiatCurrency);
  }

  render() {
    return (
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
    );
  }
}

export default SettingsForm;
