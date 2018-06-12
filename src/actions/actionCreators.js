import {INCREMENT_LIKES} from '../reducers/likesReducer';
import { BLOCK_GRAPH_INPUTS, CHECK_GRAPH_CONNECTIVITY } from '../reducers/connectivityReducer';
import { CREATE_EMPTY_MATRIX, LISTY_SASIEDZTWA_CHANGED, MACIERZ_SASIEDZTWA_CHANGED } from '../reducers/matrixReducer';
import { CHANGE_GRAPH_SIZE } from '../reducers/graphSizeRecuder';

export function increment(ktory, info) {
  return {
    type: INCREMENT_LIKES,
    ktory,
    info,
    dodatkowe: 'jakies inne dane',
  };
}

/**
 * @param graph - array[][], graf w formie macierzy sąsiedztwa
 * @return {{type, graph: *}}
 */
export function checkGraphConnectivity(graph) {
  return {
    type: CHECK_GRAPH_CONNECTIVITY,
    graph,
  }
}

/**
 * @param col - kolumna
 * @param row - wiersz
 * @param value - wartość
 * @returns {{type: string, col: *, row: *, value: *}}
 */
export function macierzSasiedztwaChanged(row, col, value) {
  return {
    type: MACIERZ_SASIEDZTWA_CHANGED,
    row,
    col,
    value,
  }
}

/**
 * @param size
 * @returns {{type: string, size: *}}
 */
export function createEmptyMatrix(size) {
  return {
    type: CREATE_EMPTY_MATRIX,
    size
  }
}

/**
 * @param lists - array[][], graf w formie listy sąsiedztwa
 * @return {{type, graph: *}}
 */
export function listySasiedztwaChanged(lists) {
  return {
    type: LISTY_SASIEDZTWA_CHANGED,
    lists
  }
}

/**
 * @param block - boolean
 * @returns {{type: string, block: boolean}}
 */
export function blockGraphInputs(block = true) {
  return {
    type: BLOCK_GRAPH_INPUTS,
    block
  }
}

export function graphSizeChanged(size) {
  return {
    type: CHANGE_GRAPH_SIZE,
    size
  }
}