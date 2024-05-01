
import React from 'react';
import Banner from "../composant/banner";
import Card from "../composant/card";
import Navigation from '../composant/Header';





function Home () {
    return (
        <div className='home'>
            <Banner title="chez vous , partout et ailleur" image= "banner-1"/>
            <Card/>
        </div>
    )
}

export default Home;