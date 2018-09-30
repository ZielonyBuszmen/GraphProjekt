import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { VertexQuantityInput, mapDispatchToProps, mapStateToProps } from '../../components/VertexQuantityInput';
import { graphSizeChanged } from '../../actions/actionCreators';

describe('VertexQuantityInput', () => {
  it('should render without props', () => {
    const component = shallow(<VertexQuantityInput/>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should handleSubmit on button click', () => {
    const graphSizeChanged = jest.fn();
    const props = {
      graphSize: 2,
      graphSizeChanged
    };
    const component = shallow(<VertexQuantityInput {...props} />);
    component.find('Button').simulate('click', { preventDefault: () => {} });
    expect(graphSizeChanged).toBeCalledWith(2)
  });

  it('should handleSubmit on form submit', () => {
    const graphSizeChanged = jest.fn();
    const props = {
      graphSize: 3,
      graphSizeChanged
    };
    const component = shallow(<VertexQuantityInput {...props} />);
    component.find('form').simulate('submit', { preventDefault: () => {} });
    expect(graphSizeChanged).toBeCalledWith(3)
  });

  it('should handleSubmit on form submit when qty is not int', () => {
    const graphSizeChanged = jest.fn();
    const props = {
      graphSize: 2,
      graphSizeChanged
    };
    const component = shallow(<VertexQuantityInput {...props} />);
    const input = component.find('#qty');
    input.simulate('change', {target: {value: 'test'}});
    component.find('form').simulate('submit', { preventDefault: () => {} });
    expect(graphSizeChanged).toBeCalledWith(0)
  });

  it('should handleSubmit on form submit when qty is under 20', () => {
    const graphSizeChanged = jest.fn();
    const props = {
      graphSize: 2,
      graphSizeChanged
    };
    const component = shallow(<VertexQuantityInput {...props} />);
    const input = component.find('#qty');
    input.simulate('change', {target: {value: 25}});
    component.find('form').simulate('submit', { preventDefault: () => {} });
    expect(graphSizeChanged).toBeCalledWith(0)
  });

  it('should change qty', () => {
    const graphSizeChanged = jest.fn();
    const props = {
      graphSize: 0,
      graphSizeChanged
    };
    const component = shallow(<VertexQuantityInput {...props} />);
    const input = component.find('#qty');
    input.simulate('change', {target: {value: 5}});
    component.find('form').simulate('submit', { preventDefault: () => {} });
    expect(graphSizeChanged).toBeCalledWith(5)
  });
});

describe('mapStateToProps', () => {
  it('should return object with state', () => {
    const state = {
      graphSize: 2,
    };
    const result = mapStateToProps(state);
    expect(result).toEqual(state);
  });
});

describe('mapDispatchToProps', () => {
  it('should contain dispatches', () => {
    const dispatch = el => el;
    const result = mapDispatchToProps(dispatch);
    expect(result.graphSizeChanged(2)).toEqual(graphSizeChanged(2));
  });
});
