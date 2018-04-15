// przykładowy action creator

import {INCREMENT_LIKES} from '../reducers/likesReducer';
import {CHECK_GRAPH_CONNECTIVITY} from '../reducers/connectivityReducer';
import { LISTY_SASIEDZTWA_CHANGED, MACIERZ_SASIEDZTWA_CHANGED } from '../reducers/matrixReducer';

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
export function ckeckGraphConnectivity(graph) {
  return {
    type: CHECK_GRAPH_CONNECTIVITY,
    graph,
  }
}

/**
 * @param graph - array[][], graf w formie macierzy sąsiedztwa
 * @return {{type, graph: *}}
 */
export function macierzSasiedztwaChanged(graph) {
  return {
    type: MACIERZ_SASIEDZTWA_CHANGED,
    graph
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