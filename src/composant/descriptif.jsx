// Importe React et useState depuis la bibliothèque React
import React, { useState } from "react";

// Importe le fichier de style CSS pour le composant Forms
import "./descriptif.css";
import Collapse from "./collapse";

// Définit le composant fonctionnel Descrptif 
const Description = () => {
  // Utilisation de useState pour gérer l'état de chaque collapsible
  const [isCollapsible1Open, setCollapsible1Open] = useState(false);
  // Utilise le hook useEffect pour effectuer des actions après le rendu du composant.
  // Cela peut inclure des appels à des API, la gestion d'effets secondaires, ou la mise à jour de l'état en réponse à des changements.

  // Rendu du composant Forms
  return (
    <div>
    <div className="descriptif-collapse">
      <Collapse
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />

      <Collapse
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />

      <Collapse
        title="Service"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa.
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />

      <Collapse
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
            chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
            cela permet à nos équipes de vérifier que les standards sont bien respectés.
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </div>
    </div>
  );
};

// Exporte le composant Description pour pouvoir l'utiliser ailleurs dans l'application
export default Description;
