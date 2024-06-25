import React from "react";
import "./Hero.module.css";
import headphoneImage from "../../assets/hero-image.png";

const Hero = () => {
    return ( <
        div className = "hero" >
        <
        div className = "hero-left" >
        <
        h3 > 100 Thousand Songs, ad - free < /h3> <
        h3 > Over thousands of podcast episodes < /h3> <
        /div>  <
        div className = "hero-right" >
        <
        img src = { headphoneImage }
        width = { 212 }
        alt = "Headphones" / >
        <
        /div> </div >
    );
};

export default Hero;