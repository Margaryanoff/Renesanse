import React from "react";
import logo from "../../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleUser } from "../../../store/singleUser/singleUserSlice";
import { fetchDeleteSingleUser } from "../../../store/singleUser/API";
import { NavLink, useNavigate } from "react-router-dom";

const NavigationUser = () => {
    const { singleUser } = useSelector(selectSingleUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <nav className="user_navigation">
            <div className="div_logo_username_nav">
                <NavLink to={"/"}>
                    <img src={logo} alt="/" />
                </NavLink>
                <NavLink to={"profile"}>
                    <h1>@{singleUser[0]?.nickname}</h1>
                </NavLink>
            </div>
            <ul>
                <li>
                    <NavLink to={"profile"}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to={"history"}>History</NavLink>
                </li>
                <li>
                    <NavLink to={"explore"}>Explore</NavLink>
                </li>
                <li>
                    <NavLink to={"marketplace"}>Marketplace</NavLink>
                </li>
            </ul>
            <div className="wishlist_favorites">
                <NavLink to={"wishlist"}>WishList</NavLink>
                <NavLink to={"favourites"}>Favorites</NavLink>
                <button
                    onClick={() => {
                        dispatch(fetchDeleteSingleUser(singleUser[0]));
                        navigate("/");
                    }}
                >
                    <a href="#">Log Out</a>
                </button>
            </div>
        </nav>
    );
};

export default NavigationUser;
