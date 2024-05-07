import React, { useState } from 'react'; // Import de React et useState pour gérer l'état local
import './descriptionequipement.css'; // Import du fichier CSS pour les styles du composant
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import des icônes FontAwesome
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Import des icônes de flèches haut et bas
import Collapse from './collapse'; // Import du composant Collapse depuis son emplacement correct

const DescriptionEquipement = ({ description, equipments }) => {
  const [descriptionCollapsed, setDescriptionCollapsed] = useState(true); // État local pour suivre l'état de la description (collapsed or expanded)
  const [equipementCollapsed, setEquipementCollapsed] = useState(true); // État local pour suivre l'état des équipements (collapsed or expanded)

  const toggleDescriptionCollapse = () => { // Fonction pour basculer l'état de la description
    setDescriptionCollapsed(!descriptionCollapsed);
  };

  const toggleEquipementCollapse = () => { // Fonction pour basculer l'état des équipements
    setEquipementCollapsed(!equipementCollapsed);
  };

  return (
    <div className='equipement '>
      {/* Composant Collapse pour la description */}
      <Collapse className='description'
        title="Description" // Titre de la section
        content={description} // Contenu de la section
        isCollapsed={descriptionCollapsed} // État de la section (collapsed or expanded)
        toggleCollapse={toggleDescriptionCollapse} // Fonction de bascule pour la section
      />
      {/* Composant Collapse pour les équipements */}
      <Collapse
        title="Équipements" // Titre de la section
        content={ // Contenu de la section, une liste d'équipements
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        }
        isCollapsed={equipementCollapsed} // État de la section (collapsed or expanded)
        toggleCollapse={toggleEquipementCollapse} // Fonction de bascule pour la section
      />
    </div>
  );
};

export default DescriptionEquipement; // Export du composant DescriptionEquipement
