import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Contact />
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;