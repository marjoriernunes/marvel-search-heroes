
import Header from '../../components/header/Header';
import SearchBar from '../../components/searchbar/SearchBar';
import Footer from '../../components/footer/Footer';
import CardList from '../../components/card/CardList';
import CharactersApi from '../../services/characters.service';
import Icon from '../../assets/Icons';
import MarvelLogo from '../../assets/logo.svg';
import ToggleButton from '../../components/toggle/Toggle';
import './Home.css';
import react from 'react';

const Home = () => {
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
        <> 
            <div className="home">
                <img className="home-logo" src={MarvelLogo} alt="Marvel Search Heroes"/>
                <Header/>
                <SearchBar styleClass="home-search" sendData={(value) => {setSearchElement(value)}}/>
                <section className="options-bar">
                <p className="horoes-found">{`Encontramos ${charactersInitial?.heroes.length} ${charactersInitial?.heroes.length === 1 ? 'herói' : 'heróis'}`}</p>
                    <div className="options">
                    <div>
                        <Icon name="ic_heroi" width="18" height="27"/>
                        <span className="options-text toggle">Ordernar por nome - A/Z</span>
                        <ToggleButton onChange={state => orderByName(state)} defaultChecked={true} />
                    </div>
                    <div className="spacing">
                        <Icon name="favorito_01" width="20" height="20"/>
                        <p className="options-text favorites">Somente favoritos</p>
                    </div>
                    </div>
                </section>
                <CardList itens={charactersInitial?.heroes}/>
            </div>
            <Footer className="footer-bar"/>
        </>
    );
}

export default Home;