import React, { useState } from "react";
import "./Explore.css";
import { artists } from "./assets";
import ExploreNavigation from "./assets/ExpNavigation";
import ExploreWrapper from "./assets/ExploreWrapper";
import ExploreQuote from "./assets/ExploreQuote";

const Explore = () => {
    const [artist, setArtist] = useState(false);
    const [count, setCount] = useState(0);

    const handleSlide = (countRestriction, countLimitation) => {
        setArtist(!artist);
        setTimeout(() => {
            if (count === countRestriction) {
                setCount(countLimitation);
            } else {
                setCount(countLimitation === 2 ? count - 1 : count + 1);
            }
        }, 2000);
    };
    return (
        <header className="explore_header">
            <div className="explore_main_div">
                <ExploreNavigation
                    artists={artists}
                    count={count}
                    handleSlide={handleSlide}
                />
                <div className="explore_wrapper">
                    <ExploreWrapper artists={artists} count={count} artist={artist} />
                </div>
                <div className="explore_quote">
                    <ExploreQuote count={count} artist={artist} artists={artists} />
                </div>
            </div>
        </header>
    );
};

export default Explore;
