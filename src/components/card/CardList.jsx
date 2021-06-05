import react from 'react';
import './CardList.css';
import ErrorScreen from  '../../pages/Error/Error';
import { useHistory } from 'react-router-dom';
import Favorite from '../favorite/Favorite';

const CardList = (props) => {
    const [itemSelected, setItem] = react.useState(null);
    const history = useHistory();
    
    const details = (item) => {
      setItem(item);
      return history.push(`/hero/${item.id}`)
    }

    const favorite = (value) => {
      console.log('favoritei', value);
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
                    <img className="image-size" onClick={() => details(item)} alt={item.name} src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
                      <div className="heroInfo">
                        <p onClick={() => details(item)}>{item?.name}</p>
                        <Favorite favValue={(value) => {favorite(value)}}/>
                      </div>
                </li>
              ))}
          </ul>
        </>
      )
    }
  }

  export default CardList;