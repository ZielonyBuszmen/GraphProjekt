import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import ReactDOM from 'react-dom';
import { AppWithProvider } from '../index';
// import store, { history } from './../store';
// import createHistory from 'history/createBrowserHistory'

describe('index.js', function () {
  jest.mock('react-dom', () => ({render: jest.fn()}));
  // jest.mock('createHistory', () => jest.fn());
  it('should ble', function () {
    const props = {
      store: {},
      history: jest.fn(),
    };
    const component = shallow(<AppWithProvider {...props} />);
    expect(toJson(component)).toMatchSnapshot();

  });

  it('should render without crashing', function () {
    // todo
    // const component = shallow(<MojKomponent />);
    // expect(toJson(component)).toMatchSnapshot();

    // const store = '';
    // const history = '';
    // const div = document.createElement('div');
    // ReactDOM.render(AppWithProvider, div);
    // global.document.getElementById = (id) => id === 'root' && div;
    // expect(ReactDOM.render).toHaveBeenCalledWith(...);
  });
});


