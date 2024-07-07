import React from "react";
import { NavLink } from "react-router-dom";

const ExploreWrapper = ({ artists, count, artist }) => {
    return (
        <div
            className={"explore_root"}
            style={{
                animationName: `${artist ? `artist1` : ""}`,
            }}
        >
            <h3>{artists[count]?.year}</h3>
            <h1>{artists[count]?.name}</h1>
            <img src={artists[count]?.image} alt="" />
            <p>{artists[count]?.proffesion}</p>
            <NavLink to="/history">Explore</NavLink>
        </div>
    );
};

export default ExploreWrapper;
