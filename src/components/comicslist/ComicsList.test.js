import { render } from '@testing-library/react';
import ComicsList from './ComicsList';

test('renders correctly', () =>{
    const utils = render(<ComicsList/>)
    expect(utils.container).toMatchSnapshot()
});