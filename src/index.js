import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/acceuil'
import Propos from './pages/propos'
import Header from './composant/header.js'

import Footer from "./composant/footer" 

import NotFound from "./pages/notfound"

import "./sass/main.scss";
// On ajoute nos composants

function footer(){


  const largeurEcran = window.innerWidth;
  const largeurElement = largeurEcran * 0.91;
  const myElement = document.querySelector('#footer');
  myElement.style.width = `${largeurElement}px`;
  


}


ReactDOM.render(
  <React.StrictMode>
 <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  
)


footer();
