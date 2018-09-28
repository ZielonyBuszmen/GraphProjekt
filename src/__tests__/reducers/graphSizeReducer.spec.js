import graphSizeReducer from "../../reducers/graphSizeReducer";
import {graphSizeChanged} from "../../actions/actionCreators";

describe('graphSizeReducer', () => {
  it('action type => CHANGE_GRAPH_SIZE', () => {
    const state = [];
    const action = graphSizeChanged(2);
    const result = graphSizeReducer(state, action);
    expect(result).toEqual(2);
  });

  it('action type => default', () => {
    const state = [];
    const action = {
      type: 'other',
    };
    const result = graphSizeReducer(state, action);
    expect(result).toEqual(state);
  });
});