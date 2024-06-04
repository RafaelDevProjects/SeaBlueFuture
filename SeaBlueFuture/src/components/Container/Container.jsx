import './Container.css';

function Container({ titulo, texto, path, index}) {
  let divContainer
  if (typeof path === 'string' && path.includes('youtube')) {
    divContainer = 
      <div className="video-container">
          <iframe width="100%" height="315" src={path} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
  } else {
    divContainer = 
      <img src={path} alt={titulo} style={{ borderRadius: '10px'}} />
  }
  return (
    <div className="container-sobre">
      <div className="sobre-img">
        {divContainer}
      </div>
      <div className="sobre-text">
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </div>       
    </div>
  )
}

export default Container;