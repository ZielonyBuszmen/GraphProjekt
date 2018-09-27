import React from 'react';
import { checkConnectivityOfGraph } from '../../reducers/connectivityReducer';

describe('checkConnectivityOfGraph', function () {
  it('should empty graph', function () {
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
