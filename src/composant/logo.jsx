import React from "react";
import logo from '../logo/logo-kasa.png'
import './logo.css'

const Logo = () => {
    const redirectToHome = () =>{
        window.location.href = '/';
    }

    return(
        <div className="logo" onClick={redirectToHome}>
        <img src= '/logo/logo-kasa.png'/>
        </div>
    )
}

export default Logo;