/**
 * Tutaj znajdują się wszystkie funkcje "pomocniki", takie jak implementacja stosu, łatwiejsze operowanie na tablicach itp
 */


/**
 * Funkcja pomocnicza, tworzy pustą tablicę tablic (macierz)
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
 * Funkcja pomocnicza, tworzy pustą tablicę i wypełnia ją wartościami
 * @param length - długość tablicy
 * @param defaultValue - wartość domyślna, którą ma być wypełniona tablica
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
 * Implementacja stosu
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