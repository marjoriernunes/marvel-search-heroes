import {render, fireEvent} from '@testing-library/react'
import Home from './Home.jsx';
import CharacterService from '../../services/character.service';
jest.mock('../../services/character.service');

test('renders correctly', () =>{
    const utils = render(<Home/>)
    utils.debug()
    // expect(utils.container).toMatchSnapshot()
});


// describe('orderByName', () => {

//     const setup = () => {
//         return render(<Home/>)
//     }
    // aria-label="Toggle Button"
    // utils.debug()

    // test('', () => {
    //     CharacterService.heroList.mockResolvedValueOnce([mockdeheroi])
    //     const utils = setup();
    //     utils.debug()
    //     const toggle =  utils.getByTestId("toggle-div").firstChild();
    //     fireEvent.click(toggle)
    //     // expect(u)
    //     fireEvent.click(toggle)
    //     return expect(containercomlista)
    // })

    // let setOrder = () => {}
    // const orderByName = (state) => {
    //     if (!!state) {
    //        setOrder('name');
    //       } else {
    //         setOrder('-name');;
    //       }
    //     };
    // test('should return if value', () => {
    //     const state = true;
    //     const result = orderByName(state);
    //     expect(result).toEqual(setOrder('name'));
    // })

    // test('should return else value', () => {
    //     const state = false;
    //     const result = orderByName(state);
    //     expect(result).toEqual(setOrder('-name'));
    // })
// })
