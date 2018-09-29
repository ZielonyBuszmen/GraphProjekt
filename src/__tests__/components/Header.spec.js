import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

describe('Header', function () {
  it('should render', function () {
    const component = shallow(<Header/>);
    expect(toJson(component)).toMatchSnapshot();
  });
});