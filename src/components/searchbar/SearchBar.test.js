import {render} from '@testing-library/react'
import SearchBar from './SearchBar'

test('renders correctly', () =>{
    const utils = render(<SearchBar/>)
    expect(utils.container).toMatchSnapshot()
});

