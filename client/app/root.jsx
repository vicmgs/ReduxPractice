import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './app.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/(:filter)' component={App} />
    </Router>
  </Provider>
);

export default Root;
