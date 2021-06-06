import {render} from '@testing-library/react'
import HeroImage from './HeroImage'

test('renders correctly', () =>{
    const utils = render(<HeroImage/>)
    expect(utils.container).toMatchSnapshot()
});
