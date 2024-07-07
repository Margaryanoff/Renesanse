import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../Gallery/images/gallery18.jpg";
import img2 from "../../Gallery/images/gallery11.jpg";
import img3 from "../../Gallery/images/gallery1.png";
import img4 from "../../Gallery/images/gallery23.jpg";

const AboutUs = () => {
    return (
        <div className="aboutUs_main_div">
            <div className="aboutUs_title">
                <div className="background_aboutUs"></div>
                <div className="aboutUs_root">
                    <h1>About Us</h1>
                    <p>
                        Welcome to <span>Renaissance Reverie</span>, a unique social media
                        platform dedicated to the celebration and exploration of the
                        Renaissance period. Our platform is a vibrant community where art
                        lovers, history enthusiasts, and cultural aficionados come
                        together to delve into the masterpieces and innovations of this
                        remarkable era.
                    </p>
                </div>
            </div>
            <div className="unique">
                <strong>What Makes Us Unique</strong>
                <div className="uniqueCards">
                    <div>
                        <div>
                            <span>
                                <img src={img1} alt="" />
                            </span>
                            <h2>Expertly Curated Content</h2>
                            <p>
                                Our platform offers a wealth of expertly curated content,
                                including in-depth articles, interactive galleries, and
                                virtual exhibitions. Each piece is crafted to provide
                                valuable insights and foster a deeper appreciation of
                                Renaissance art and culture.
                            </p>
                            <NavLink>Register now</NavLink>
                        </div>
                    </div>
                    <div>
                        <div className="rightUnique">
                            <span>
                                <img src={img2} alt="" />
                            </span>
                            <h2>Engaging Community</h2>
                            <p>
                                {" "}
                                Renaissance Reverie is more than just a platform; it's a
                                thriving community. Our members include academics,
                                artists, students, and casual enthusiasts who share a
                                common love for the Renaissance. Engage in lively
                                discussions, share your insights, and connect with
                                like-minded individuals.
                            </p>
                            <NavLink>Register now</NavLink>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>
                                <img src={img3} alt="" />
                            </span>
                            <h2>Innovative Features</h2>
                            <p>
                                We leverage the latest technology to offer innovative
                                features such as virtual museum tours, live webinars with
                                experts, and interactive learning paths. Our platform is
                                designed to provide a rich, immersive experience that
                                brings the Renaissance to life.
                            </p>
                            <NavLink>Register now</NavLink>
                        </div>
                    </div>
                    <div>
                        <div className="rightUnique">
                            <span>
                                <img src={img4} alt="" />
                            </span>
                            <h2>Creative Showcase</h2>
                            <p>
                                We celebrate contemporary works inspired by the
                                Renaissance. Our creative showcase allows members to share
                                their own art, writing, and projects, fostering a culture
                                of creativity and collaboration.
                            </p>
                            <NavLink>Register now</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
