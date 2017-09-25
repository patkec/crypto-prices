import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'

import Header from './Header';
import Settings from '../Settings';
import CurrencyList from '../Currencies/CurrencyList';

import { currencies, settings } from '../../constants/routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col>
              <Switch>
                <Route path={currencies} component={CurrencyList} />
                <Route path={settings} component={Settings} />

                <Redirect to={currencies} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
