import React from "react";

import etoile_plus  from "../../image/etoile_plus.png";


import etoile_moin  from "../../image/etoile_moin.png";

function Title(props) {

   

  /*tableau pour les etoile*/
    var tab = [];

    for(var a = 0; a< props.person.rating;  a++){

     tab.push(etoile_plus);


    }

    if(tab.length < 5){


        var nb = 5-tab.length;

        for(var a = 0; a != nb;  a++){

            tab.push(etoile_moin);
       
       
           }


    }


    const listetoile = tab.map((image, index) => {
      return <div> <img key={index} src={image} alt={`Image ${index}`} /></div>;
    });

    console.log("tab",tab);

  return (
  
  <div className = "main_div_logement">

  <div className = "div_logement">

<div className = "title_logement_page">

  {props.person.title}

</div>


<div className = "sous_title_logement_page">

  {props.person.location}

</div>


<div className = "div_tag">

{props.person.tags.map((item, index) => (

<div key = {index} className = "div_text_tag">

<p className = "text_tag">

{item}

</p>

</div>


))}

</div>



</div>

<div> 

<div className = "div_host">    

<div className = "name_host">{props.person.host.name} </div> 


<div>
<img  className = "img_host" src = {props.person.host.picture} alt = "image" />
</div>

</div>

<div className = "div_etoile">

{listetoile}
</div>


</div>

</div>

)

}

export default Title;
