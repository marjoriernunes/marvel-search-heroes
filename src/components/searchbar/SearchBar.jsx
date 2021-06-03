import './SearchBar.css';
import Icon from '../../assets/Icons';

const SearchBar = (props) => {
    return (
        <div className="left-inner-addon">
            <Icon name="ic_busca" width="20px" height="20px"/>
            <input 
                type="text" 
                placeholder="Procure por heróis" 
                onChange={(event) => {props.sendData(event.target.value)}}
            />
        </div>
    )
}

export default SearchBar;