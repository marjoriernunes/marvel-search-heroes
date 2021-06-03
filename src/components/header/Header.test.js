import {render} from '@testing-library/react'
import Header from './Header.jsx'

test('renders correctly', () =>{
    const utils = render(<Header/>)
    expect(utils.container).toMatchSnapshot()
});
