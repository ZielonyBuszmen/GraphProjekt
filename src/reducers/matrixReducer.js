import { copyMatrix, createEmptyMatrix, listaNaMacierz } from '../helpers';

export const MACIERZ_SASIEDZTWA_CHANGED = 'matrix/MACIERZ_SASIEDZTWA_CHANGED';
export const LISTY_SASIEDZTWA_CHANGED = 'matrix/LISTY_SASIEDZTWA_CHANGED';
export const CREATE_EMPTY_MATRIX = 'matrix/CREATE_EMPTY_MATRIX';

function matrixReduxer(state = [], action) {
  switch (action.type) {
    case MACIERZ_SASIEDZTWA_CHANGED: // graf w formie macierzy sąsiedztwa się zmienił - wystarczy go zapisać do store
      const copiedMatrix = copyMatrix(state);
      copiedMatrix[action.row][action.col] = action.value;
      return copiedMatrix;
    case LISTY_SASIEDZTWA_CHANGED: // graf w formie listy sąsiedztw się zmienił - trzeba go zamienić na macierz sąsiedztwa i zapisać w store
      return listaNaMacierz(action.lists);
    case CREATE_EMPTY_MATRIX:
      return createEmptyMatrix(action.size, 0);
    default:
      return state;
  }
}

export default matrixReduxer;