// tutaj wszystkie typy akcji
export const INCREMENT_LIKES = 'posts/INCREMENT_LIKES';

// przykładowy reducer
function posts(state = [], action) {
  switch (action.type) {
    case INCREMENT_LIKES:
      const newState = [...state];
      newState[action.index].likes++;
      return newState;
    default:
      return state;
  }

}

export default posts;