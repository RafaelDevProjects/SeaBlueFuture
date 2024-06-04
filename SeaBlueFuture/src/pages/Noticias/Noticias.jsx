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
                const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        apiKey: "0c20ce5ab407490cafc5e6640dd77bd9",
                        country: "",
                        category: 'science',
                        q: "sea"
                    }
                });
                console.log(response)
                setNoticias(response.data.articles);
            } catch (error) {
                console.error('Erro ao carregar as notícias:', error);
            }
        };

        fetchNoticias();
    }, []);

    return (
        <div>
            <Hero videoSrc={noticiasVideo}>
                <h1>Últimas Noticias</h1>
                <p>fique atualizado com as últimas notícias e eventos em nossa comunidade.</p>
            </Hero>
            <div className='container-noticias'>
                <h1>Notícias sobre Clima e Oceano</h1>
                {noticias.map((noticia, index) => (
                    <Noticia key={index} noticia={noticia} />
                ))}
            </div>
        </div>
    );
};

export default Noticias;