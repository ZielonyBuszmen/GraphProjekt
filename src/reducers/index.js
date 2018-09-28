import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import connectivityReducer from './connectivityReducer';
import matrixReducer from './matrixReducer';
import graphSizeReducer from './graphSizeReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  connectivity: connectivityReducer,
  matrix: matrixReducer, // tutaj będzie przechowywany graf w formie macierzy sąsiedztwa
  graphSize: graphSizeReducer,
});

export default rootReducer;