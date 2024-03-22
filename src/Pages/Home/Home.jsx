import React from 'react';
import Swipers from './Swiper/Swiper';
import Hero from './Hero/Hero';
import PopularItems from './PopularItems/PopularItems';
import FeaturedItems from './FeaturedItems/FeaturedItems';
import Testimonial from './Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant | Home</title>
            </Helmet>
            <Hero></Hero>
            <Swipers></Swipers>
            <PopularItems></PopularItems>
            <FeaturedItems></FeaturedItems>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;