import Makeadmin from './MakeAdmin'
import ReactDOM from 'react-dom'
import { fireEvent, render, screen } from '@testing-library/react';


    describe('Make Admin testing', () => {
    test('Rendaring without pain',() => {
        const Box = document.createElement('Box');
        ReactDOM.render(<Makeadmin />, Box);
    })
 
       test("checking first", () => {
           render(<Makeadmin />);
           const page = screen.getByText("Make an admin form");
            expect(page).toBeInTheDocument();
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