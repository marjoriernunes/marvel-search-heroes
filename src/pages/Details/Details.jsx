import './Details.css';
import Logo from '../../assets/logo_menor.svg';
import SearchBar from '../../components/searchbar/SearchBar';
import Footer from '../../components/footer/Footer';
import { useParams, useHistory } from 'react-router-dom';
import CharacterService from '../../services/character.service';
import useFavorite from '../../hooks/useFavorite/useFavorite';
import Favorite from '../../components/favorite/Favorite';
import ComicsList from '../../components/comicslist/ComicsList';
import { useEffect, useState } from 'react';
import HeroImage from '../../components/heroimage/HeroImage';


const Details = () => {
    const {favoritedAmout, addFavorite, removeFavorite} = useFavorite();
    const [detailList, setDetailList] = useState(null);    
    const [comicList, setComicList] = useState([]);
    const params = useParams();
    const history = useHistory();

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
        backHome();
    }

    const backHome = () => {
        return history.push('/')
    }

    if(detailList === null) {
        return <p>Carregando...</p>
    } else {
        return (
            <>
                <div className="details-page">
                    <section id="header-details" className="details-header">
                        <img src={Logo} alt="Marvel Search Heroes" onClick={backHome}/>
                        <SearchBar styleClass="details-search" sendData={(value) => {searchData(value)}}/>
                    </section>
                    <div id="character-content">
                        <HeroImage heroInfo={detailList}/>
                    </div>
                    <section className="additionalInfo">
                        <p className="comic-hero-details">Quantidade de aparições nos quadrinhos: {detailList?.comics.available}</p>
                        <div className="fav">
                            <p className="fav-text">Favorito</p>
                            <Favorite marked={CharacterService.isFavorite(detailList)} favoritedAmout={favoritedAmout} favValue={(shouldFavorite) => {shouldFavorite ? addFavorite(detailList) : removeFavorite(detailList)}}/>
                        </div>
                    </section>
                    <section id="character-comics">
                    <div className="container-details">
                        <ComicsList data={comicList.comics}/>
                    </div>
                    </section>
                    <Footer className="footer-bar"/>
                </div>
            </>
        );
    }
}

export default Details;