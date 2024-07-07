import "./Home.css";
import img from "../../images/renesanse.jpg";
import { NavLink } from "react-router-dom";
import img2 from "../../images/davinci.jpg";
const Home = () => {
    return (
        <header
            className="home_header"
            style={{
                background: `url(${img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="container">
                <div className="home_main_div">
                    <div className="home_about">
                        <h1>Renaissance</h1>
                        <strong>
                            Welcome to Renesanse, where the past and present merge to
                            create a unique social experience. Inspired by the grandeur
                            and creativity of the Renaissance, our platform is a place for
                            innovation, connection, and expression.
                        </strong>
                        <div>
                            <NavLink to={"login"}>Login</NavLink>
                            <NavLink to={"register"}>Register</NavLink>
                        </div>
                    </div>
                    <div className="gallery_port">
                        <h2>Canvas of the day</h2>
                        <img src={img2} alt="" />
                        <h4>By Leonardo Da Vinci</h4>
                        <p>
                            Ginevera dè Benci: It is one of Leonardo's earliest works,
                            finished when he was in his early 20s, and shows some of the
                            unconventional methods he would use throughout his career.
                        </p>
                        <NavLink to={"gallery"}>Visit Gallery</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Home;
