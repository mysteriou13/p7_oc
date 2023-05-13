import React from 'react';
import image from "../image/IMG.png";

function image_acceuil() {


  return (
    <div id="container" className="container">
      <img className="img_header" src={image} alt="votre image" />
      <div className="transparent"></div>
      <div className="text">  Chez vous, partout et ailleurs </div>
    </div>
  );
}

export default image_acceuil;
