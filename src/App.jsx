// Importe React depuis la bibliothèque React
import React from 'react';
// Importe BrowserRouter, Routes, et Route depuis 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/accueil';
import Card from './composant/card';
import Footer from './composant/footer';
import Header from './composant/header';


const App = () => {

  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
};

// Exporte le composant App pour pouvoir l'utiliser ailleurs dans l'application
export default App;

