import React from 'react';
import './Banner.css';
import banner from '../../../images/Banner/banner.png';

const Banner = () => {
    return (
        <div className="container-fluid light-pink-bg py-5">
            <div className="row d-flex align-items-center text-uppercase px-5">
                <div className="col-md-7 text-start ps-5">
                    <h2>WELCOME TO</h2>
                    <h1 className="fw-bolder"> Lip  <span className="pink-text"> Care</span> Lipstick Shop</h1>
                    <p className="fs-6 w-75">We deliver high-quality, organic beauty and cosmetic products. All our products are rich in nutrients and it give a delicious aroma.</p>
                    <button className="pink-btn">Explore</button>
                </div>
                <div className="col-md-5">
                    <div className="pink-bg py-3 px-0 rounded-circle">
                        <img src={banner} alt="" className="img-fluid" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;