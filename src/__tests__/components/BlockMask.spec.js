import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import '../../enzymeConfiguration';

import {
  BlockMask,
  mapDispatchToProps,
  mapStateToProps,
} from '../../components/BlockMask';
import { BLOCK_GRAPH_INPUTS } from '../../reducers/connectivityReducer';

describe('BlockMask', () => {
  it('should render without props', function () {
    const component = shallow(<BlockMask/>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render blocked mask', function () {
    const component = shallow(<BlockMask blockGraphInputs/>);
    expect(component.find('.text-center')).toHaveLength(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should unlock mask', function () {
    const unlockGraphInputsMock = jest.fn(() => {});
    const component = shallow(<BlockMask blockGraphInputs unlockGraphInputs={unlockGraphInputsMock}/>);
    component.find('Button').simulate('click');
    expect(unlockGraphInputsMock.mock.calls.length).toBe(1);
  });
});

describe('mapStateToProps', function () {
  it('should return object with state', function () {
    const state = {
      connectivity: {
        blockGraphInputs: true
      }
    };
    const result = mapStateToProps(state);
    expect(result).toEqual({blockGraphInputs: true});
  });
});

describe('mapDispatchToProps', function () {
  it('should contain dispatches', function () {
    const dispatch = (element) => {
      expect(element).toEqual({
        type: BLOCK_GRAPH_INPUTS,
        block: false,
      })
    };
    const result = mapDispatchToProps(dispatch);
    expect(result.hasOwnProperty('unlockGraphInputs')).toBeTruthy();
    result.unlockGraphInputs();
  });
});


