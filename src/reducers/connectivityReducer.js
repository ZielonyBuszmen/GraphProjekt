/**
 * 31. Testowanie silnej spójności grafu
 *
 * Reducer zawiera wszystkie funkcje obliczające silną spójność grafu.
 * Zmienia w modelu flagę `isGraphConnected`, gdzie `true` oznacza graf silnie spójny, `false` mówi o braku takiej spójności,
 * a `null` oznacza stan początkowy flagi
 */
import {createEmptyArray, Stack} from '../helpers';

export const CHECK_GRAPH_CONNECTIVITY = 'connectivity/CHECK_GRAPH_CONNECTIVITY';
export const RESET_STATUS = 'RESET_STATUS';
export const BLOCK_GRAPH_INPUTS = 'BLOCK_GRAPH_INPUTS';

/**
 * Główna funkcja, którą dostarcza ten reducer to `connectivity()`.
 *
 * - Gdy zostanie wywołana akcja CHECK_GRAPH_CONNECTIVITY i gdy graf jest silnie spójny,
 *   funkcja zmienia flagę `isGraphConnected` na `true`. W przeciwnym razie na `false`.
 * - Gdy zostanie wywołana akcja RESET_STATUS, flaga jest ustawiona na `null` (wartość domyślna tej flagi)
 *
 * Gdy akcja to CHECK_GRAPH_CONNECTIVITY:
 *   Jako pierwszy parametr przyjmuje aktualny stan aplikacji (a dokładniej wycinek stanu odpowiadjącego za spójność grafu)
 *   Jako drugi parametr dostaje akcję, wraz z grafem, którego spójność ma sprawdzać.
 * Przyjmowana akcja ma taką postać:
 * action = {
 *   type: CHECK_GRAPH_CONNECTIVITY,
 *   graph: macierz_sasiedztwa
 * }
 * gdzie `macierz_sasiedztwa` może wyglądać w taki sposób:
 * [
 *   [1, 0, 1],
 *   [0, 1, 0],
 *   [1, 1, 1],
 * ];
 *
 * Gdy akcja to RESET_STATUS:
 * Reducer może przyjąć też drugą akcję, która resetuje informację o sprawdzanym grafie (czyli ustawia flagę na `null`):
 *  action = {
 *   type: RESET_STATUS,
 * }
 */
export default function connectivity(state = [], action) {
  switch (action.type) {
    case CHECK_GRAPH_CONNECTIVITY:
      const newState = {...state};
      newState.isGraphConnected = checkStrongConnectivityOfGraph(action.graph);
      return newState;

    case RESET_STATUS:
      const resettedState = {...state};
      resettedState.isGraphConnected = null;
      return resettedState;

    case BLOCK_GRAPH_INPUTS:
      const blockedState = {...state};
      blockedState.blockGraphInputs = action.block;
      return blockedState;

    default:
      return state;
  }
}

/**
 * Sprawdza silną spójność grafu.
 * Funkcja przyjmuje graf w formie macierzy sąsiedztwa.
 *
 * @param graph
 * @returns {boolean} - true, jeśli graf jest silnie spójny
 */
function checkStrongConnectivityOfGraph(graph) {
  for (const node in graph) {
    const result = checkConnectivityOfGraph(graph, node);
    if (result === false) {
      return false;
    }
  }
  return true;
}

/**
 * Sprawdza spójność grafu
 * Funkcja przyjmuje graf w formie macierzy sąsiedztwa.
 * Zwraca `true`, jeśli graf jest spójny, bądź false w przeciwnym wypadku
 *
 * @param graph - graf w formie macierzy sąsiedztwa
 * @param startedNode - wierchołek, z którego startujemy, domyślnie pierwszy (czyli 0)
 * @return boolean
 */
function checkConnectivityOfGraph(graph, startedNode = 0) {
  const visited = createEmptyArray(graph.length, false);
  const stack = new Stack();
  let visitedCounter = 0;

  stack.push(startedNode);
  visited[startedNode] = true;

  while (!stack.empty()) {
    const v = stack.pop();
    visitedCounter++;

    for (const neighbour in graph[v]) {
      if (graph[v][neighbour] === 0) {
        continue;
      }
      if (visited[neighbour]) {
        continue;
      }
      stack.push(neighbour);
      visited[neighbour] = true;
    }
  }
  return visitedCounter === graph.length;
}
