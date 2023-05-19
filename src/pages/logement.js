import React, { useState, useEffect } from 'react';
import jsonData from '../logements.json';

import Carrousel from '../composant/logement/carrousel';

import Title from '../composant/logement/title';

import Description from '../composant/logement/description';


import Notfound from "../composant/notfound"

function Logement() {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('id');

  const [data] = useState(jsonData);
  const [logement, setLogement] = useState(null);

  useEffect(() => {

   var tab = ["#index", "#propos"];

     for(var a = 0; a<= tab.length-1; a++){


          document.querySelector(tab[a]).style.textDecoration = "none";

        
     }

    const logement = data.find((l) => l.id === name);
    setLogement(logement);

  }, [data, name]);


  if (!logement) {
    return (
      <div>

        < Notfound/>
        
      </div>
    )
  }

  return (
    <div>
      <div>
      <Carrousel person={logement} />

      </div>
      <div>
        <Title person={logement} />
        </div>      

      <div>

    <Description person={logement} />

      </div>



    </div>


  );
}

export default Logement;
