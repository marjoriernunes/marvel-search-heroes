import react from 'react';
import './App.css';
import Header from './components/header/Header';
import SearchBar from './components/searchbar/SearchBar';
import Footer from './components/footer/Footer';
import CardList from './components/card/CardList';
import CharactersApi from './services/characters.service';
import Home from './pages/Home/Home';
import Icon from './assets/Icons';
import MarvelLogo from './assets/logo.svg';
import ToggleButton from './components/toggle/Toggle';

function App() {
  const [charactersInitial, charactersResponse] = react.useState(null);
  const [searchElement, setSearchElement] = react.useState('');
  const [orderChoosed, setOrder] = react.useState('name');

  const orderByName = (state) => {
    if (!!state) {
      setOrder('name');
    } else {
      setOrder('-name')
    }
  }

  react.useEffect(() => {
  
    const charactersRequest = async () => { 
      const data = await CharactersApi(searchElement, orderChoosed)
      charactersResponse(data)
    }
    charactersRequest();
  
  }, [searchElement, orderChoosed]);

  return (
      <div className="App">
        <img className="App-logo" src={MarvelLogo} alt="Marvel Search Heroes"/>
        <Header/>
        <SearchBar dataToFilter={charactersInitial?.heroes} sendData={(value) => {setSearchElement(value)}}/>
        <section className="options-bar">
          <p className="horoes-found">{`Encontramos ${charactersInitial?.heroes.length} ${charactersInitial?.heroes.length === 1 ? 'herói' : 'heróis'}`}</p>
          <div>
            <Icon name="ic_heroi" width="18" height="27"/>
            <span>Ordernar por nome - A/Z</span>
            <ToggleButton onChange={state => orderByName(state)} defaultChecked={true} />
          </div>
          <button>Somente favoritos</button>
        </section>
        <Home>
          <CardList itens={charactersInitial?.heroes}/>
        </Home>
        <Footer />
      </div>
  );
}

export default App;
