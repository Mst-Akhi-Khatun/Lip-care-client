import React from 'react';

const Review = () => {
    return (
        <div className="container text-center my-5">
            <h2 className="pb-2">Our <span className="pink-text">Customers</span> Reviews</h2>
            <p className="pb-2">Read Customers reviews and find out what they are saying about us.</p>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-200 pt-3">
                        <div className="text-center">
                            <img src="http://jituchauhan.com/site-templates/medical-website-template/02_gastroenterology/images/testimonial-pic-3.jpg" className="rounded-circle" width="100" height="100" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Donna Hany</h5>
                            <h6 className="card-title">donna@gmail.com</h6>
                            <p className="card-text">“I consider myself extremely fortunate to have recommend that it was possible for me to receive the treatment quickly. I now feel great and look forward to living my life normally”</p>
                            <i className="fas fa-star text-warning fs-5"></i>
                            <i className="fas fa-star text-warning fs-5"></i>
                            <i className="fas fa-star text-warning fs-5"></i>
                            <i className="fas fa-star text-warning fs-5"></i>
                            <i className="fas fa-star text-warning fs-5"></i>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-200 pt-3">
                        <div className="text-center">
                            <img src="http://jituchauhan.com/site-templates/medical-website-template/02_gastroenterology/images/testimonial-pic-1.jpg" className="rounded-circle" width="100" height="100" alt="..." />
                        </div>
                        <div class="card-body">
                            <h5 className="card-title">Regina Cruz</h5>
                            <h6 className="card-title">donna@gmail.com</h6>
                            <p className="card-text">“I need to thank you, most sincerely, for your interest and work on my throat problem. The extent and accuracy that you can achieve truly amaze me, thank you so much  profoundly”</p>
                            <i className="fas fa-star text-warning fs-5"></i>
                            <i className="fas fa-star text-warning fs-5"></i>
                            <i className="fas fa-star text-warning fs-5"></i>
                            <i className="fas fa-star text-warning fs-5"></i>
                            <i className="fas fa-star text-warning fs-5"></i>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-200 pt-3">
                        <div className="text-center">
                            <img src="http://jituchauhan.com/site-templates/medical-website-template/02_gastroenterology/images/testimonial-pic-3.jpg" className="rounded-circle" width="100" height="100" alt="..." />
                        </div>
                        <div class="card-body">
                            <h5 className="card-title">Karen Diehl</h5>
                            <h6 className="card-title">donna@gmail.com</h6>
                            <p className="card-text">“With expertise to make a new man out of me. I have a great deal to thank him for and would like to take this opportunity of wishing him family good health and happiness always”</p>
                            <i className="fas fa-star text-warning fs-5"></i>
                            <i className="fas fa-star text-warning fs-5"></i>
                            <i className="fas fa-star text-warning fs-5"></i>
                            <i className="fas fa-star text-warning fs-5"></i>
                            <i className="fas fa-star text-warning fs-5"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;