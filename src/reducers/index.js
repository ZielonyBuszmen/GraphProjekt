import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import likesReducer from './likesReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  likes: likesReducer,
});

export default rootReducer;