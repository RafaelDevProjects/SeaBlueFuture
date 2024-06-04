import React from 'react';
import Hero from '../../components/Hero/Hero';
import DoacoesCarousel from '../../components/DoacoesCarousel/DoacoesCarousel';
import doacoesVideo from '../../assets/videos/video_doacoes.mp4';

const Doacoes = () => {
    return (
        <div>
            <Hero videoSrc={doacoesVideo}>
                <h1>Apoie nossa causa</h1>
                <p>Ajude-nos a fazer a diferença em nossa comunidade através de suas generosas doações.</p>
                <br />
                <h2>Nossos Principais parceiros</h2>
                
            </Hero>
            <div className='doacoes-carousel'>
              <DoacoesCarousel />
            </div>
            
            
            {/* Outros conteúdos da página Doações */}
        </div>
    );
};

export default Doacoes;
