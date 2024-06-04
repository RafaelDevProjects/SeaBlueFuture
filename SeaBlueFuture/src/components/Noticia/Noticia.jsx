import React from 'react';
import './Noticia.css'

const Noticia = ({ noticia }) => {
  // Verifica se a data é inválida
  const isInvalidDate = (dateString) => {
    return dateString === "Invalid Date" || isNaN(new Date(dateString));
  };

    const formattedDate = isInvalidDate(noticia.data_publicacao) ? null : new Date(noticia.data_publicacao).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="noticia">
      <h2>{noticia.titulo}</h2>
      {formattedDate && <p className="noticia-data">{formattedDate}</p>}
      <p>{noticia.introducao}</p>
      <a href={noticia.link} target="_blank" rel="noopener noreferrer">Leia mais</a>
    </div>
  );
};

export default Noticia;