import {render} from '@testing-library/react';
import Details from './Details';

test('renders correctly', () =>{
    const utils = render(<Details/>)
    expect(utils.container).toMatchSnapshot()
});