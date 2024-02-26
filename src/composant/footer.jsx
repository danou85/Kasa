import React from "react";

import logo from "../logo/logo-footer.png"


import './footer.css'



const Footer = () => {
    // Rendu du composant
    return (
      // Utilise la classe CSS 'Footer-content' pour styliser le contenu du pied de page
      <div className="Footer-content">
        {/* Affiche l'image du logo du pied de page avec la classe 'footer-logo' */}
        <img src={logo} alt="logo kasa" className="footer-logo" />
        {/* Affiche le texte du pied de page */}
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    );
  };
export default Footer;