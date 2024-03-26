// Importe React depuis la bibliothèque React
import React from 'react';
// Importe BrowserRouter, Routes, et Route depuis 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/accueil';
import Apropos from './page/apropos'
import Card from './composant/card';
import Header from './composant/header';
import Footer from './composant/footer';

const App = () => {

  return (
      <div>
        <Header/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='apropos' element={<Apropos />} />
      </Routes>
      <Footer/>
      </div>
  );
};

// Exporte le composant App pour pouvoir l'utiliser ailleurs dans l'application
export default App;

