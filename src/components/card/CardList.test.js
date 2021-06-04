import {render} from '@testing-library/react'
import CardList from './CardList'

test('renders correctly', () =>{
    const utils = render(<CardList/>)
    expect(utils.container).toMatchSnapshot()
});

