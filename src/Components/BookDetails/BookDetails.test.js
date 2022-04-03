
import { shallow } from 'enzyme';
import BookDetails from './BookDetails';


    describe('BookDetails testing', () => {
      it('should render correctly in "debug" mode', () => {
        const component = shallow(<BookDetails/>);
        expect(component).toMatchSnapshot();
      });
 
//     it('text check', () =>{
//       let wrapper = shallow(<BookDetails/>)
//       expect(wrapper.contains("Make an admin form")).toEqual(true)
//    })

 
  
})