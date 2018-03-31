/**
 * 31. Testowanie silnej spójności grafu
 *
 * Reducer zawiera wszystkie funkcje obliczające silną spójność grafu.
 * Zmienia w modelu flagę `isGraphConnected`, gdzie `true` oznacza graf silnie spójny, `false` mówi o braku takiej spójności,
 * a `null` oznacza stan początkowy flagi
 */

export const CHECK_GRAPH_CONNECTIVITY = 'connectivity/CHECK_GRAPH_CONNECTIVITY';
export const RESET_STATUS = 'RESET_STATUS';

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
      newState.isGraphConnected = checkConnectivityOfGraph(action.graph);
      return newState;

    case RESET_STATUS:
      const resettedState = {...state};
      resettedState.isGraphConnected = null;
      return resettedState;
    default:
      return state;
  }
}

/**
 * Funkcja przyjmuje graf w formie macierzy sąsiedztwa.
 * Zwraca `true`, jeśli graf jest silnie spójny, bądź false w przeciwnym wypadku
 *
 * @param graph - graf w formie macierzy sąsiedztwa
 * @return bool
 */
function checkConnectivityOfGraph(graph) {

}
