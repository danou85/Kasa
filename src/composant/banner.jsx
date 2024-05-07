import React from "react"; // Importation de React, nécessaire pour utiliser JSX
import './banner.css'; // Importation du fichier CSS pour les styles du composant

const Banner = (props) => { // Définition du composant Banner avec les props en argument
    return(
        <div className={`banner ${props.image}`}> {/* Utilisation de template literals pour définir la classe CSS en fonction de la prop 'image' */}
          <p>{props.title}</p> {/* Affichage du titre passé via la prop 'title' */}
        </div>
    )
}

export default Banner; // Exportation du composant Banner pour pouvoir l'utiliser dans d'autres fichiers
