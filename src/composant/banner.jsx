import React from "react";
import image from '../image/chezvous.png'
import './banner.css'

function Banner() {
    const title = 'Kasa'
    return (
        <div className='lmj-banner'>
            <img src={image} alt='Kasa' className='lmj-chez' />
        </div>
        
    )
}

export default Banner