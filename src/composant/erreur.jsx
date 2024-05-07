import React from "react"; // Import de React pour créer des composants
import { Link } from "react-router-dom"; // Importe le composant 'Link' de 'react-router-dom' pour créer des liens dans l'application
import './erreur.css'; // Import du fichier CSS pour les styles de la page d'erreur

const Erreur = () => {
  return (
    <div className="titre"> {/* Conteneur principal de la page d'erreur */}
      <h1>404</h1> {/* Titre de l'erreur */}
      <h4>Oups! la page que vous demandez n'existe pas .</h4> {/* Message d'erreur */}

      <p className="retour">
        {/* Lien de retour vers la page d'accueil */}
        <Link to="/" className="home-link"> {/* Utilisation du composant Link pour créer un lien */}
          Retourner sur la page d’accueil {/* Texte du lien */}
        </Link>
      </p>
    </div>
  );
};
export default Erreur; // Export du composant Erreur
