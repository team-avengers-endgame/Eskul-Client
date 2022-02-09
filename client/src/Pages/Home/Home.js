import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Contact />
            <Newsletter />
            <Footer></Footer>
        </div>
    );
};

export default Home;