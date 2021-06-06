import './CardList.css';
import ErrorScreen from  '../../pages/Error/Error';
import { useHistory } from 'react-router-dom';
import Favorite from '../favorite/Favorite';
import CharacterService from '../../services/character.service'
import useFavorite from '../../hooks/useFavorite/useFavorite';

const CardList = (props) => {
    const {favoritedAmout, addFavorite, removeFavorite} = useFavorite();
    const history = useHistory();
    
    const details = (item) => {
      return history.push(`/hero/${item.id}`)
    }

    if (props.itens?.length === 0) {
      return <ErrorScreen />
    } else {
      return (
        <>
          <ul className="container">
            {props.itens?.map(item => 
              (
                <li className="itens" key={item?.id}>
                    <img 
                      className="image-size" 
                      onClick={() => details(item)} 
                      alt={item.name} 
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
                      <div className="heroInfo">
                        <p onClick={() => details(item)}>{item?.name}</p>
                        <Favorite 
                          marked={CharacterService.isFavorite(item)} 
                          favoritedAmout={favoritedAmout} 
                          favValue={(shouldFavorite) => {
                            shouldFavorite ? addFavorite(item) : removeFavorite(item)
                          }}/>
                      </div>
                </li>
              ))}
          </ul>
        </>
      )
    }
  }

  export default CardList;