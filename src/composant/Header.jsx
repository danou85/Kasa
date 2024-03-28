// Importe React depuis la bibliothèque React
import React from 'react';
// Importe le composant NavLink de 'react-router-dom' pour créer des liens de navigation
import { NavLink } from 'react-router-dom';
// Importe le fichier de style CSS pour le composant Navigation
import './Header.css';
import logo from './../assets/logo-kasa.png';

// Définit le composant fonctionnel Navigation
const Header = () => {
    // Rendu du composant Navigation
    return (
        <header>
            <img src={logo} alt="logo" className="logo"/>
            <nav>
                {/* Utilise le composant NavLink pour créer un lien vers la page d'accueil avec la classe CSS 'nav-link' */}
                <NavLink to='/' className='nav-link'>
                    {/* Affiche le lien "Accueil" comme un élément de liste (li) */}
                    Accueil
                </NavLink>

                {/* Utilise le composant NavLink pour créer un lien vers la page "À propos" avec la classe CSS 'nav-link' */}
                <NavLink to='/Apropos' className='nav-link'>
                    {/* Affiche le lien "À propos" comme un élément de liste (li) */}
                    A propos
                </NavLink>
            </nav>
        </header>
    );
};

// Exporte le composant Navigation pour pouvoir l'utiliser ailleurs dans l'application
export default Header;



