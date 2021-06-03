import react from 'react';
import './App.css';
import Header from './components/header/Header';
import SearchBar from './components/searchbar/SearchBar';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import CardList from './components/card/CardList';
import CharactersApi from './services/characters.service';

function App() {
  const [charactersInitial, charactersResponse] = react.useState(null);
  const [searchElement, setSearchElement] = react.useState('');
  const [orderChoosed, setOrder] = react.useState('name');

  react.useEffect(() => {
  
    const charactersRequest = async () => { 
      const data = await CharactersApi(searchElement, orderChoosed)
      charactersResponse(data)
    }
    charactersRequest();
  
  }, [searchElement, orderChoosed]);

  return (
      <div className="App">
        <Header/>
        <SearchBar dataToFilter={charactersInitial?.heroes} sendData={(value) => {setSearchElement(value)}}/>
        <div>
          <p>{`Encontramos ${charactersInitial?.heroes.length} ${charactersInitial?.heroes.length === 1 ? 'herói' : 'heróis'}`}</p>
          <button onClick={() => {orderChoosed === 'name' ? setOrder('-name') : setOrder('name')}}>Ordernar por nome - A/Z</button>
        </div>
        <Home>
          <CardList itens={charactersInitial?.heroes}/>
        </Home>
        <Footer />
      </div>
  );
}

export default App;
