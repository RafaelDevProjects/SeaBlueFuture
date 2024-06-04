import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DoacoesCarousel.scss';
import logoInstitutoPovoMar from '../../assets/images/logo_instituto_povo_mar.png';
import logoEuApoio from '../../assets/images/logo_euapoio.png';
import logoOceanica from '../../assets/images/logo_oceanica.png';
import logoOceanAlive from '../../assets/images/logo_oceanAlive.jpg';



const partners = [
    { description: 'Uma iniciativa em parceria com Menos 1 Lixo e Vozes do Planeta para apoiar Ongs que atuam na preservação do ecossistema marinho. Conheça mais sobre o projeto: ', image: logoEuApoio, donationUrl: 'https://euapoio.com.br/instituicao/apoie-o-oceano/apoiar' },
    { description: 'Para garantirmos a manutenção e ampliação das nossas ações socioambientais nos oceanos e mares, a sua doação é fundamental, bem vinda e nos sentimos gratos pela sua atitude. Na verdade, quem realmente agradece é a vida por estarmos certos da intensa conexão ecossistêmica. Cada ação reverbera no todo. Cuidar dos oceanos e mares é uma missão para cada um de nós.', image: logoOceanica, donationUrl: 'https://oceanica.org.br/doacoes/' },
    { description: 'Nunca foi tão importante reflorestar o mar para manter a vida das pessoas e a natureza no planeta. A cada hora que passa perdemos 2 campos de futebol de pradarias marinhas. Mas é possível reverter este rumo.', image: logoOceanAlive, donationUrl: 'https://oceanica.org.br/doacoes/' }
    // Adicione mais parceiros conforme necessário
];

const DoacoesCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '0px'
                }
            }
        ]
    };

    return (
        <div className="doacoes-carousel-container">
            <Slider {...settings}>
                {partners.map((partner, index) => (
                    <div key={index} className="partner-slide">
                        <img src={partner.image} alt={partner.name} className="partner-image" />
                        <div className="partner-info">
                            <h2>{partner.name}</h2>
                            <p>{partner.category}</p>
                            <p>{partner.description}</p>
                            <a href={partner.donationUrl} className="donate-button" target="_blank" rel="noopener noreferrer">Doar agora</a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default DoacoesCarousel;
