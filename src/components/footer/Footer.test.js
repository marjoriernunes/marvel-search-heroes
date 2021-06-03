import {render} from '@testing-library/react'
import Footer from './Footer.jsx'

test('renders correctly', () =>{
    const utils = render(<Footer/>)
    expect(utils.container).toMatchSnapshot()
});

test('should render div', () => {
    const utils = render(<Footer><div className="foo"/></Footer>)
    expect(utils.classList.contains('foo')).toBeTruthy()
})