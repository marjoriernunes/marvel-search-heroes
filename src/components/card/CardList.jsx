import react from 'react';
import './CardList.css';
import ErrorScreen from  '../../pages/Error/Error';
import Icon from '../../assets/Icons'

const CardList = (props) => {
    const [itemSelected, setItem] = react.useState(null);
    if (props.itens?.length === 0) {
      return <ErrorScreen />
    } else {
      return (
        <>
          <ul className="container">
            {props.itens?.map(item => 
              (
                <li className="itens" key={item?.id} onClick={() => setItem(item)}>
                    <img className="image-size" alt={item.name} src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
                      <div className="heroInfo">
                        <p>{item?.name}</p>
                        <Icon name="favorito_02" width="20px" height="20px"/>
                      </div>
                </li>
              ))}
          </ul>
        </>
      )
    }
  }

  export default CardList;