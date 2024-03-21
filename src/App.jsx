// Importe React depuis la bibliothèque React
import React from 'react';
// Importe BrowserRouter, Routes, et Route depuis 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/accueil';
import apropos from './page/apropos'
import erreur from './page/erreur'
import location from './page/location'
import Card from './composant/card';

const App = () => {

  return (

    <Router>

      <Routes>
        <Route path='/' element={<Home />} />
        {/*<Route path='about' element={<apropos />} />
        <Route path='location/:id' element={<location />} />
        <Route path='*' element={<Error404 />} />
  <Route path='/' element={<Card />} />*/}
      </Routes>
    </Router>
  );
};

// Exporte le composant App pour pouvoir l'utiliser ailleurs dans l'application
export default App;

