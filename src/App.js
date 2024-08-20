import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import styles from './App.module.css';
import { fetchTopAlbums, fetchNewAlbums } from './api/api';
import Section from './Components/Section/Section.jsx';

function App() {
    const [topAlbumSongs, setTopAlbumSongs] = useState([]);
    const [newAlbumSongs, setNewAlbumSongs] = useState([]);

    const generateTopAlbumSongs = async() => {
        try {
            const topAlbumSongs = await fetchTopAlbums();
            setTopAlbumSongs(topAlbumSongs);
        } catch (error) {
            console.log(error);
        }
    };

    const generateNewAlbumSongs = async() => {
        try {
            const newAlbumSongs = await fetchNewAlbums();
            setNewAlbumSongs(newAlbumSongs);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        generateTopAlbumSongs();
        generateNewAlbumSongs();
    }, []);

    return ( <
        >
        <
        Navbar / >
        <
        Hero / >
        <
        div className = { styles.sectionWrapper } >
        <
        Section type = 'album'
        title = 'Top Albums'
        data = { topAlbumSongs }
        /> <
        Section type = 'album'
        title = 'New Albums'
        data = { newAlbumSongs }
        /> <
        /div> <
        />
    );
}

export default App;