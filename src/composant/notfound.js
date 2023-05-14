import React from 'react';

import image from "../image/404.png"

import { Link } from 'react-router-dom';

function notfound(){


    return (
  
        <div className = "div_imagenofound">
            <div className = "image_nofound" alt = "404 page non">
    
          <img  className = "img_nofound" src = {image} />
    
            </div>
    
            <div>
              
              <div  className = "text_nofound"> 
              
              <div>
              Oups! La page que
              </div>
              
              <div>
               vous demandez n'existe pas. 
              </div>

              </div>
    
            <Link to="/" className="link">Retourner sur la page d’accueil</Link>
    
              </div>
        </div>
    
      )

}

export default notfound