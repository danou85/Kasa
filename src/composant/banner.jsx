import React from "react";
import './banner.css';

const Banner = (props) => {
    return(
        <div className={`banner ${props.image}`}>
          <p>{props.title}</p>  
        </div>
    )
}




export default Banner;
