import React from "react";

// Importe le composant 'Link' de 'react-router-dom' pour créer des liens dans l'application
import { Link } from "react-router-dom";
import './erreur.css';

const Erreur = () => {
  return (
    <div  className="titre">
      <h1>404</h1>
      <h4>Oups! la page que vous demandez n'existe pas .</h4>

      <p className="retour">
        {/* Le lien redirige vers la page d'accueil */}
        <Link to="/" className="home-link">
          Retourner sur la page d’accueil
        </Link>
      </p>
    </div>
  );
};
export default Erreur;