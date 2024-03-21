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
            <Link to="/" className='img-button'>Accueil</Link>
            <Link to="/" className='img-button2'>A propos</Link>
        </header>
        
    )
}

export default Header