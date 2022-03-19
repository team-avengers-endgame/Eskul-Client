import React from 'react';
import { shallow } from 'enzyme';
import PrivateTutor from './PrivateTuor'



describe('PrivateTutor test', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PrivateTutor/>);
    expect(component).toMatchSnapshot();
  });
});