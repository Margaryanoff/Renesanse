import React, { useState } from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import { selectSingleUser } from "../../store/singleUser/singleUserSlice";
import logo from "../../images/icon6.png";
import BurgerMenu from "../../SVG/BurgerMenu";
import { NavLink } from "react-router-dom";
import ArrowRight from "../../SVG/ArrowRight";
import Remove from "../../SVG/Remove";
import { Field, Form, Formik } from "formik";
import {
    EPIvalidation,
    editPersonalInfromationInitialValues,
} from "../../schema/editInfoSchma";

const Profile = () => {
    const [modal, setModal] = useState(false);
    const [edit, setEdit] = useState(false);
    const { singleUser } = useSelector(selectSingleUser);
    return (
        <header className="profile_header_main">
        <div className="creation" style={{ zIndex: edit ? 0 : 11 }}></div>
            <div className="edit_info">
                <div className="edit_info_main_div">
                    <div className="edit_title">
                        <h2>Personal Info</h2>
                        <span onClick={() => setEdit(!edit)}>
                            <Remove />
                        </span>
                    </div>
                    <Formik
                        initialValues={editPersonalInfromationInitialValues}
                        validationSchema={EPIvalidation}
                        onSubmit={(values) => console.log(values)}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className="edit_names">
                                    <label>
                                        <p>First Name</p>
                                        <Field name="firstName" />
                                        {errors.firstName && touched.firstName ? (
                                            <h6>{errors.firstName}</h6>
                                        ) : null}
                                    </label>
                                    <label>
                                        <p>Last Name</p>
                                        <Field name="lastName" />
                                        {errors.lastName && touched.lastName ? (
                                            <h6>{errors.lastName}</h6>
                                        ) : null}
                                    </label>
                                </div>
                                <div className="nikcname_bio">
                                    <div className="nikcname_email">
                                        <label>
                                            <p>Nickame</p>
                                            <Field name="nickname" />
                                            {errors.nickname && touched.nickname ? (
                                                <h6>{errors.nickname}</h6>
                                            ) : null}
                                        </label>
                                        <label>
                                            <p>Email</p>
                                            <Field name="email" />
                                            {errors.email && touched.email ? (
                                                <h6>{errors.email}</h6>
                                            ) : null}
                                        </label>
                                    </div>
                                    <div className="bio_textarea">
                                        <label>
                                            <Field
                                                as="textarea"
                                                rows="7"
                                                cols="37"
                                                name="bio"
                                                placeholder="Bio"
                                            />
                                            {errors.bio && touched.bio ? (
                                                <h6>{errors.bio}</h6>
                                            ) : null}
                                        </label>
                                    </div>
                                </div>
                                <div className="password_field">
                                    <h3>Change Password</h3>
                                    <div className="passwords_manage">
                                        <div className="old_password_submit">
                                            <label>
                                                <p>Old Password</p>
                                                <Field name="oldPassword" />
                                                {errors.oldPassword &&
                                                touched.oldPassword ? (
                                                    <h6>{errors.oldPassword}</h6>
                                                ) : null}
                                            </label>
                                            <button type="submit">Save Changes</button>
                                        </div>
                                        <div className="new_password">
                                            <label>
                                                <p>New Password</p>
                                                <Field name="newPassword" />
                                                {errors.newPassword &&
                                                touched.newPassword ? (
                                                    <h6>{errors.newPassword}</h6>
                                                ) : null}
                                            </label>
                                            <label>
                                                <p>Confirm New Password</p>
                                                <Field name="newPasswordConfirm" />
                                                {errors.newPasswordConfirm &&
                                                touched.newPasswordConfirm ? (
                                                    <h6>{errors.newPasswordConfirm}</h6>
                                                ) : null}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className="container">
                <div className="user_main_div">
                    <div className="pfp_image">
                        <div>
                            <img src={logo} alt="/" />
                            <h1>@{singleUser[0]?.nickname}</h1>
                        </div>
                        <div className="burger_menu">
                            <span onClick={() => setModal(!modal)}>
                                <BurgerMenu />
                            </span>
                            <ul className={modal ? "active_modal" : ""}>
                                <li>
                                    <NavLink to={"/wishlist"}>
                                        <p>Wishlist</p>
                                        <span>({singleUser[0]?.whishlist?.length})</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/favourites"}>
                                        <p>Favorites</p>
                                        <span>({singleUser[0]?.shopping?.length})</span>
                                    </NavLink>
                                </li>
                                <li
                                    onClick={() => {
                                        setEdit(!edit);
                                    }}
                                >
                                    <NavLink>Edit info</NavLink>
                                </li>
                                <li>
                                    <NavLink>Delete Account</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h4> -- {singleUser[0]?.bio} --</h4>
                    <div className="personal">
                        <div>
                            <h2>Personal Details</h2>
                            <p>First Name : {singleUser[0]?.firstName}</p>
                            <p>Last Name : {singleUser[0]?.lastName}</p>
                            <p>Age : {singleUser[0]?.age}</p>
                            <p>Mail : {singleUser[0]?.email}</p>
                            <h4>
                                <span>Interests : </span>
                                {singleUser[0]?.interests.map((elm) => (
                                    <span>{elm}</span>
                                ))}
                            </h4>
                        </div>
                        <div className="personal_paths">
                            <NavLink to={"/favourites"}>
                                <span>Go To Favorites</span>
                                <ArrowRight />
                            </NavLink>
                            <NavLink to={"/wishlist"}>
                                <span>Go To Wishlist</span>
                                <ArrowRight />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Profile;
