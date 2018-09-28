import {
  createEmptyMatrix,
  graphSizeChanged,
  listySasiedztwaChanged,
  macierzSasiedztwaChanged,
} from "../../actions/actionCreators";
import matrixReduxer from "../../reducers/matrixReducer";

describe('matrixReducer', () => {
  it('action type => MACIERZ_SASIEDZTWA_CHANGED', () => {
    const state = [[1, 2], [3, 4]];
    const action = macierzSasiedztwaChanged(1, 1, 12);
    const result = matrixReduxer(state, action);
    expect(result).toEqual([[1, 2], [3, 12]]);
  });

  it('action type => LISTY_SASIEDZTWA_CHANGED', () => {
    const state = [];
    const action = listySasiedztwaChanged([[1, 2], [0]]);
    const result = matrixReduxer(state, action);
    expect(result).toEqual([[0, 1, 1], [1, 0]]);
  });

  it('action type => CREATE_EMPTY_MATRIX', () => {
    const state = [];
    const action = createEmptyMatrix(2);
    const result = matrixReduxer(state, action);
    expect(result).toEqual([[0, 0], [0, 0]]);
  });

  it('action type => CHANGE_GRAPH_SIZE', () => {
    const state = [[5]];
    const action = graphSizeChanged(2);
    const result = matrixReduxer(state, action);
    expect(result).toEqual([[5, 0], [0, 0]]);
  });

  it('action type => default', () => {
    const state = [];
    const action = {
      type: 'other',
    };
    const result = matrixReduxer(state, action);
    expect(result).toEqual(state);
  });
});