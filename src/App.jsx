// Importe React depuis la bibliothèque React
import React from 'react';
// Importe BrowserRouter, Routes, et Route depuis 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/accueil';
import Card from './composant/card';


const App = () => {

  return (

    <Router>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={< about/>} />
      </Routes>
    </Router>
  );
};

// Exporte le composant App pour pouvoir l'utiliser ailleurs dans l'application
export default App;