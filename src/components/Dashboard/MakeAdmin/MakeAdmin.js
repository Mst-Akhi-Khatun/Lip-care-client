import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container mt-4">
            <h1 className="pink-text">Make An Admin Using User Email</h1>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="form-control mb-4 rounded-pill py-2 px-3"
                            placeholder="Existing User Email"
                        />
                        <input type="submit" value="Send" className="pink-btn w-100 mb-5" />
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default MakeAdmin;