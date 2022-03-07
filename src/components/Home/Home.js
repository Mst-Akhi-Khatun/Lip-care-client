import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Blog from '../Blog/Blog';
import ChooseUs from '../ChooseUs/ChooseUs';
import ContactUs from '../ContactUs/ContactUs';
import Banner from '../Header/Banner/Banner';
import Menubar from '../Header/Menubar/Menubar';
import Products from '../Products/Products';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            <Menubar />
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <Blog></Blog>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;