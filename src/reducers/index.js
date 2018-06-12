import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import likesReducer from './likesReducer';
import connectivityReducer from './connectivityReducer';
import matrixReduxer from './matrixReducer';
import graphSizeReducer from './graphSizeRecuder';

const rootReducer = combineReducers({
  routing: routerReducer,
  likes: likesReducer,
  connectivity: connectivityReducer,
  matrix: matrixReduxer, // tutaj będzie przechowywany graf w formie macierzy sąsiedztwa
  graphSize: graphSizeReducer,
});

export default rootReducer;