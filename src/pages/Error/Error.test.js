import {render} from '@testing-library/react'
import ErrorScreen from './Error'

test('renders correctly', () =>{
    const utils = render(<ErrorScreen/>)
    expect(utils.container).toMatchSnapshot()
});

test('renders a error message', () => {
    const { getByText } = render(<ErrorScreen/>)
    expect(getByText('Oooops! A S.H.I.E.L.D não localizou nenhum herói com este nome em nosso banco de dados :(')).toBeInTheDocument()
});

