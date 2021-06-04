import {render} from '@testing-library/react'
import Footer from './Footer.jsx'

test('renders correctly', () =>{
    const utils = render(<Footer/>)
    expect(utils.container).toMatchSnapshot()
});
