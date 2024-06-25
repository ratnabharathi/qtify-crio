import React from "react";
import styles from './Navbar.module.css';
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Search from "../Search/Search";

export default function Navbar() {
    return ( <nav className = { styles.navbar } >
        <div className = { styles.logoDiv } >
        <Logo / >
        </div> <Search placeholder = "Search an album of your choice" / >
<Button text = "Give Feedback" / >
        </nav>
    );
}