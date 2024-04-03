import React from "react";

// Importe le composant 'Link' de 'react-router-dom' pour créer des liens dans l'application
import { Link } from "react-router-dom";

const Erreur = () => {
  return (
    <div>
      <h1>Erreur =</h1>
      <h3>Oups! la page que vous demandez n'existe pas .</h3>

      <p className="return">
        {/* Le lien redirige vers la page d'accueil */}
        <Link to="/" className="home-link">
          Retourner sur la page d’accueil
        </Link>
      </p>
    </div>
  );
};
export default Erreur;