import React from "react";
import { NavLink } from "react-router-dom";
import ArrowRight from "../../../SVG/ArrowRight";

const AboutPaths = () => {
    return (
        <div className="about_paths">
            <NavLink to={"/about"}>
                About Us <ArrowRight />
            </NavLink>
            <NavLink to={"ourvision"}>
                Our Visison <ArrowRight />
            </NavLink>
            <NavLink to={"offerings"}>
                What we Offer <ArrowRight />
            </NavLink>
            <NavLink to={"join"}>
                Join Us <ArrowRight />
            </NavLink>
            <NavLink to={"/login"}>
                Log In <ArrowRight />
            </NavLink>
            <NavLink to={"/register"}>
                Register <ArrowRight />
            </NavLink>
        </div>
    );
};

export default AboutPaths;
