import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <h1>this is register</h1>
            <div className="container py-1">
                <div className="text-center">
                    {/* <img src={logo} alt="" className="w-25" /> */}
                </div>
                <div className="container w-100">
                    <div className="form-container mx-auto rounded-3">
                        <h3>Welcome Back!</h3>
                        <p>Login to your account using your preferred social network authentication</p>
                        <button className="btn btn-info form-control my-3 text-white">
                            <img src="https://i.ibb.co/93GM0Qf/34-345914-continue-with-google-white-g-logo-clipart-removebg-preview.png" className="me-2" width="25px" alt="" />
                            Login With Google</button>
                        <p>Or Login with your email address and the password</p>
                        {/* login form */}

                        <form>
                            <label for="">Your email</label>
                            <input required type="email" placeholder="Enter Your Email" className="form-control mb-4 mt-2 mx-auto" />
                            <label for="">Your password</label>
                            <input required type="password" placeholder="Enter Your Password" className="form-control mx-auto mb-4 mt-2" />
                            <input type="submit" value="Log in" className="mb-3 form-control bg-info text-light" />
                        </form>
                        <p>Don’t have an account? <Link to="/register" className="text-info">Create Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;