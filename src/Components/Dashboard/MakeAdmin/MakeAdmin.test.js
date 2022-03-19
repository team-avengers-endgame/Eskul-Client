import Makeadmin from './MakeAdmin'
import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import MakeAdmin from './MakeAdmin';


    describe('Make Admin testing', () => {
    test('Rendaring without pain',() => {
        const Box = document.createElement('Box');
        ReactDOM.render(<Makeadmin />, Box);
    })
 
    it('text check', () =>{
      let wrapper = shallow(<MakeAdmin/>)
      expect(wrapper.contains("Make an admin form")).toEqual(true)
   })
    test('input field find', () => {
        const container = document.createElement('Box');
        document.body.appendChild(container);
        ReactDOM.render(<Makeadmin />, container);
        // eslint-disable-next-line testing-library/no-node-access
        const input = container.querySelectorAll('input');
        expect(input).toHaveLength(1);
        expect(input[0].name).toBe('email');
    })
    test('passes input value', () => {
        const container = document.createElement('Box');
        document.body.appendChild(container);
        ReactDOM.render(<Makeadmin />, container);
        // eslint-disable-next-line testing-library/no-node-access
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(1);
        // eslint-disable-next-line testing-library/no-node-access
        const Buttons = container.querySelectorAll('Button');
        expect(Buttons).toHaveLength(1);
        const input = inputs[0];
        const Button = Buttons[0];
        fireEvent.submit(Button);
        fireEvent.change(input, { target: {value: 'najninkamalrimi@gmail.com'}})
    })
})