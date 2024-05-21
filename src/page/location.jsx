// Importe React et les hooks useEffect et useParams depuis la bibliothèque React
import React, { useEffect } from 'react';
// Importe useParams et useNavigate depuis react-router-dom pour accéder aux paramètres de l'URL et à la navigation
import { useParams, useNavigate } from 'react-router-dom';
// Importe les données de logements depuis un fichier JSON local
import logementsData from '../data/logements.json';

// Importe les composants Carousel, Titrelocation et DescriptionEquipement
import Carousel from '../composant/carousel.jsx';
import Titrelocation from '../composant/titrelocation.jsx';
import DescriptionEquipement from '../composant/descriptionequipement.jsx';

// Définit le composant fonctionnel Location
const Location = () => {
  // Utilise le hook useParams pour extraire l'identifiant du logement depuis l'URL
  const { id } = useParams();
  // Utilise le hook useNavigate pour permettre la navigation programmatique
  const navigate = useNavigate();

  // Utilise useEffect pour vérifier si le logement existe dans les données
  useEffect(() => {
    // Si le logement avec l'ID correspondant n'est pas trouvé, redirige vers une page d'erreur
    if (!logementsData.find((logement) => logement.id === id)) {
      navigate('/error');
    }
  }, []); // Le tableau de dépendances est vide, donc cet effet s'exécute une seule fois après le montage du composant

  // Trouve le logement correspondant dans les données en utilisant l'identifiant extrait de l'URL
  const logement = logementsData.find((logement) => logement.id === id);

  // Vérifie si le logement n'est pas trouvé, affiche un message d'erreur (ce cas est en théorie couvert par useEffect)
  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  // Rendu du composant Location
  return (
    <div className='location'>
      {/* Utilise le composant Carousel pour afficher les images du logement */}
      <Carousel images={logement.pictures}/>
      
      {/* Utilise le composant Titrelocation pour afficher le titre, la localisation, les tags, l'hôte et la note du logement */}
      <Titrelocation
        title={logement.title}
        location={logement.location}
        tags={logement.tags}
        host={logement.host}
        rating={logement.rating}
      />
      
      {/* Utilise le composant DescriptionEquipement pour afficher la description et les équipements du logement */}
      <DescriptionEquipement 
        description={logement.description}
        equipments={logement.equipments}
      />
    </div>
  );
};

// Exporte le composant Location pour pouvoir l'utiliser ailleurs dans l'application
export default Location;
