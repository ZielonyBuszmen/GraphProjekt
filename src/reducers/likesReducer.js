// tutaj wszystkie typy akcji
export const INCREMENT_LIKES = 'posts/INCREMENT_LIKES';

// przykładowy reducer
function likesReducer(state = [], action) {
  switch (action.type) {
    case INCREMENT_LIKES:
      const newState = {...state};
      if (action.ktory === 'jeden') {
        newState.jeden++;
      } else if (action.ktory === 'dwa') {
        newState.dwa++;
      }
      return newState;
    default:
      return state;
  }

}

export default likesReducer;