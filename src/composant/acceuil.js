import React, { useState } from 'react';

import { Link } from 'react-router-dom';


import jsonData from '../logements.json';


function Acceuil() {


  const logement_Click = (param) => {

    var id = document.querySelector(param);

   var tab = ["#index", "#propos"];

     for(var a = 0; a<= tab.length-1; a++){

          document.querySelector(tab[a]).style.textDecoration = "none";


     }

  };


  const [data] = useState(jsonData);

  const listItems = data.map((logement) =>
<div className = "card_acceuil" key={logement.id}>

<Link to ={`/logement?id=${logement.id}`}  onClick={() => logement_Click()}>

<div className = "div_image_dacceuil">
<img  className = "image_acceuil" src={logement.cover} alt={logement.title} />
</div>

<div className = "title_logement"> {logement.title} </div>

</Link>

</div>
);


  return (

    <div  className = "list_card_acceuil">
        {listItems}
        
        </div>
  
    );
}



export default Acceuil;
