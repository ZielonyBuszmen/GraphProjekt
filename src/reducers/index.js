import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import likesReducer from './likesReducer';
import connectivityReducer from './connectivityReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  likes: likesReducer,
  connectivity: connectivityReducer,
});

export default rootReducer;