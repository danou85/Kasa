import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

// Composant de collapse réutilisable
const Collapse = ({ title, content }) => {
  // Utilisation du hook useState pour gérer l'état du collapsible
  const [isCollapsible1Open, setCollapsible1Open] = useState(false);

  // Fonction pour rendre l'icône chevron basée sur l'état actuel
  const renderChevron = (isOpen) => {
    return (
      <FontAwesomeIcon
        icon={isOpen ? faChevronDown : faChevronUp}
        className={`chevron-icon ${isOpen ? "rotate" : ""}`}
      />
    );
  };

  // Rendu du composant Collapse
  return (
    <div className="collapse-content">
       {/* Bouton pour activer/désactiver le collapsible  */}
      <button
        className="collapse"
        onClick={() => setCollapsible1Open(!isCollapsible1Open)}
      >
        {title}
        {/* Appel à la fonction pour rendre l'icône chevron */}
        {renderChevron(isCollapsible1Open)}
      </button>
      {/* Affichage du contenu si le collapsible est ouvert  */}
      {isCollapsible1Open && (
        <div className="collapse-description">
          // Contenu de la collapsible //
          {content}
        </div>
      )}
    </div>
  );
};

// Export du composant Collapse pour une utilisation dans d'autres composants
export default Collapse;
