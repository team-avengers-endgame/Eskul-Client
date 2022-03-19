import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';


// component test

describe('MyComponent test', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MyComponent/>);
    expect(component).toMatchSnapshot();
  });

  //
});

