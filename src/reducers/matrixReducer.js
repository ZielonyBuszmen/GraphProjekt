import { copyMatrix } from '../helpers';

export const MACIERZ_SASIEDZTWA_CHANGED = 'matrix/MACIERZ_SASIEDZTWA_CHANGED';
export const LISTY_SASIEDZTWA_CHANGED = 'matrix/LISTY_SASIEDZTWA_CHANGED';


function matrixReduxer(state = [], action) {
  switch (action.type) {
    case MACIERZ_SASIEDZTWA_CHANGED: // graf w formie macierzy sąsiedztwa się zmienił - wystarczy go zapisać do store
      // const newMatrix = _.cloneDeep(action.graph);
      const newMatrix = copyMatrix(action.graph);
      return newMatrix;
    case LISTY_SASIEDZTWA_CHANGED: // graf w formie listy sąsiedztw się zmienił - trzeba go zamienić na macierz sąsiedztwa i zapisać w store
      // todo - zamiana grafu w formie listy sąsiedztw na macierz sąsiedztwa
      break;
    default:
      return state;
  }
}

export default matrixReduxer;