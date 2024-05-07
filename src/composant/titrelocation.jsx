// Importe React depuis la bibliothèque React
import React from 'react';

// Importe le fichier de style CSS pour le composant Titrelocation
import './titrelocation.css'; // Import du fichier CSS pour les styles du composant

// Définit le composant fonctionnel Titrelocation
const Titrelocation = ({ title, location, tags, host, rating }) => {
  // Destructuration des propriétés de l'objet host
  const { name: hostName, picture: hostPicture } = host;

  // Fonction pour générer les étoiles en fonction de la note
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i}>&#9733;</span>); // Ajout d'une étoile pleine si i est inférieur à la note
      } else {
        stars.push(<span className='inactive' key={i}>&#9733;</span>); // Ajout d'une étoile inactive si i est supérieur ou égal à la note
      }
    }
    return stars; // Retourne le tableau d'étoiles généré
  };

  // Rendu du composant Titrelocation
  return (
    <div className="title-loc"> {/* Conteneur principal pour le titre et l'emplacement */}
      <div className="title-info"> {/* Conteneur pour les informations de titre, emplacement et balises */}
        <h1>{title}</h1> {/* Affichage du titre du logement */}
        <p>{location}</p> {/* Affichage de l'emplacement du logement */}
        <ul>
          {/* Affichage des balises du logement sous forme de liste */}
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="host-rating-info"> {/* Conteneur pour les informations de l'hôte et de la note */}
        <div className="host-info"> {/* Conteneur pour les informations de l'hôte */}
          <p>{hostName}</p> {/* Affichage du nom de l'hôte */}
          <img src={hostPicture} alt={`${hostName}'s profile`} /> {/* Affichage de l'image de l'hôte */}
        </div>

        <div className="rating-info"> {/* Conteneur pour l'affichage de la note */}
          <p>{generateStars()}</p> {/* Affichage des étoiles générées par la fonction generateStars */}
        </div>
      </div>
    </div>
  );
};

// Exporte le composant Titrelocation pour pouvoir l'utiliser ailleurs dans l'application
export default Titrelocation;
