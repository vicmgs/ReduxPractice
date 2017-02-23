import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore.jsx'
import Root from './root.jsx'

const store = configureStore();
ReactDOM.render(<Root store={store} />, document.getElementById('app'));
