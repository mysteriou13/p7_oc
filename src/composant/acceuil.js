import React, { useState } from 'react';
import jsonData from '../logements.json';

function Acceuil() {
  const [data] = useState(jsonData);

  const listItems = data.map((logement) =>
<div className = "card_acceuil" key={logement.id}>


<div className = "div_image_dacceuil">
<img  className = "image_acceuil" src={logement.cover} alt={logement.title} />
</div>

<div className = "title_logement"> {logement.title}</div>

</div>
);

  return (

    <div  className = "list_card_acceuil">
        {listItems}
        
        </div>
  
    );
}



export default Acceuil;
