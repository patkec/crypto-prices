import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'

import Header from './Header';

import Settings from '../Settings';
import CurrencyList from '../Currencies/CurrencyList';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
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
