/**
 * Tutaj znajdują się wszystkie funkcje "pomocniki", takie jak implementacja stosu, łatwiejsze operowanie na tablicach itp
 */

/**
 * Funkcja pomocnicza, tworzy pustą tablicę tablic (macierz)
 *
 * @param nodes - ilość wierchołków w grafie
 * @param defaultValue - wartość domyślna, którą ma być wypełniona macierz
 * @return {Array}
 */
export function createEmptyMatrix(nodes, defaultValue = null) {
  let matrix = [];
  for (let i = 0; i < nodes; i++) {
    matrix[i] = [];
    for (let j = 0; j < nodes; j++) {
      matrix[i][j] = defaultValue;
    }
  }
  return matrix;
}

/**
 * Wykonuje 'deep copy' tablicy dwu wymiarowej (macierzy)
 *
 * @param matrix - array[][]
 * @returns {array[][]}
 */
export function copyMatrix(matrix) {
  return matrix.map(current => current.map(value => value));
}

export function immutablePush(arr, newEntry) {
  return [...arr, newEntry]
}

/**
 * Funkcja pomocnicza, tworzy pustą tablicę i wypełnia ją wartościami
 *
 * @param length - długość tablicy
 * @param defaultValue - wartość domyślna, którą ma być wypełniona tablica. Tylko typ prosty. NIE MOŻE TO BYC OBIEKT ANI TABLICA! (powstaje błąd referencji)
 * @return {Array}
 */
export function createEmptyArray(length, defaultValue = null) {
  let matrix = [];
  for (let i = 0; i < length; i++) {
    matrix[i] = defaultValue;
  }
  return matrix;
}

/**
 * Zamienia macierz sąsiedztwa na listy sąsiedztwa
 *
 * @param matrix - macierz sąsiedztwa
 * @return {Array[][]} - graf w formie list sąsiedztwa
 */
export function matrixToList(matrix) {
  const result = createEmptyArray(matrix.length);
  matrix.map((row, i) => {
    result[i] = [];
    row.map((value, j) => {
      if (value !== 0) {
        result[i].push(j);
      }
    })
  });
  return result;
}

/**
 * Zamienia listy sąsiedztwa na macierze sąsiedztwa
 *
 * @param lists - listy sąsiedztwa
 * @return {Array[][]} - graf w formie macierzy sąsiedztwa
 */
export function listToMatrix(lists) {
  let result = createEmptyMatrix(lists.length, 0);
  lists.map((row, index) =>
    row.map(value => {
      if (Number.isInteger(value)) {
        result[index][value] = 1;
      }
    }));
  return result;
}

/**
 * Stack implementations
 */
export class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  getLength() {
    return this.count;
  }

  push(item) {
    this.items.push(item);
    this.count = this.count + 1;
  }

  pop() {
    if (this.count > 0) {
      this.count = this.count - 1;
    }

    return this.items.pop();
  }

  peek() {
    return this.items.slice(-1)[0];
  }

  empty() {
    return !this.items.length;
  }
}

/**
 * Changes matrix size
 *
 * @param {Array[][]} matrix
 * @param newSize - new size of matrix
 * @returns {Array}
 */
export function changeGraphSize(matrix, newSize) {
  const result = createEmptyMatrix(newSize, 0);
  const size = matrix.length > newSize ? newSize : matrix.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      result[i][j] = matrix[i][j];
    }
  }
  return result;
}