import Icon from '../../assets/Icons';
import { useState } from 'react';

const Favorite = (props) => {
    const [marked, setMarked] = useState(props.marked);
    const changeFav = () => {
        if(props.favoritedAmout === 5 && !marked) {
            alert('Hey! Você já favoritou a quantidade máxima permitida! Caso queira, desvaforite algum herói e adicione este a sua lista do coração :)')
            return;
        }
        setMarked(!marked);
        props.favValue(!marked);
    }

    return (
        <div onClick={changeFav}>
            <Icon name={marked ? 'favorito_01' : 'favorito_02'} width="20px" height="20px"/>
        </div>
    )
}

export default Favorite;