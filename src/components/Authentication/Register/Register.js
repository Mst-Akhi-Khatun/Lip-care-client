import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-2.png'

const Register = () => {
    return (
        <div className="login-form">
            <div className="container py-1">
                <div className="text-center">
                    <img src={logo} alt="" className="w-25" />
                </div>
                <div className="container w-100">
                    <div className="form-container mx-auto rounded-3 px-5 py-5">
                        <h3>Welcome Back!</h3>
                        <p>Login to your account using your preferred social network authentication</p>
                        {/* login form */}

                        <form>
                            <input required type="text" placeholder="Enter Your Name" className="form-control mb-4 mt-2 mx-auto" />
                            <input required type="email" placeholder="Enter Your Email" className="form-control mb-4 mt-2 mx-auto" />
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