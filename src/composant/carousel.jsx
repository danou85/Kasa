import React, { useState } from 'react';
import './carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  // Condition pour vérifier s'il y a plus d'une image
  const shouldShowNavigation = images.length > 1;

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {shouldShowNavigation && ( // Condition pour afficher les boutons de navigation
          <button className='previous' onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        {shouldShowNavigation && ( // Condition pour afficher les boutons de navigation
          <button className='next' onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
      {/* Condition pour afficher la pagination uniquement s'il y a plus d'une image */}
      {images.length > 1 && (
        <div className="carousel-pagination">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

export default Carousel;
