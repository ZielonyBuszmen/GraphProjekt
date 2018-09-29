import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { mapDispatchToProps, mapStateToProps, ListySasiedztwa } from '../../components/ListySasiedztwa';
import { listySasiedztwaChanged } from '../../actions/actionCreators';

describe('ListySasiedztwa', () => {
  it('should render', () => {
    const matrix = [[1, 2], [3, 4]];
    const component = shallow(<ListySasiedztwa matrix={matrix}/>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with 4 inputs', () => {
    const matrix = [[1, 2], [3, 4]];
    const component = shallow(<ListySasiedztwa matrix={matrix}/>);
    expect(component.find('Input')).toHaveLength(4);
  });

  it('should render with 0 inputs', () => {
    const component = shallow(<ListySasiedztwa matrix={[]}/>);
    expect(component.find('Input')).toHaveLength(0);
  });

  it('should change one input', () => {
    const matrix = [[1, 2], [3, 4]];
    const func = jest.fn();
    const component = shallow(<ListySasiedztwa matrix={matrix} listySasiedztwaChanged={func}/>);
    const inputs = component.find('Input');
    inputs.at(1).simulate('change', {target: {value: 10}});
    expect(func).toBeCalledWith([[0, 10], [0, 1]])
  });
});

describe('mapStateToProps', () => {
  it('should return object with state', () => {
    const state = {
      matrix: ['matrix'],
    };
    const result = mapStateToProps(state);
    expect(result).toEqual(state);
  });
});

describe('mapDispatchToProps', () => {
  it('should contain dispatches', () => {
    const dispatch = el => el;
    const result = mapDispatchToProps(dispatch);
    expect(result.listySasiedztwaChanged(['lists'])).toEqual(listySasiedztwaChanged(['lists']));
  });
});
