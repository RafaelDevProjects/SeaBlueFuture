import React from 'react';
import Hero from '../../components/Hero/Hero';
import homeVideo from '../../assets/videos/video_ocean.mp4';
import sobreImg from "../../assets/images/foto_sobre.jpg";
import Container from "../../components/Container/Container";

const Home = () => {
  return (
      <div>
          <Hero videoSrc={homeVideo}>
              <h1>Bem-vindo ao SeaBlueFuture</h1>
              <p>Todos por um futuro mais azul</p>
          </Hero>
          <Container
          titulo='Sobre'
          texto='O SeaBlueOcean é mais do que apenas um site; é uma plataforma de conscientização, mobilização e ação em prol da preservação dos oceanos e do meio ambiente. Nossa missão é fornecer informações relevantes e impactantes sobre questões climáticas e oceânicas, destacando notícias importantes e tendências preocupantes, como enchentes, derretimento de geleiras e poluição por microplásticos. Através do nosso portal online, buscamos engajar e capacitar indivíduos a se tornarem agentes de mudança em suas comunidades. '
          path={sobreImg}
          index={2}
          className="container"
        />
      </div>
  );
};

export default Home;