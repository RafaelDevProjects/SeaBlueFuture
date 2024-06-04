import React from 'react';
import Hero from '../../components/Hero/Hero';
import DoacoesCarousel from '../../components/DoacoesCarousel/DoacoesCarousel';
import doacoesVideo from '../../assets/videos/video_doacoes.mp4';
import './Doacoes.css'

const Doacoes = () => {
    return (
        <div>
            <Hero videoSrc={doacoesVideo}>
                <h1>Apoie nossa causa</h1>
                <p>Ajude-nos a fazer a diferença em nossa comunidade através de suas generosas doações.</p>
                
                
            </Hero>
            
            <div className='doacoes-carousel'>
                <h2>Faça já sua doação</h2>
                <DoacoesCarousel />
            </div>
            
            
            {/* Outros conteúdos da página Doações */}
        </div>
    );
};

export default Doacoes;
