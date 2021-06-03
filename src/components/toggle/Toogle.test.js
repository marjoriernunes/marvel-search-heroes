import {render} from '@testing-library/react';
import ToggleButton from './Toggle';

test('renders correctly', () =>{
    const utils = render(<ToggleButton/>)
    expect(utils.container).toMatchSnapshot()
});
