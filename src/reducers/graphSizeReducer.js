export const CHANGE_GRAPH_SIZE = 'CHANGE_GRAPH_SIZE';

export default function graphSizeReducer(state = [], action) {
  switch (action.type) {
    case CHANGE_GRAPH_SIZE:
      return action.size;
    default:
      return state;
  }
}
