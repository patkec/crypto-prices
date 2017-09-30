import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class Error extends Component {
  render() {
    let { error } = this.props;
    if (typeof error.toString === 'function') {
      error = error.toString();
    }

    return <Alert color="danger">{error}</Alert>;
  }
}

export default Error;
