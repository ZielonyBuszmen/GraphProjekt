import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import likesReducer from './likesReducer';
import connectivityReducer from './connectivityReducer';
import matrixReduxer from './matrixReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  likes: likesReducer,
  connectivity: connectivityReducer,
  matrix: matrixReduxer, // tutaj będzie przechowywany graf w formie macierzy sąsiedztwa
});

export default rootReducer;