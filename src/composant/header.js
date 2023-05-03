import React from 'react';

import logo from '../image/LOGO.png';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
   
      
      <div className = "box_nav">
    <div> <img src  = {logo}/> </div><div> <nav>  
      
      <div><Link to="/">Accueil</Link> </div> 
     <div> <Link to="/propos">À propos</Link> </div>  </nav> </div></div>
      
    </header>
  );
}

export default Header;

