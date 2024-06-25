import React from "react";
import styles from "./Hero.module.css"; // Using CSS modules for better styling management
import headphoneImage from "../../assets/hero-image.png";

const Hero = () => {
    return ( <
        div className = { styles.hero } >
        <
        div className = { styles.textContainer } >
        <
        h3 > 100 Thousand Songs, ad - free < /h3> <
        h3 > Over thousands of podcast episodes < /h3> <
        /div> <
        div className = { styles.imageContainer } >
        <
        img src = { headphoneImage }
        width = { 212 }
        alt = "Headphones" / >
        <
        /div> <
        /div>
    );
};

export default Hero;