import React from "react"; // Import de React pour créer des composants
import logo from "../logo/logo-footer.png"; // Import de l'image du logo
import './footer.css'; // Import du fichier CSS pour les styles du footer

const Footer = () => {
    // Rendu du composant Footer
    return (
      <footer> {/* Élément footer pour le pied de page */}
        <img src={logo} alt="logo kasa" className="footer-logo" /> {/* Affichage du logo avec la classe 'footer-logo' */}
        <p>© 2020 Kasa. All rights reserved</p> {/* Texte du pied de page */}
      </footer>
    );
  };
export default Footer; // Export du composant Footer
