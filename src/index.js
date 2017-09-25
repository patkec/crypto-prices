import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';

import * as stores from './stores';

import App from './components/Layout/App';
import registerServiceWorker from './registerServiceWorker';

/* Styles */
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

useStrict(true);

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
