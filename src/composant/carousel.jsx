import React, { useState } from 'react'; // Import de React et useState pour gérer l'état local
import './carousel.css'; // Import du fichier CSS pour les styles du carousel
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import des icônes FontAwesome
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Import des icônes de flèches gauche et droite

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Déclaration d'un état local pour suivre l'index de l'image actuellement affichée

  const nextSlide = () => { // Fonction pour passer à la diapositive suivante
    const newIndex = (currentIndex + 1) % images.length; // Calcul du nouvel index en tenant compte du nombre d'images
    setCurrentIndex(newIndex); // Mise à jour de l'index actuel
  };

  const prevSlide = () => { // Fonction pour passer à la diapositive précédente
    const newIndex = (currentIndex - 1 + images.length) % images.length; // Calcul du nouvel index en tenant compte du nombre d'images
    setCurrentIndex(newIndex); // Mise à jour de l'index actuel
  };

  // Condition pour vérifier s'il y a plus d'une image
  const shouldShowNavigation = images.length > 1;

  return (
    <div className="carousel"> {/* Conteneur principal du carousel */}
      <div className="carousel-inner"> {/* Conteneur des diapositives */}
        {shouldShowNavigation && ( // Condition pour afficher les boutons de navigation uniquement s'il y a plus d'une image
          <button className='previous' onClick={prevSlide}> {/* Bouton pour passer à la diapositive précédente */}
            <FontAwesomeIcon icon={faChevronLeft} /> {/* Icône de flèche gauche */}
          </button>
        )}
        {images.map((image, index) => ( // Boucle sur les images pour les afficher
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`} // Ajout de la classe 'active' à l'image actuelle
          >
            <img src={image} alt={`Slide ${index + 1}`} /> {/* Image de la diapositive */}
          </div>
        ))}
        {shouldShowNavigation && ( // Condition pour afficher les boutons de navigation uniquement s'il y a plus d'une image
          <button className='next' onClick={nextSlide}> {/* Bouton pour passer à la diapositive suivante */}
            <FontAwesomeIcon icon={faChevronRight} /> {/* Icône de flèche droite */}
          </button>
        )}
      </div>
      {/* Condition pour afficher la pagination uniquement s'il y a plus d'une image */}
      {images.length > 1 && (
        <div className="carousel-pagination">
          {currentIndex + 1}/{images.length} {/* Affichage du numéro de la diapositive actuelle */}
        </div>
      )}
    </div>
  );
};

export default Carousel; // Export du composant Carousel
