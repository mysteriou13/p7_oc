import React, { useState, useEffect } from 'react';
import jsonData from '../logements.json';
import { Link } from 'react-router-dom';
import Carrousel from '../composant/logement/carrousel';
import image from "../image/404.png"

function Logement() {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('id');

  const [data] = useState(jsonData);
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const logement = data.find((l) => l.id === name);
    setLogement(logement);
  }, [data, name]);

  console.log(logement);

  if (!logement) {
    return (
      <div className="div_imagenofound">
        <div className="image_nofound" alt="404 page non">
          <img src={image} />
        </div>
        <div>
          <p className="text_nofound">Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="link">Retourner sur la page d’accueil</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Carrousel person={logement} />
      {/* Display additional information about the logement */}
    </div>
  );
}

export default Logement;
