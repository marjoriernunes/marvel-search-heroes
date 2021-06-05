import './Details.css';
import Icon from '../../assets/Icons';
import Logo from '../../assets/logo_menor.svg';
import SearchBar from '../../components/searchbar/SearchBar';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import react from 'react';
import CharacterDetails from '../../services/character-detail.service';


const ComicsList = (props) => {
    return (
        <>
           {JSON.stringify(props)}
        </>
    );
}

const Details = () => {
    const [detailList, setDetailList] = react.useState(null);    
    const params = useParams();

    react.useEffect(() => {

        const detailsRequest = async () => {
            const data = await CharacterDetails(params.id)
            setDetailList(data.info[0]);
        }
        detailsRequest();
    }, []);

    console.log('resposta da api', detailList, detailList?.name);
    
    const teste = () => {
        console.log('caiu na pesquisa');
    }
    return (
        <>
            <div className="details-page">
                <section className="details-header">
                    <img src={Logo} alt="Marvel Search Heroes"/>
                    <SearchBar styleClass="details-search" sendData={(value) => {teste(value)}}/>
                </section>
                <section id="character-content" className="header-details">
                    <div>
                        {detailList?.name}
                        <Icon name="favorito_01" width="20px" height="20px"/>
                    </div>
                </section>
                <section id="character-comics">
                <ul className="container">
                    <ComicsList data={detailList}/>
                </ul>
                </section>
                <Footer className="footer-bar"/>
            </div>
        </>
    );
}

export default Details;