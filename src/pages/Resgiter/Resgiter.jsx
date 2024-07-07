import "./Resgiter.css";
import img from "../../images/register.jpg";
import { Formik, Form, Field } from "formik";
import { registerSchema, reigsterValues } from "../../schema/resgiterSchema";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPostNewUser } from "../../store/users/API";
import { useState } from "react";

const Resgiter = ({ users }) => {
    const [message, setMessage] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <header className="register_header">
            <div className="container">
                <div className="register_main">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="form">
                        <h1>
                            {message
                                ? "This nickname is taken, choose another one please !"
                                : "Register"}
                        </h1>
                        <Formik
                            initialValues={reigsterValues}
                            validationSchema={registerSchema}
                            onSubmit={(values) => {
                                const repeatedNickanme = users.find(
                                    (user) => user.nickname === values.nickname
                                );
                                if (repeatedNickanme) {
                                    setMessage(true);
                                    return;
                                } else {
                                    dispatch(fetchPostNewUser(values));
                                    navigate("/login");
                                }
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className="register_form_main">
                                        <span>
                                            <Field
                                                name="firstName"
                                                placeholder={"First Name"}
                                            />
                                            {errors.firstName && touched.firstName ? (
                                                <div className="error_message">
                                                    {errors.firstName}
                                                </div>
                                            ) : null}
                                        </span>
                                        <span>
                                            <Field
                                                name="lastName"
                                                placeholder={"Last Name"}
                                            />
                                            {errors.lastName && touched.lastName ? (
                                                <div className="error_message">
                                                    {errors.lastName}
                                                </div>
                                            ) : null}
                                        </span>

                                        <span>
                                            <Field
                                                name="email"
                                                type="email"
                                                placeholder="Email"
                                            />
                                            {errors.email && touched.email ? (
                                                <div className="error_message">
                                                    {errors.email}
                                                </div>
                                            ) : null}
                                        </span>
                                        <span>
                                            <Field name="age" placeholder="Age" />
                                            {errors.age && touched.age ? (
                                                <div className="error_message">
                                                    {errors.age}
                                                </div>
                                            ) : null}
                                        </span>
                                        <span>
                                            <Field
                                                name="nickname"
                                                placeholder="Nickname"
                                            />
                                            {errors.nickname && touched.nickname ? (
                                                <div className="error_message">
                                                    {errors.nickname}
                                                </div>
                                            ) : null}
                                        </span>
                                        <span>
                                            <Field
                                                name="password"
                                                placeholder="Password"
                                            />
                                            {errors.password && touched.password ? (
                                                <div className="error_message">
                                                    {errors.password}
                                                </div>
                                            ) : null}
                                        </span>

                                        <div className="gender_birthday">
                                            <div role="group" className="radios">
                                                <label className="label_radio">
                                                    <Field
                                                        type="radio"
                                                        name="gender"
                                                        value="Male"
                                                        className="radio"
                                                    />
                                                    <p>Male</p>
                                                </label>
                                                <label className="label_radio">
                                                    <Field
                                                        type="radio"
                                                        name="gender"
                                                        value="Fmale"
                                                        className="radio"
                                                    />
                                                    <p>Female</p>
                                                </label>
                                            </div>
                                            <div className="birthdayDiv">
                                                <label>When is Your Birthay ?</label>
                                                <Field type="date" name="birthdayDate" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submitButton">
                                        <p>
                                            Already have an Acoount ?{" "}
                                            <NavLink to={"/login"}>Log In</NavLink>
                                        </p>
                                        <button type="submit">Register</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Resgiter;
