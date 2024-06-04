import Hero from '../../components/Hero/Hero';
import noticiasVideo from '../../assets/videos/video_noticias.mp4';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Noticia from '../../components/Noticia/Noticia';
import './Noticias.css'



const Noticias = () => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await axios.get('http://servicodados.ibge.gov.br/api/v3/noticias/', {
                    params: {
                        tipo: 'noticia',
                        busca: 'poluição'
                    }
                });
                console.log(response);
                setNoticias(response.data.items); // Adaptar conforme a estrutura da resposta da API
            } catch (error) {
                console.error('Erro ao carregar as notícias:', error);
            }
        };

        fetchNoticias();
    }, []);

    return (
        <div>
            <Hero videoSrc={noticiasVideo}>
                <h1>Últimas Notícias</h1>
                <p>Fique atualizado com as últimas notícias e eventos em nossa comunidade.</p>
            </Hero>
            <div className='container-noticias'>
                <h1>Notícias sobre a água e o meio ambiente</h1>
                {noticias.map((noticia, index) => (
                    <Noticia key={index} noticia={noticia} />
                ))}
            </div>
        </div>
    );
};

export default Noticias;