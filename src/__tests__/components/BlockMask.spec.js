import toJson from 'enzyme-to-json';
import { BlockMask } from "../../components/BlockMask";
import React from 'react';
import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() });
});

describe('BlockMask', () => {
  it('should render', function () {
    const component = shallow(<BlockMask />);
    expect(toJson(component)).toMatchSnapshot();
    expect(true).toBeTruthy();
  });
});

