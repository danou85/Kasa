
import React from 'react';
import Banner from "../composant/banner";
import Card from "../composant/card";
import Footer from "../composant/footer";
import Logo from '../composant/logo';
import Navigation from '../composant/nav';





function Home () {
    return (
        <div>
            <logo/>
            <Navigation />
            <Banner title="chez vous , partout et ailleur" image= "banner-1"/>
            <Card/>
            <footer/>
        </div>
    )
}

export default Home;