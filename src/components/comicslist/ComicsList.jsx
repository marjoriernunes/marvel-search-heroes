import './ComicsList.css';

const ComicsList = (props) => {
    return (
        <>
            <h2>Últimos lançamentos</h2>
            <ul className="container-comic">
                {props.data?.map((comic, index) => 
                   ( 
                        <li key={index} className="comic">
                            <img 
                                alt={comic.title} 
                                src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`} />
                            <p className="comic-text">{comic.title}</p>
                        </li>   
                    )
                )}
            </ul>
        </>
    );
}

export default ComicsList;