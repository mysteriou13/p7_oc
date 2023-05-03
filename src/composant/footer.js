import React from 'react';


import logo from '../image/LOGO_white.png';




function  footer() {
  return (


    <footer id = "footer">
    <div className="container_footer">

       <div className = "div_image_footer">
      <img className = "img_footer" src= {logo} alt="votre image" />
       </div>
       
       <div className = "text_footer">

       © 2020 Kasa. All rights reserved

       </div>

    </div>
    </footer>
 
  );
}

export default footer;
