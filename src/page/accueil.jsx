
import React from 'react';
import Banner from "../composant/banner";
import Card from "../composant/card";






function Home () {
    return (
        <div className='home'>
            <Banner title="Chez vous , partout et ailleurs" image= "banner-1"/>
            <Card/>
        </div>
    )
}

export default Home;