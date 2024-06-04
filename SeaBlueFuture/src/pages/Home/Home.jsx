import React from 'react';
import Hero from '../../components/Hero/Hero';
import homeVideo from '../../assets/videos/video_ocean.mp4';

const Home = () => {
  return (
      <div>
          <Hero videoSrc={homeVideo}>
              <h1>Bem-vindo ao SeaBlueFuture</h1>
              <p>Todos por um futuro mais azul</p>
          </Hero>
          {/* Outros conteúdos da página Home */}
      </div>
  );
};

export default Home;