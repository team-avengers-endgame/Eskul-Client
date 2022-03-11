import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import SharedBanner from '../../Shared/SharedBanner/SharedBanner';


import HeroSection from './HeroSection';
import SimpleSlider from './SimpleSlider';


import TransportDetails from './TransportDetails';

const TransportHome = () => {
    return (
        <div>
            <NavigationBar/>
            <SharedBanner pageName={"Transport Details Page"} />
            <HeroSection></HeroSection>
            <TransportDetails/>
            <SimpleSlider/>
            <Footer/>
        </div>
    );
};

export default TransportHome;