import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

import { settings } from '../../constants/routes';

class Header extends Component {
  render() {
    const renderSettingsIcon = (props) => {
      if (props.location.pathname === settings) {
        return null;
      }
      return (
        <Nav navbar>
          <NavItem>
            <Link to={settings} className="nav-link">
              <i className="fa fa-cog" aria-hidden="true"></i>
            </Link>
          </NavItem>
        </Nav>
      );
    };

    return (
      <Navbar color="light" light>
        <Link to="/" className="navbar-brand">Crypto Prices</Link>
        <Route render={renderSettingsIcon} />
      </Navbar>
    );
  }
}

export default Header;
