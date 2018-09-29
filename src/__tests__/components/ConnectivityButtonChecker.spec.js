import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import '../../enzymeConfiguration';
import {
  ConnectivityButtonChecker,
  mapDispatchToProps,
  mapStateToProps,
} from '../../components/ConnectivityButtonChecker';
import { blockGraphInputs, checkGraphConnectivity } from '../../actions/actionCreators';

describe('ConnectivityButtonChecker', () => {
  it('should render component', () => {
    const props = {
      blockGraphInputs: () => {
      },
      checkGraphConnectivity: () => {
      },
      connectivity: false,
      matrix: [],
    };
    const component = shallow(<ConnectivityButtonChecker {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render success message', () => {
    const props = {
      blockGraphInputs: () => {
      },
      checkGraphConnectivity: () => {
      },
      connectivity: {
        blockGraphInputs: true,
        isGraphConnected: true,
      },
      matrix: [],
    };
    const component = shallow(<ConnectivityButtonChecker {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render fail message', () => {
    const props = {
      blockGraphInputs: () => {
      },
      checkGraphConnectivity: () => {
      },
      connectivity: {
        blockGraphInputs: true,
        isGraphConnected: false,
      },
      matrix: [],
    };
    const component = shallow(<ConnectivityButtonChecker {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should checkConnectivityClick', () => {
    const blockGraphInputs = (value) => {
      expect(value).toEqual(true);
    };
    const checkGraphConnectivity = (matrix) => {
      expect(matrix).toEqual(['matrix']);
    };

    const props = {
      blockGraphInputs,
      checkGraphConnectivity,
      connectivity: {},
      matrix: ['matrix'],
    };
    const component = shallow(<ConnectivityButtonChecker {...props} />);
    component.find('Button').simulate('click');
  });
});

describe('mapStateToProps', () => {
  it('should return object with state', () => {
    const state = {
      connectivity: false,
      matrix: ['matrix'],
    };
    const result = mapStateToProps(state);
    expect(result).toEqual(state);
  });
});

describe('mapDispatchToProps', () => {
  it('should contain dispatch', () => {
    const dispatch = arg => arg;
    const result = mapDispatchToProps(dispatch);

    expect(result.checkGraphConnectivity(['matrix']))
      .toEqual(checkGraphConnectivity(['matrix']));

    expect(result.blockGraphInputs())
      .toEqual(blockGraphInputs(true));
  });
});
