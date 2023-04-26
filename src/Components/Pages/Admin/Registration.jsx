import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    let data = useForm();
    let move = useNavigate();

    const SignIn = async (data) => {
        await axios.post(`${process.env.REACT_APP_BASE_URL}register`, data);
        move("/login")
        console.log(data);
    }

    return (
        <React.Fragment>
            <section className="vh-100 " style={{ margin: "80px 0 210px 0" }}>
                <div className="container-fluid h-custom">

                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <h1 style={{ textAlign: "center", color: "#fec913" }}>Register</h1>

                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid"
                                alt="Sample image"
                            />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-5">
                            <form onSubmit={data.handleSubmit(SignIn)}>
                                {/* Email input */}
                                <div className="form-outline mb-2">
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Your Name"
                                        {...data.register("name", { required: true })}
                                    />
                                    {data.formState.errors.name && data.formState.errors.name.type == 'required' && <div className="error"> Please Your Name</div>}                                    <label className="form-label text-warning" htmlFor="form3Example3">
                                        Name
                                    </label>
                                </div>
                                {/* Email Input */}

                                <div className="form-outline mb-2">
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
                                    {data.formState.errors.email && data.formState.errors.email.type == 'required' && <div className="error"> Please Your Email</div>}
                                    <label className="form-label text-warning" htmlFor="email">
                                        Email address
                                    </label>
                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-2">
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        {...data.register('password', { required: true, minLength: 8 })}
                                    />
                                    {data.formState.errors.password && data.formState.errors.password.type == 'required' && <div className="error"> Please enter your password</div>}
                                    {data.formState.errors.password && data.formState.errors.password.type == 'minLength' && <div className="error"> Please Enter 8 character</div>}

                                    <label className="form-label text-warning" htmlFor="password">
                                        Password
                                    </label>
                                </div>
                                {/* confirm password */}

                                <div className="form-outline mb-2">
                                    <input
                                        type="password"
                                        id="confirm_password"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Confirm  password"
                                        {...data.register('confirm_password', { required: true, minLength: 8 })}
                                    />
                                    {data.formState.errors.confirm_password && data.formState.errors.confirm_password.type == 'required' && <div className="error"> Please enter your confirm Password</div>}
                                    {data.formState.errors.confirm_password && data.formState.errors.confirm_password.type == 'minLength' && <div className="error"> Please Enter 8 character</div>}

                                    <label className="form-label text-warning" htmlFor="password">
                                        Confirm  Password
                                    </label>
                                </div>



                                <div className="text-center text-lg-start mt-2 pt-2 ">
                                    <button
                                        type="submit"
                                        className="btn btn-warning btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", color: "#fefeff" }}>
                                        Register
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Do you have account?{" "}
                                        <Link to="/login" className="link-warning">
                                            login
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

export default Register