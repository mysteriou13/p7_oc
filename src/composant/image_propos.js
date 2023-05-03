import React from 'react';

import image from "../image/kalen-emsley-Bkci_8qcdvQ-unsplash.png";

function image_propos(){

    return(

        <div className = "container">
        <img className ="img_header" src={image} alt="votre image" />
        <div className ="transparent"></div>
        <div className ="text">  </div>
      </div>

    );

}

export default image_propos;