import { copyMatrix, listaNaMacierz } from '../helpers';

export const MACIERZ_SASIEDZTWA_CHANGED = 'matrix/MACIERZ_SASIEDZTWA_CHANGED';
export const LISTY_SASIEDZTWA_CHANGED = 'matrix/LISTY_SASIEDZTWA_CHANGED';


function matrixReduxer(state = [], action) {
  switch (action.type) {
    case MACIERZ_SASIEDZTWA_CHANGED: // graf w formie macierzy sąsiedztwa się zmienił - wystarczy go zapisać do store
      // const newMatrix = _.cloneDeep(action.graph);
      return copyMatrix(action.graph);
    case LISTY_SASIEDZTWA_CHANGED: // graf w formie listy sąsiedztw się zmienił - trzeba go zamienić na macierz sąsiedztwa i zapisać w store
      return listaNaMacierz(action.lists);
    default:
      return state;
  }
}

export default matrixReduxer;