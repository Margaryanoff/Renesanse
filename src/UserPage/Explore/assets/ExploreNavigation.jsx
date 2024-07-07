import React from "react";
import ArrowRight from "../../../SVG/ArrowRight";
import ArrowLeft from "../../../SVG/ArrowLeft";

const ExploreNavigation = ({ artists, count, handleSlide }) => {
    return (
        <div className="explore_navigation">
            <span onClick={() => handleSlide(2, 0)}>
                <ArrowRight />
            </span>
            <p>
                {artists[count]?.id} of {artists.length}
            </p>
            <span onClick={() => handleSlide(0, 2)}>
                <ArrowLeft />
            </span>
        </div>
    );
};

export default ExploreNavigation;
