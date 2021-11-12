import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-section d-flex justify-content-center align-items-center text-uppercase">
            <div className="px-2">
                <h2>WELCOME TO</h2>
                <h1 className="px-3 py-2 mt-2 text fw-bolder"> Lip  <span className=""> Care</span></h1>
                <p className="fs-4 fst-italic">We deliver high-quality, organic beauty and cosmetic products. All our products are rich in nutrients and it give a delicious aroma. Sure, it will give you a luxurious feel. We deliver quality cosmetic products at an affordable price.</p>
            </div>
        </div>
    );
};

export default Banner;