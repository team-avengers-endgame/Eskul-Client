import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Banner from '../Banner/Banner';
import ChildEducation from '../ChildEducation/ChildEducation';
import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';
import NurtingEnvironment from '../NurtingEnvironment/NurtingEnvironment';
import TopList from '../TopList/TopList';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <>
            <NavigationBar />
            <Banner />
            <NurtingEnvironment />
            <WhyChooseUs />
            <Features />
            <TopList />
            <Gallery />
            <Footer />
        </>
    );
};

export default Home;