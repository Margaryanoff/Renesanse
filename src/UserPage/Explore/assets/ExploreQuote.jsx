import React from "react";
import Quote from "../../../SVG/Quote";

const ExploreQuote = ({ count, artist, artists }) => {
    return (
        <>
            <span>
                <Quote />
            </span>
            <p
                style={{
                    animationName: artist ? `quote1` : "",
                }}
            >
                {artists[count]?.quote}
            </p>
        </>
    );
};

export default ExploreQuote;
