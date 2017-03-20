import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore.jsx'
import Root from './root.jsx'
import Perf from 'react-addons-perf'
window.Perf = Perf

const store = configureStore();
ReactDOM.render(<Root store={store} />, document.getElementById('app'));
