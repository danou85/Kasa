import React from 'react';
import Banner from '../composant/banner';
import Footer from '../composant/footer';
import Collapse from '../composant/collapse'
import Forms from '../composant/descritif';

const Apropos = () => {
    return(
        <div>
            <Banner image="banner-2"/>
            <Collapse/>
            <Forms/>
        </div>
    )
}

export default Apropos;