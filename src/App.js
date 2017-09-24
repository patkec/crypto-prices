import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'

import Menu from './shared/Menu';

import Settings from './features/settings/Settings';
import CurrencyList from './features/currencies/CurrencyList';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Container>
          <Row>
            <Col>
              <Route path="/currencies" component={CurrencyList} />
              <Route path="/settings" component={Settings} />

              <Route exact path="/" component={CurrencyList} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
