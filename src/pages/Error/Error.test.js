import {render} from '@testing-library/react'
import ErrorScreen from './Error'

test('renders correctly', () =>{
    const utils = render(<ErrorScreen/>)
    expect(utils.container).toMatchSnapshot()
});

