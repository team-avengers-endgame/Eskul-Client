import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Banner from '../Banner/Banner';
import ChildEducation from '../ChildEducation/ChildEducation';
import Gallery from '../Gallery/Gallery';
import HealthyFood from '../HealthyFood/HealthyFood';
import NurtingEnvironment from '../NurtingEnvironment/NurtingEnvironment';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <>
            <NavigationBar />
            <Banner />
            <ChildEducation />
            <NurtingEnvironment />
            <WhyChooseUs />
            <HealthyFood />
            <Gallery />
            <Footer />
        </>
    );
};

export default Home;