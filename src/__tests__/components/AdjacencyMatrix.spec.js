import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { AdjacencyMatrix, mapDispatchToProps, mapStateToProps } from '../../components/AdjacencyMatrix';
import { createEmptyMatrix, macierzSasiedztwaChanged, MacierzSasiedztwaChanged } from '../../actions/actionCreators';

describe('AdjacencyMatrix', () => {
  it('should render', () => {
    const props = {
      createEmptyMatrix: jest.fn(),
      macierzSasiedztwaChanged: jest.fn(),
      matrix: [[1, 2], [3, 4]],
      size: 2,
    };
    const component = shallow(<AdjacencyMatrix {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with 4 inputs and labels', () => {
    const props = {
      createEmptyMatrix: jest.fn(),
      macierzSasiedztwaChanged: jest.fn(),
      matrix: [[1, 2], [3, 4]],
      size: 2,
    };
    const component = shallow(<AdjacencyMatrix {...props} />);
    expect(component.find('Input')).toHaveLength(4);
    expect(component.find('td')).toHaveLength(9);
  });

  it('should not render when matrix is empty', () => {
    const props = {
      createEmptyMatrix: jest.fn(),
      macierzSasiedztwaChanged: jest.fn(),
      matrix: [],
      size: 2,
    };
    const component = shallow(<AdjacencyMatrix {...props} />);
    expect(component.find('Input')).toHaveLength(0);
    expect(component.find('td')).toHaveLength(5);
  });

  it('should not render when matrix is fill nulls', () => {
    const props = {
      createEmptyMatrix: jest.fn(),
      macierzSasiedztwaChanged: jest.fn(),
      matrix: [[null, null], [null, null]],
      size: 2,
    };
    const component = shallow(<AdjacencyMatrix {...props} />);
    expect(component.find('Input')).toHaveLength(4);
  });

  it('should render with 0 inputs', () => {
    const props = {
      createEmptyMatrix: jest.fn(),
      macierzSasiedztwaChanged: jest.fn(),
      matrix: [],
      size: 0,
    };
    const component = shallow(<AdjacencyMatrix {...props} />);
    expect(component.find('Input')).toHaveLength(0);
    expect(component.find('td')).toHaveLength(1);
  });

  it('should change one input', () => {
    const props = {
      createEmptyMatrix: jest.fn(),
      macierzSasiedztwaChanged: jest.fn(),
      matrix: [[1, 2], [3, 4]],
      size: 2,
    };
    const component = shallow(<AdjacencyMatrix {...props} />);
    const inputs = component.find('Input');
    inputs.at(1).simulate('change', {target: {value: 10}});
    expect(props.macierzSasiedztwaChanged).toBeCalledWith(0, 1, 10);
  });

  it('should change one input with wrong value', () => {
    const props = {
      createEmptyMatrix: jest.fn(),
      macierzSasiedztwaChanged: jest.fn(),
      matrix: [[1, 2], [3, 4]],
      size: 2,
    };
    const component = shallow(<AdjacencyMatrix {...props} />);
    const inputs = component.find('Input');
    inputs.at(1).simulate('change', {target: {value: 'asd'}});
    expect(props.macierzSasiedztwaChanged).toBeCalledWith(0, 1, 0);
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
    expect(result.macierzSasiedztwaChanged(1, 2, 3)).toEqual(macierzSasiedztwaChanged(1, 2, 3));
    expect(result.createEmptyMatrix(3)).toEqual(createEmptyMatrix(3));
  });
});
