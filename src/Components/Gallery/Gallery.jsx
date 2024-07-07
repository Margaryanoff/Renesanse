import { NavLink } from "react-router-dom";
import { gallery } from ".";
import "./Gallery.css";

const Gallery = () => {
    return (
        <main className="gallery_main">
            <div className="container">
                <div className="gallery_wrapper">
                    {gallery.map((elm) => {
                        return (
                            <div key={elm.id} className="box">
                                <img src={elm.image} alt="" />
                                <div>
                                    <div>
                                        <h2>{elm.paintTitle}</h2>
                                        <p>{elm.body}</p>
                                    </div>
                                    <strong>By : {elm.painter}</strong>
                                    <p className="paths_gallery">
                                        <NavLink to={"/register"}>Register</NavLink> or{" "}
                                        <NavLink to={"/login"}>Login</NavLink> to see more
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default Gallery;
