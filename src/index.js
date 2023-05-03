import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/acceuil'
import Propos from './pages/propos'
import Header from './composant/header.js'

import Footer from "./composant/footer" 

import "./sass/main.scss";
// On ajoute nos composants

ReactDOM.render(
  <React.StrictMode>
 <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propos" element={<Propos />} />
        
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
