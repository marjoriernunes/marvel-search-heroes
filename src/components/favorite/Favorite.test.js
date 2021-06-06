import {render} from '@testing-library/react'
import Favorite from './Favorite'

test('renders correctly', () =>{
    const utils = render(<Favorite/>)
    expect(utils.container).toMatchSnapshot()
});