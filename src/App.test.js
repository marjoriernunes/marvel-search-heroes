import { render } from '@testing-library/react';
import App from './App';

test('renders correctly', () =>{
    const utils = render(<App/>)
    expect(utils.container).toMatchSnapshot()
});
