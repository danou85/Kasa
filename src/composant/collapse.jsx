// Import des bibliothèques et des fichiers CSS nécessaires
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import de FontAwesomeIcon depuis le package "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"; // Import des icônes chevron depuis le package "@fortawesome/free-solid-svg-icons"


// Définition du composant Collapse
const Collapse = ({ title, content }) => {
  // Déclaration de l'état local isCollapsed pour suivre l'état du collapse
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Fonction pour rendre l'icône de chevron en fonction de l'état du collapse
  const renderChevron = (isOpen) => {
    return (
      <FontAwesomeIcon 
        icon={isOpen ? faChevronDown : faChevronUp} // Utilisation de l'icône chevron vers le bas si isOpen est vrai, sinon utilise l'icône chevron vers le haut
        className={`chevron-icon ${isOpen ? "rotate" : ""}`} // Ajout d'une classe CSS "rotate" si isOpen est vrai pour faire pivoter l'icône
      />  
    );
  }

  // Rendu du composant Collapse
  return (
    <div className="collaps-content">
      <button className="collapse" onClick={() => setIsCollapsed(!isCollapsed)}>
        {title} {/* Affichage du titre du collapse */}
        {renderChevron(isCollapsed)} {/* Appel de la fonction renderChevron pour afficher l'icône de chevron */}
      </button>
      {/* Affichage du contenu du collapse si isCollapsed est vrai */}
      {isCollapsed && (
        <div className="collaps-description">
          {/* Contenu de la collapsible */}
          {children}
        </div>
      )}
    </div>
  );
};

// Export du composant Collapse pour pouvoir l'utiliser ailleurs dans l'application
export default Collapse;
