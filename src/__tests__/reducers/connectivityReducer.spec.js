import connectivity, {
  CHECK_GRAPH_CONNECTIVITY,
  RESET_STATUS,
  BLOCK_GRAPH_INPUTS,
  checkConnectivityOfGraph,
  checkStrongConnectivityOfGraph,
} from '../../reducers/connectivityReducer';
import {blockGraphInputs, checkGraphConnectivity} from "../../actions/actionCreators";

describe('checkConnectivityOfGraph', () => {
  it('should empty graph', () => {
    const graph = [
      [1, 2, 3],
      [1, 0, 3],
      [1, 2, 0],
    ];
    const result = checkConnectivityOfGraph(graph);
    expect(result).toBe(true);
  });

  it('should return false, when graph is not connected', () => {
    expect(true).toBe(true);
    const graph = [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ];
    const result = checkConnectivityOfGraph(graph);
    expect(result).toBe(false);
  });
});

describe('checkStrongConnectivityOfGraph', () => {
  it('should return true when graph is strongly connected', () => {
    const graph = [
      [1, 2, 3],
      [1, 0, 3],
      [1, 2, 0],
    ];
    const result = checkStrongConnectivityOfGraph(graph);
    expect(result).toBe(true);

  });

  it('should return false when graph is strongly connected', () => {
    expect(true).toBe(true);
    const graph = [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ];
    const result = checkStrongConnectivityOfGraph(graph);
    expect(result).toBe(false);

  });
});

describe('connectivity', () => {
  it('action type => CHECK_GRAPH_CONNECTIVITY', () => {
    const state = {test: 'test'};
    const action = checkGraphConnectivity([
      [0, 1],
      [1, 0],
    ]);
    const expected = {
      test: 'test',
      isGraphConnected: true,
    };

    const result = connectivity(state, action);
    expect(result).toEqual(expected);
  });

  it('action type => RESET_STATUS', () => {
    const state = {test: 'test'};
    const action = {
      type: RESET_STATUS,
    };
    const expected = {
      test: 'test',
      isGraphConnected: null,
    };

    const result = connectivity(state, action);
    expect(result).toEqual(expected);
  });

  it('action type => BLOCK_GRAPH_INPUTS', () => {
    const state = {test: 'test'};
    const action = blockGraphInputs(false);
    const expected = {
      test: 'test',
      blockGraphInputs: false,
    };

    const result = connectivity(state, action);
    expect(result).toEqual(expected);
  });

  it('action type => none', () => {
    const state = {test: 'test'};
    const action = {
      type: 'none',
    };
    const expected = {
      test: 'test',
    };

    const result = connectivity(state, action);
    expect(result).toEqual(expected);
  });
});
