import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import '../../enzymeConfiguration';
import { Home, mapDispatchToProps, mapStateToProps } from '../../components/Home';

describe('Home', function () {
  it('should render', function () {
    const props = {
      matrix: ['matrix'],
      graphSize: 2,
    };
    const component = shallow(<Home {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});

describe('mapStateToProps', function () {
  it('should get sate', function () {
    const state = {
      matrix: ['matrix'],
      graphSize: 2,
    };
    const result = mapStateToProps(state);
    expect(result).toEqual(state);
  });
});

describe('mapDispatchToProps', function () {
  it('should get dispatch', function () {
    const dispatch = () => {};
    const result = mapDispatchToProps(dispatch);
    expect(result).toEqual({});
  });
});