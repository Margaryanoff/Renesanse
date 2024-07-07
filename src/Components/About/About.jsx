import React from "react";
import "./About.css";
import { Outlet } from "react-router-dom";
import AboutPaths from "./assets/AboutPaths";

const About = () => {
    return (
        <main className="about_main">
            <AboutPaths />
            <div className="container">
                <Outlet />
            </div>
        </main>
    );
};

export default About;
