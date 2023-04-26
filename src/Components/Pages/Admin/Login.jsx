import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    let  data  = useForm();
    let move = useNavigate();
    const sigOut = async (data) => {
        let resp = await axios.post(`${process.env.REACT_APP_BASE_URL}login`, data);
        localStorage.setItem('token', resp.data.data?.token);
        console.log(resp.data.data?.token);
        move("/dashboard");
    }
    return (
        <React.Fragment>
            <section className="vh-100 " style={{ margin: "100px" }}>
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <h1 style={{ textAlign: "center", color: "#fec913" }}>Login</h1>
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid"
                                alt="Sample image"
                            />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-5">
                            <form onSubmit={data.handleSubmit(sigOut)}>
                                {/* Email Input */}
                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control form-control-lg"
                                        placeholder="Enter a valid email address"
                                        {...data.register('email', {
                                            required: true, validate: ((data) => {
                                         if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(data)) {
                                                    return true
                                                } else {
                                                    return false;
                                                }
                                            })
                                        })}
                                    />
                                    <label className="form-label" htmlFor="email">
                                        Email address
                                    </label>
                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-3">
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        {...data.register('password', { required: true, minLength: 8 })}
                                    />
                                    {data.formState.errors.password && data.formState.errors.password.type == 'required' && <div className="error"> Please enter your password</div>}
                                    {data.formState.errors.password && data.formState.errors.password.type == 'minLength' && <div className="error"> Please Enter 8 character</div>}

                                    <label className="form-label" htmlFor="password">
                                        Password
                                    </label>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    {/* Checkbox */}
                                    <div className="form-check mb-0">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            defaultValue=""
                                            id="form2Example3"
                                        />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to="" className="text-body">
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-warning btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", color: "#fefeff" }}>
                                        Login
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Don't have an account?
                                        <Link to="/register" className="link-warning">
                                            Register
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </React.Fragment >
    )
}

export default Login