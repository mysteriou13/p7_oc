import React from 'react'

import { Link } from 'react-router-dom';

import image from "../image/404.png"


function notfound(){

return (
  
    <div className = "div_imagenofound">
        <div className = "image_nofound" alt = "404 page non">

      <img src = {image} />

        </div>

        <div>
          
          <p  className = "text_nofound"> Oups! La page que vous demandez n'existe pas. </p>

        <Link to="/" className="link">Retourner sur la page d’accueil</Link>

          </div>
    </div>

  )
}


 export default notfound;