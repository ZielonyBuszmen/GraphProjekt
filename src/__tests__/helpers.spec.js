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

});

describe('immutablePush', () => {

});

describe('createEmptyArray', () => {

});

describe('macierzNaListe', () => { // todo można zmienić nazwę na eng

});

describe('listaNaMacierz', () => { // todo można zmienic nazwe na eng

});

describe('Stack', () => {
  it('should getLength', () => {
    expect(true).toEqual(true);
  });

  it('should push', () => {
    expect(true).toEqual(true);
  });

  it('should pop', () => {
    expect(true).toEqual(true);
  });

  it('should peek', () => {
    expect(true).toEqual(true);
  });

  it('should empty', () => {
    expect(true).toEqual(true);
  });
});

describe('changeGraphSize', () => {

});
