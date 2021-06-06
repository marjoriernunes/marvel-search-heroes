
import Header from '../../components/header/Header';
import SearchBar from '../../components/searchbar/SearchBar';
import Footer from '../../components/footer/Footer';
import CardList from '../../components/card/CardList';
import Icon from '../../assets/Icons';
import MarvelLogo from '../../assets/logo.svg';
import ToggleButton from '../../components/toggle/Toggle';
import './Home.css';
import { useState, useEffect } from 'react';
import CharacterService from '../../services/character.service';

const Home = () => {
    const [charactersInitial, charactersResponse] = useState(null);
    const [searchElement, setSearchElement] = useState('');
    const [orderChoosed, setOrder] = useState('name');
    const [onlyFavorites, setOnlyFavorites] = useState(false);
    const [favoriteArrayList, setFavoriteArrayList ] = useState([]); 

    const orderByName = (state) => {
        if (!!state) {
        setOrder('name');
        } else {
        setOrder('-name')
        }
    }

    const favoritesList = () => {
        setOnlyFavorites(!onlyFavorites);
        const favorites =  CharacterService.getFavorites();
        setFavoriteArrayList(favorites);
    }

    useEffect(() => {
        const charactersRequest = async () => { 
        const data = await CharacterService.heroList(searchElement, orderChoosed)
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
                    <div className="spacing" onClick={favoritesList}>
                        <Icon name="favorito_01" width="20" height="20"/>
                        <p className="options-text favorites">{onlyFavorites ? 'Ver todos heróis' : 'Somente favoritos'}</p>
                    </div>
                    </div>
                </section>
                <CardList itens={onlyFavorites ? favoriteArrayList : charactersInitial?.heroes}/>
            </div>
            <Footer className="footer-bar"/>
        </>
    );
}

export default Home;