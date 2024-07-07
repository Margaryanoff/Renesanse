import { useSelector } from "react-redux";
import "./UserPage.css";
import { selectSingleUser } from "../store/singleUser/singleUserSlice";
import WishList from "../SVG/WishList";
import ShoppingCart from "../SVG/ShoppingCart";
import img from "../images/icon6.png";
import { NavLink } from "react-router-dom";

const UserPage = () => {
    const { singleUser } = useSelector(selectSingleUser);
    console.log(singleUser[0]);
    return (
        <main className="userPage_main">
            <section className="userPage_user_section">
                <div className="userPage_userInfo_root">
                    <div className="name_nickname">
                        <img src={img} alt="" />
                        <NavLink to={"profile"}>
                            <h1>@{singleUser[0]?.nickname}</h1>
                        </NavLink>
                    </div>
                    <div className="wishlist_favs">
                        <NavLink to={"wishlist"}>
                            <strong>{singleUser[0]?.whishlist?.length}</strong>
                            <p>Wishlist</p>
                            <WishList />
                        </NavLink>
                        <NavLink to={"favourites"}>
                            <strong>{singleUser[0]?.shopping?.length}</strong>
                            <p>Favourites</p>
                            <ShoppingCart />
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className="userPage_content"></section>
            <section className="userPage_ads_more"></section>
        </main>
    );
};

export default UserPage;
