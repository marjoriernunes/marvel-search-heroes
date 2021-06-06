import './Details.css';
import Icon from '../../assets/Icons';
import Logo from '../../assets/logo_menor.svg';
import SearchBar from '../../components/searchbar/SearchBar';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import CharacterService from '../../services/character.service';
import useFavorite from '../../hooks/useFavorite/useFavorite';
import Favorite from '../../components/favorite/Favorite';
import ComicsList from '../../components/comicslist/ComicsList';
import { useEffect, useState } from 'react';


const Details = () => {
    const {favoritedAmout, addFavorite, removeFavorite} = useFavorite();
    const [detailList, setDetailList] = useState(null);    
    const [comicList, setComicList] = useState([]);
    const params = useParams();

    useEffect(() => {
        const detailsRequest = async () => {
            const data = await CharacterService.heroListDetails(params.id)
            setDetailList(data.info[0]);
        }
        detailsRequest();
    }, []);

    useEffect(() => {
        const comicsRequest = async () => {
            const data = await CharacterService.heroListComics(params.id);
            setComicList(data);
        }
        comicsRequest();
    }, [])
    
    const searchData = () => {
        console.log('caiu na pesquisa');
    }
    
    if(detailList === null) {
        return <p>Carregando...</p>
    } else {
        return (
            <>
                <div className="details-page">
                    <section className="details-header">
                        <img src={Logo} alt="Marvel Search Heroes"/>
                        <SearchBar styleClass="details-search" sendData={(value) => {searchData(value)}}/>
                    </section>
                    <section id="character-content" className="header-details">
                        <div>
                            {detailList?.name}
                            <Favorite marked={CharacterService.isFavorite(detailList)} favoritedAmout={favoritedAmout} favValue={(shouldFavorite) => {shouldFavorite ? addFavorite(detailList) : removeFavorite(detailList)}}/>
                        </div>
                    </section>
                    <section id="character-comics">
                    <ul className="container">
                        <ComicsList data={comicList.comics}/>
                    </ul>
                    </section>
                    <Footer className="footer-bar"/>
                </div>
            </>
        );
    }
}

export default Details;