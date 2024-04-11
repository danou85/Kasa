import React, { useState } from 'react';
import './descriptionequipement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Collapse from './collapse'; // Importez le composant Collapse depuis son emplacement correct

const DescriptionEquipement = ({ description, equipments }) => {
  const [descriptionCollapsed, setDescriptionCollapsed] = useState(true);
  const [equipementCollapsed, setEquipementCollapsed] = useState(true);

  const toggleDescriptionCollapse = () => {
    setDescriptionCollapsed(!descriptionCollapsed);
  };

  const toggleEquipementCollapse = () => {
    setEquipementCollapsed(!equipementCollapsed);
  };

  return (
    <div className='DescriptionEquipement '>
      <Collapse
        title="Description"
        content={description}
        isCollapsed={descriptionCollapsed}
        toggleCollapse={toggleDescriptionCollapse}
      />
      <Collapse
        title="Équipements"
        content={
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        }
        isCollapsed={equipementCollapsed}
        toggleCollapse={toggleEquipementCollapse}
      />
    </div>
  );
};

export default DescriptionEquipement;
