import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography, Button } from "@mui/material";
import Card from '../Card/Card';

const Section = () => {
    const [albums, setAlbums] = useState([]);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        // Fetching top albums data
        axios
            .get("https://qtify-backend-labs.crio.do/albums/top")
            .then((response) => setAlbums(response.data))
            .catch((error) => console.log(error));
    }, []);

    // Toggle collapse state
    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return ( <
        div > { /* Title and Collapse Button */ } <
        div style = {
            { display: "flex", justifyContent: "space-between", alignItems: "center" }
        } >
        <
        Typography variant = "h4" > Top Albums < /Typography> <
        Button variant = "contained"
        onClick = { toggleCollapse } > { collapsed ? "Expand" : "Collapse" } <
        /Button> < /
        div >

        { /* Grid Layout for Album Cards */ } {
            !collapsed && ( <
                Grid container spacing = { 2 }
                style = {
                    { marginTop: "20px" }
                } > {
                    albums.map((album) => ( <
                        Grid item xs = { 12 }
                        sm = { 6 }
                        md = { 4 }
                        lg = { 3 }
                        key = { album.id } >
                        <
                        Card data = { album }
                        type = "album" / >
                        <
                        /Grid>
                    ))
                } <
                /Grid>
            )
        } <
        /div>
    );
};

export default Section;