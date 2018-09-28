import graphSizeReducer, {CHANGE_GRAPH_SIZE} from "../../reducers/graphSizeRecuder";

describe('graphSizeReducer', () => {
  it('action type => CHANGE_GRAPH_SIZE', () => {
    const state = [];
    const action = {
      type: CHANGE_GRAPH_SIZE,
      size: 2,
    };
    const result = graphSizeReducer(state, action);
    expect(result).toEqual(2);
  });

  it('action type => default', () => {
    const state = [];
    const action = {
      type: 'other',
    };
    const result = graphSizeReducer(state, action);
    expect(result).toEqual(result);
  });
});