import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import '../../enzymeConfiguration';
import { App, mapDispatchToProps, mapStateToProps } from '../../components/App';

describe('App', function () {
  it('should render', function () {
    const props = {
      graphSize: 2,
    };
    const component = shallow(<App {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with small graphSize', function () {
    const props = {
      graphSize: 2,
    };
    const component = shallow(<App {...props} />);
    expect(component.find('.container')).toHaveLength(1);
    expect(component.find('.container-fluid')).toHaveLength(0);
  });

  it('should render with big graphSize', function () {
    const props = {
      graphSize: 22,
    };
    const component = shallow(<App {...props} />);
    expect(component.find('.container-fluid')).toHaveLength(1);
  });
});

describe('mapStateToProps', function () {
  it('should get sate', function () {
    const state = {
      graphSize: 3,
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