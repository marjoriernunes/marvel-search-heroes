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

  react.useEffect(() => {
  
    const charactersRequest = async () => { 
      const data = await CharactersApi(searchElement)
      charactersResponse(data)
    }
    charactersRequest();
  
  }, [searchElement])

  return (
      <div className="App">
        <Header/>
        <SearchBar dataToFilter={charactersInitial?.heroes} sendData={(value) => {setSearchElement(value)}}/>
        <Home>
          <CardList itens={charactersInitial?.heroes}/>
        </Home>
        <Footer />
      </div>
  );
}

export default App;
