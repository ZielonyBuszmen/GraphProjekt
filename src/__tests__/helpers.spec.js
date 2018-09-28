import {
  createEmptyMatrix,
  copyMatrix,
  immutablePush,
  createEmptyArray,
  macierzNaListe,
  listaNaMacierz,
  Stack,
  changeGraphSize,
} from "../helpers";

describe('createEmptyMatrix', () => {
  it('should create matrix with null', () => {
    const result = createEmptyMatrix(2);
    expect(result).toEqual([[null, null], [null, null]]);
  });

  it('should create matrix with 0', () => {
    const result = createEmptyMatrix(2, 0);
    expect(result).toEqual([[0, 0], [0, 0]]);
  });

  it('should create matrix with empty string', () => {
    const result = createEmptyMatrix(1, '');
    expect(result).toEqual([['']]);
  });

  it('should return empty array when nodes is 0', () => {
    const result = createEmptyMatrix(0);
    expect(result).toEqual([]);
  });
});

describe('copyMatrix', () => {
  it('should copy matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = copyMatrix(matrix);

    expect(result).toEqual(matrix);
    matrix[1][1] = 99;
    expect(result).not.toEqual(matrix);
  });
});

describe('immutablePush', () => {
  it('should do immutable push', function () {
    const arr = [1, 2];
    const result = immutablePush(arr, 3);
    expect(result).toEqual([1, 2, 3]);
    expect(arr).not.toEqual(result);
  });
});

describe('createEmptyArray', () => {
  it('should create empty array', function () {
    const result = createEmptyArray(2);
    expect(result).toEqual([null, null]);
  });

  it('should create empty array without any value', function () {
    const result = createEmptyArray(0);
    expect(result).toEqual([]);
  });
});

describe('macierzNaListe', () => { // todo można zmienić nazwę na eng
  it('should change matrix to list', function () {
    const matrix = [
      [1, 2, 3],
      [0, 2, 3],
      [1, 0, 0],
    ];
    const expected = [
      [0, 1, 2],
      [1, 2],
      [0],
    ];
    const result = macierzNaListe(matrix);
    expect(result).toEqual(expected);
  });
});

describe('listaNaMacierz', () => { // todo można zmienic nazwe na eng
  it('should change list to matrix', function () {
    const list = [
      [2, 1, 0],
      [0, 1],
      [],
    ];
    const expected = [
      [1, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ];
    const result = listaNaMacierz(list);
    expect(result).toEqual(expected);
  });
});

describe('Stack', () => {
  it('should getLength', () => {
    const stack = new Stack();
    expect(stack.getLength()).toEqual(0);
    stack.push(123);
    expect(stack.getLength()).toEqual(1);
  });

  it('should push', () => {
    const stack = new Stack();
    stack.push(123);
    stack.push(123);
    stack.push(2);

    expect(stack.getLength()).toEqual(3);
  });

  it('should pop', () => {
    const stack = new Stack();
    stack.push(12);
    stack.push(24);

    expect(stack.getLength()).toEqual(2);
    expect(stack.pop()).toEqual(24);
    expect(stack.getLength()).toEqual(1);
    expect(stack.pop()).toEqual(12);
    expect(stack.getLength()).toEqual(0);
  });

  it('should pop when empty', () => {
    const stack = new Stack();
    expect(stack.getLength()).toEqual(0);
    expect(stack.pop()).toEqual(undefined);
    expect(stack.getLength()).toEqual(0);
  });

  it('should peek', () => {
    const stack = new Stack();
    stack.push(12);
    stack.push(24);

    expect(stack.getLength()).toEqual(2);
    expect(stack.peek()).toEqual(24);
    expect(stack.peek()).toEqual(24);
    expect(stack.getLength()).toEqual(2);
  });

  it('should empty', () => {
    const stack = new Stack();
    stack.push(2);
    stack.pop();
    expect(stack.empty()).toEqual(true);
  });
});

describe('changeGraphSize', () => {
  it('should change graph size from 4 to 2', function () {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [2, 4, 6, 8],
      [1, 3, 5, 7],
    ];
    const result = changeGraphSize(matrix, 2);
    expect(result).toEqual([[1, 2], [5, 6]])
  });

  it('should change graph size from 2 to 3', function () {
    const matrix = [
      [1, 2],
      [5, 6],
    ];
    const expected = [
      [1, 2, 0],
      [5, 6, 0],
      [0, 0, 0],
    ];
    const result = changeGraphSize(matrix, 3);
    expect(result).toEqual(expected)
  });

  it('should change graph size from 1 to 0', function () {
    const matrix = [
      [1]
    ];
    const result = changeGraphSize(matrix, 0);
    expect(result).toEqual([])
  });
});
