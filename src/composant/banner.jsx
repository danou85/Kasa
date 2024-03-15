import React from "react";
import './banner.css';

const Banner = (props) => {
    return(
        <div className={`banner ${props.image}`}>
            {props.title}
        </div>
    )
}

export default Banner;
