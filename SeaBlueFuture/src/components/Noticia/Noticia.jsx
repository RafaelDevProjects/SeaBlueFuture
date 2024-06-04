import React from 'react';
import './Noticia.css'

const Noticia = ({ noticia }) => {
  return (
    <div className="noticia">
      <h2>{noticia.title}</h2>
      <p>{noticia.description}</p>
      <a href={noticia.url} target="_blank" rel="noopener noreferrer">Leia mais</a>
    </div>
  );
};

export default Noticia;