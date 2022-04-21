import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// call the 'cleanup' function using the 'afterEach' global function from Jest
//  - this will ensure that aftet each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

// use the describe function to declare the component we're testing
describe('About component', () => {
    // First Test
    //  - the first argument, a string declares what is being tested, 'renders'
    //  -  In the second argument, a callback function runs the test.
    //      -() =>{render(<About />)};
    it('renders', () => {
        // render the About component using JSX
        render(<About />);
    })

    // Second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();

    })
})
