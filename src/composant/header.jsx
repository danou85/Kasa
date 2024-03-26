import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo/logo-kasa.png'
import './header.css'


function Header() {
    const title = 'Kasa'
    return (
        <header>
            <img src={logo} alt='Kasa' className='imj-logo' />
            <h1 className='lmj-title'></h1>
            <ul className='img-button'>
            <Link to="/Home" className='accueil'>Accueil</Link>
            <Link to="/Apropos" className='propos'> A propos</Link>
            </ul>
            
        </header>
        
    )
}

export default Header