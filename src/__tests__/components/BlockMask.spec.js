import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import '../../enzymeConfiguration';

import { BlockMask } from '../../components/BlockMask';

describe('BlockMask', () => {
  it('should render', function () {
    const component = shallow(<BlockMask/>);
    expect(toJson(component)).toMatchSnapshot();
    expect(true).toBeTruthy();
  });
});

