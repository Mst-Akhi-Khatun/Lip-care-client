import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../../images/About/about.png'

const AboutUs = () => {
    return (
        <div className="container-fluid banner-bg py-5" id="about">
            <h1 className="text-uppercase text-center mb-5"><span className="purple-text">About</span> Us</h1>
            <div className="container">
                <div className="row gx-5 d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <h3>Our Shop History</h3>
                        <p style={{ textAlign: 'justify' }}>We started our journey in 28th February, 1998. All are Herbal Cosmetics and it is formulated, using various permissible herbal cosmetic ingredients which are 100% safe & pure Herbal products.</p>
                        <p>Contains the goodness of Aloe Vera.</p>
                        <p>Contains the goodness of Aloe Vera.</p>
                        <p>Contains the goodness of Aloe Vera.</p>
                        <Link to="/exploreProducts">
                            <button className="pink-btn">Explore Lipsticks</button>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <img src={Img} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;