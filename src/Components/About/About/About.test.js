import React from 'react';
import { shallow } from 'enzyme';
import About from './About'


// component test

describe('AboutUs test', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<About/>);
    expect(component).toMatchSnapshot();
  });

  //
});

