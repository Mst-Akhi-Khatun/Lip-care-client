import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../images/logo-2.png'
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { registerUser } = useAuth();
    const history = useHistory();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        registerUser(data?.email, data?.password, data?.username, history);
    };
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

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" className="form-control" {...register("username", { required: true })} placeholder="Enter Your Name" />

                            <input type="email" className="form-control my-3" {...register("email", { required: true })} placeholder="Enter Your Email" />

                            <input type="password" className="form-control my-3" {...register("password", { required: true })} placeholder="Enter Your Password" />

                            <button type="submit" className="pink-btn w-100 mb-2">Log In</button>
                        </form>
                        <p>Don’t have an account? <Link to="/register" className="pink-text">Create Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;