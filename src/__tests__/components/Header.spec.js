import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import '../../enzymeConfiguration';
import { Header } from '../../components/Header';

describe('Home', function () {
  it('should render', function () {
    const props = {
      matrix: ['matrix'],
      graphSize: 2,
    };
    const component = shallow(<Header/>);
    expect(toJson(component)).toMatchSnapshot();
  });
});