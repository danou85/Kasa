// Importe React depuis la bibliothèque React
import React from 'react';
// Importe le composant NavLink de 'react-router-dom' pour créer des liens de navigation
import { NavLink } from 'react-router-dom';
// Importe le fichier de style CSS pour le composant Navigation
import './Header.css'; // Import du fichier CSS pour les styles du header
import logo from './../assets/logo-kasa.png'; // Import de l'image du logo depuis le dossier assets

// Définit le composant fonctionnel Header
const Header = () => {
    // Rendu du composant Header
    return (
        <header> {/* Élément header pour l'en-tête */}
           <h1>
            <img src={logo} alt="logo" className="logo"/>
            </h1> {/* Affichage du logo avec la classe 'logo' */}
            <nav> {/* Élément nav pour la navigation */}
                {/* Utilise le composant NavLink pour créer un lien vers la page d'accueil avec la classe CSS 'nav-link' */}
                <NavLink to='/' className='nav-link'>
                    Accueil {/* Texte du lien vers la page d'accueil */}
                </NavLink>

                {/* Utilise le composant NavLink pour créer un lien vers la page "À propos" avec la classe CSS 'nav-link' */}
                <NavLink to='/Apropos' className='nav-link'>
                    À propos {/* Texte du lien vers la page "À propos" */}
                </NavLink>
            </nav>
        </header>
    );
};

// Exporte le composant Header pour pouvoir l'utiliser ailleurs dans l'application
export default Header;
