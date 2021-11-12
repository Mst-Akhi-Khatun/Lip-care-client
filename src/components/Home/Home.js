import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import Banner from '../Header/Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;