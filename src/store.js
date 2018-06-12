import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'

export const history = createHistory();

const initialState = {
  likes: {jeden: 12, dwa: 9},
  connectivity: {
    isGraphConnected: null, // domyślny stan flagi, przed sprawdzeniem grafu
    blockGraphInputs: false, // domyślnie nie blokujemy wpisywania grafu
  },
  matrix: [], // graf w formie macierzy sąsiedztwa
  graphSize: 3,
};

const enhancers = [];

const middleware = [
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store