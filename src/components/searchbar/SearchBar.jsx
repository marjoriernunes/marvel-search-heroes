import './SearchBar.css'

const SearchBar = (props) => {
    return (
        <div>
            <input 
                type="text" 
                placeholder="Pesquisaê" 
                onChange={(event) => {props.sendData(event.target.value)}}
            />
        </div>
    )
}

export default SearchBar;