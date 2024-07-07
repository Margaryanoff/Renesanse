import React from "react";
import { visionsCards } from ".";
import { NavLink } from "react-router-dom";

const OurVision = () => {
    return (
        <div className="ourVision_main_div">
            <div className="ourVisions_root">
                <h1>Our Vision</h1>
                <p>
                    <span>
                        <strong> Renaissance Reverie</strong> is built on the belief that
                        the art and ideas of the Renaissance hold timeless value and can
                        offer endless inspiration in today's world. We aim to create a
                        vibrant, engaging space where users can explore, share, and
                        celebrate the masterpieces and innovations that defined this
                        golden age.
                    </span>
                </p>
            </div>
            <div className="ourvision_parent">
                <div className="vision_cards_main">
                    {visionsCards.map((elm) => {
                        return (
                            <div
                                key={elm.id}
                                style={{
                                    background: `url(${elm.image})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                            >
                                <h2>{elm.title}</h2>
                                <p>{elm.body}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="join_path_vision">
                    <strong>
                        Join us at <span> Renaissance Reverie</span>, where the spirit of
                        the Renaissance lives on through a community dedicated to
                        exploring, appreciating, and innovating. Together, we can keep the
                        legacy of this remarkable era alive and thriving.
                    </strong>
                    <div>
                        <NavLink to={"/register"}>Register</NavLink>
                        <NavLink to={"/login"}>Login</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurVision;
