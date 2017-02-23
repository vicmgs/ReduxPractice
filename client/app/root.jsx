import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router, Route } from 'react-router';
import App from './app.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </Provider>
);

export default Root;
