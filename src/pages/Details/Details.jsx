import './Details.css';
import Icon from '../../assets/Icons';
import Logo from '../../assets/logo_menor.svg';
import SearchBar from '../../components/searchbar/SearchBar';
import Footer from '../../components/footer/Footer';
// import { useParams } from 'react-router-dom';

const Details = () => {
    // const params = useParams();
    // console.log(params?.id);

    const teste = () => {
        console.log('foi');
    }
    return (
        <>
            <div className="details-page">
                <section id="header" className="header-details">
                    <img className="home-logo" src={Logo} alt="Marvel Search Heroes"/>
                    <SearchBar styleClass="details-search" sendData={(value) => {teste(value)}}/>
                </section>
                <section id="character-content" className="header-details">
                    <div>
                        <h2>NAME</h2>
                        <Icon name="favorito_01" width="20px" height="20px"/>
                    </div>
                    <div>
                        IMAGE
                    </div>
                </section>
                <section id="character-comics">
                    <div>COMIC BOOKS</div>
                </section>
                <Footer className="footer-bar"/>
            </div>
        </>
    );
}

export default Details;