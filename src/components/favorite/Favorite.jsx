import Icon from '../../assets/Icons';

const Favorite = (props) => {
    var iconName = 'favorito_02';
    const changeFav = () => {
        props.favValue(true);
        iconName = 'favorito_01'
    }

    return (
        <div onClick={changeFav}>
            <Icon name={iconName} width="20px" height="20px"/>
        </div>
    )
}

export default Favorite;