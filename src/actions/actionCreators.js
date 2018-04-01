// przykładowy action creator

import {INCREMENT_LIKES} from '../reducers/likesReducer';
import {CHECK_GRAPH_CONNECTIVITY} from '../reducers/connectivityReducer';

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