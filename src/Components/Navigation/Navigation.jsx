import "./Navigation.css";

import { useSelector } from "react-redux";
import { selectSingleUser } from "../../store/singleUser/singleUserSlice";
import NavigationClient from "./assets/NavigationClient";
import NavigationUser from "./assets/NavigationUser";
const Navigation = () => {
    const { singleUser } = useSelector(selectSingleUser);
    return <>{singleUser[0]?.id ? <NavigationUser /> : <NavigationClient />}</>;
};
export default Navigation;
