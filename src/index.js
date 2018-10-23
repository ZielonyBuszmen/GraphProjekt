import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './components/App'

import 'bootstrap/dist/css/bootstrap.min.css';

export const target = document.querySelector('#root');

export const AppWithProvider = (store, history) =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>;

render(
  AppWithProvider(store, history),
  target
);