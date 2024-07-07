import React from "react";
import logo from "../../../images/logo.png";
import { NavLink } from "react-router-dom";

const NavigationClient = () => {
    return (
        <nav className="navigation_before_register">
            <div className="container">
                <div className="nav_div_main">
                    <NavLink to={"/"}>
                        <img src={logo} alt="" />
                    </NavLink>
                    <div>
                        <NavLink to={"about"}>About</NavLink>
                        <NavLink to={"contacts"}>Contacts</NavLink>
                        <NavLink to={"gallery"}>Gallery</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationClient;
