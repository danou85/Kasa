
import React from 'react';
import logo from '../logo/logo-kasa.png'
import Banner from "../composant/banner";
import Card from "../composant/card";
import Footer from "../composant/footer";





function Home () {
    return (
        <div>
            <header/>
            <Banner title="chez vous , partout et ailleur" image= "banner-1"/>
            <Card/>
            <footer/>
        </div>
    )
}

export default Home;