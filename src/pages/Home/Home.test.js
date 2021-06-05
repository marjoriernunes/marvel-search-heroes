import {render} from '@testing-library/react'
import Home from './Home.jsx'

test('renders correctly', () =>{
    const utils = render(<Home/>)
    expect(utils.container).toMatchSnapshot()
});


describe('orderByName', () => {
    let setOrder = () => {}
    const orderByName = (state) => {
        if (!!state) {
           setOrder('name');
          } else {
            setOrder('-name');;
          }
        };
    test('should return if value', () => {
        const state = true;
        const result = orderByName(state);
        expect(result).toEqual(setOrder('name'));
    })

    test('should return else value', () => {
        const state = false;
        const result = orderByName(state);
        expect(result).toEqual(setOrder('-name'));
    })
})
