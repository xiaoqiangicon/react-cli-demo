import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { Provider } from 'react-redux'
import Router from './router.js'
import store from './store/store.js'

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById('root')
);
