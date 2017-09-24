import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, Container, Row, Col } from 'reactstrap'

import Settings from './features/settings/Settings';
import CurrencyList from './features/currencies/CurrencyList';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light>
          <NavbarBrand href="/">Crypto Prices</NavbarBrand>
          <Nav navbar>
            <NavItem>
                <Link to="/settings" className="nav-link">
                  <i className="fa fa-cog" aria-hidden="true"></i>
                </Link>
            </NavItem>
          </Nav>
        </Navbar>
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
