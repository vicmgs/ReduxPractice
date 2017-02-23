import React from 'react';
import { Provider, connect } from 'react-redux';
import App from './app.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
