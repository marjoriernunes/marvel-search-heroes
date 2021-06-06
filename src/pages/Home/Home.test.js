import {render, fireEvent} from '@testing-library/react'
import Home from './Home.jsx';
import CharacterService from '../../services/character.service';
import characterMock from '../../mock/characters.mock';
jest.mock('../../services/character.service');

test('renders correctly', () =>{
    CharacterService.getFavorites.mockReturnValueOnce([]);
    CharacterService.heroList.mockResolvedValueOnce([characterMock]);
    const utils = render(<Home/>)
    utils.debug()
    expect(utils.container).toMatchSnapshot()
});
