import "./Login.css";
import img from "../../images/login.jpg";
import { Field, Form, Formik } from "formik";
import { loginSchema, loginValues } from "../../schema/loginSchema";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPostSingleUser } from "../../store/singleUser/API";

const Login = ({ users }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <header className="login_header">
            <div className="container">
                <div className="login_main">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="login_form">
                        <h1>Log In</h1>
                        <Formik
                            initialValues={loginValues}
                            validationSchema={loginSchema}
                            onSubmit={(values) => {
                                const validUser = users.find(
                                    (user) =>
                                        user.nickname === values.nickname &&
                                        user.password === values.password
                                );
                                if (validUser) {
                                    dispatch(fetchPostSingleUser(validUser));
                                    navigate("/");
                                } else {
                                    return;
                                }
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <label>
                                        <p>Nickname</p>
                                        <Field name="nickname" />
                                        {errors.nickname && touched.nickname ? (
                                            <div>{errors.nickname}</div>
                                        ) : null}
                                    </label>
                                    <label>
                                        <p>Password</p>
                                        <Field name="password" />
                                        {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}
                                    </label>
                                    <div className="submitButton">
                                        <p>
                                            Don't have an Acoount ?{" "}
                                            <NavLink to={"/register"}>Register</NavLink>
                                        </p>
                                        <button type="submit">Log In</button>
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

export default Login;
