import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// jak dodać reducer "posts"? Otóż:
// import posts from './posts';
const rootReducer = combineReducers({
  routing: routerReducer,
  // posts
});

export default rootReducer;