
import { shallow } from 'enzyme';
import MakeAdmin from './MakeAdmin';


    describe('Make Admin testing', () => {
      it('should render correctly in "debug" mode', () => {
        const component = shallow(<MakeAdmin/>);
        expect(component).toMatchSnapshot();
      });
 
    it('text check', () =>{
      let wrapper = shallow(<MakeAdmin/>)
      expect(wrapper.contains("Make an admin form")).toEqual(true)
   })

 
  
})