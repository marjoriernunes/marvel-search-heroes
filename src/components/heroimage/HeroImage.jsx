import './HeroImage.css';

const HeroImage = (props) => {
    return (
        <> 
            <div className="header-hero-info">
                <div className="gradient-overlay">
                    <img 
                        src={`${props.heroInfo?.thumbnail.path}/detail.${props.heroInfo?.thumbnail.extension}`}  
                        alt={props.heroInfo?.name} />
                        <span/>
                </div>
                <div className="top-left">
                   <p className="hero-name">
                        {props.heroInfo?.name}
                    </p>
                    <p className="hero-description">
                        {props.heroInfo?.description === '' 
                        ? 'Agente Nicholas Joseph "Nick" Fury está em uma missão para descobrir mais informações sobre este herói ;)'
                        : props.heroInfo?.description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default HeroImage;