import React from 'react';
import logo from '../image/LOGO.png';
import { Link } from 'react-router-dom';

function Header() {

  const nav_Click = (param) => {

    var id = document.querySelector(param);

   var tab = ["#index", "#propos"];

     for(var a = 0; a<= tab.length-1; a++){


        if(tab[a] == param){

          document.querySelector(tab[a]).style.textDecoration = "underline";

        }else{

          document.querySelector(tab[a]).style.textDecoration = "none";

         
        }

     }

  };

  return (
    <header>
      <div className="box_nav">
        <div className = "div_logo">
          <img className="logo" src={logo} />
        </div>
        <div>
          <nav>
            <div>
              <Link to="/" id = "index" className ='index' onClick={() => nav_Click("#index")}>
                Accueil
              </Link>
            </div>
            <div>
              <Link to="/propos" id = "propos" className='propos' onClick={() => nav_Click("#propos")}>
                À propos
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );

  
}

export default Header;
