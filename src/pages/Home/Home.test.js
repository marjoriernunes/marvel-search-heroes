import {render} from '@testing-library/react'
import Home from './Home.jsx'

test('renders correctly', () =>{
    const utils = render(<Home/>)
    expect(utils.container).toMatchSnapshot()
});


test('should render children', () => {
    const utils = render(<Home>foo</Home>)
    utils.debug()
    expect(utils.getByText('foo')).toBeTruthy()
})