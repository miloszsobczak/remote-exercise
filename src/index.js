import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import App from './web/app/App';
import AppStore from './web/app/redux/AppStore'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={AppStore.configure()}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
