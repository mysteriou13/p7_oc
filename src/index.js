import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/acceuil'
import Propos from './pages/propos'
import Header from './composant/header.js'

import Footer from "./composant/footer" 

import NotFound from "./pages/notfound"

import Logement from './pages/logement'

import "./sass/main.scss";
// On ajoute nos composants



ReactDOM.render(
  <React.StrictMode>
 <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/logement" element={<Logement parametre="ma-valeur" />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  
)

