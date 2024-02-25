import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo/logo-kasa.png'


function Header() {
    const title = 'Kasa'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='Kasa' className='lmj-logo' />
            <h1 className='lmj-title'></h1>
            <Link to="/" className='img-button'>Accueil</Link>
            <Link to="/" className='img-button2'>A propos</Link>
        </div>
        
    )
}

export default Header