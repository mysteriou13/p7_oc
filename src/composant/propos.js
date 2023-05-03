import React, { useState } from 'react';

import image from "../image/Vector.png"


function text_Fiabilité() {
    return "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
  }

  function text_Respect() {
    return "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  }

  function text_Service() {
    return "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  }

  function text_Securiter() {
    return "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
  }


  function display_compoment(text,image_id,id_text){

    const image = document.getElementById(image_id);

    var dis =  document.getElementById(text).style.display;

    var rotationAngle = 0;


    if( dis == "none"){

    document.getElementById(text).style.display = "block";

    document.getElementById(id_text).style.height = "100%";

    rotationAngle += 180;

    image.style.transform = `rotate(${rotationAngle}deg)`;

    }else{

     
      document.getElementById(text).style.display = "none";

      document.getElementById(id_text).style.height = "21px";

      rotationAngle += 0;
  
      image.style.transform = `rotate(${rotationAngle}deg)`;
    }
   }


   function propos() {
    const textItems = [
      { title: "Fiabilité", id: "text_fiablité", id_div: "div_text_fiablité", image_id: "image1", text: text_Fiabilité() },
      { title: "Respect", id: "text_Respect", id_div: "div_text_Respect", image_id: "image2", text: text_Respect() },
      { title: "Service", id: "text_Service", id_div: "div_text_Service", image_id: "image3", text: text_Service() },
      { title: "Sécurité", id: "text_Securité", id_div: "div_text_Sécurité", image_id: "image4", text: text_Securiter() }
    ];
  
    return (
      <div className="container_propos">
        {textItems.map((item, index) => (
          <div className="item_propos" key={index}>
            <div onClick={() => display_compoment(item.id, item.image_id, item.id_div)} className="barre_propos">
              <div className="text_barre_propos">  </div>
              <div className="div_vector">
                <img id={item.image_id} src={image} />
              </div>
            </div>
            <div id={item.id_div} className="div_text_propos">
              <p id={item.id} className="text_propos">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }


export default propos;