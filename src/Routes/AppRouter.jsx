import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Contacts from "../Components/Contacts/Contacts";
import Gallery from "../Components/Gallery/Gallery";
import Resgiter from "../pages/Resgiter/Resgiter";
import Login from "../pages/Login/Login";
import AboutUs from "../Components/About/assets/AboutUs";
import OurVision from "../Components/About/assets/OurVision";
import Offerings from "../Components/About/assets/Offerings";
import JoinUs from "../Components/About/assets/JoinUs";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../store/users/usersSlice";
import { useEffect } from "react";
import { fetchGetAllUsers } from "../store/users/API";
import UserPage from "../UserPage/UserPage";
import { selectSingleUser } from "../store/singleUser/singleUserSlice";
import { fetchGetSingleUser } from "../store/singleUser/API";
import Profile from "../UserPage/Profile/Profile";
import Explore from "../UserPage/Explore/Explore";
import Marketplace from "../UserPage/Marketplace/Marketplace";
import Wishlist from "../UserPage/Wishlist/Wishlist";
import Favourites from "../UserPage/Favourites/Favourites";
import UserPageOutlet from "../UserPage/UserPageOutlet";
import History from "../UserPage/History/History";

const AppRouter = () => {
    const users = useSelector(selectUsers);
    const { singleUser } = useSelector(selectSingleUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetAllUsers());
        dispatch(fetchGetSingleUser());
    }, []);
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {singleUser[0]?.id ? (
                    <>
                        <Route path="/" element={<UserPageOutlet />}>
                            <Route index element={<UserPage />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="history" element={<History />} />
                            <Route path="explore" element={<Explore />} />
                            <Route path="marketplace" element={<Marketplace />} />
                            <Route path="wishlist" element={<Wishlist />} />
                            <Route path="favourites" element={<Favourites />} />
                        </Route>
                    </>
                ) : (
                    <>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />}>
                            <Route index element={<AboutUs />} />
                            <Route path="ourvision" element={<OurVision />} />
                            <Route path="offerings" element={<Offerings />} />
                            <Route path="join" element={<JoinUs />} />
                        </Route>
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="gallery" element={<Gallery />} />
                        <Route
                            path="register"
                            element={<Resgiter users={users.users} />}
                        />
                        <Route path="login" element={<Login users={users.users} />} />
                    </>
                )}
            </Route>
        </Routes>
    );
};

export default AppRouter;
