import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";

const Section = ({ cardsToRender, type }) => {
    return ( <
        div > {
            cardsToRender.length === 0 ? ( <
                CircularProgress / >
            ) : ( <
                div className = { styles.cardWrapper } >
                <
                div className = { styles.wrapper } > {
                    cardsToRender.map((ele, index) => ( <
                        Card key = { index }
                        data = { ele }
                        type = { type }
                        />
                    ))
                } <
                /div> <
                /div>
            )
        } <
        /div>
    );
};

export default Section;