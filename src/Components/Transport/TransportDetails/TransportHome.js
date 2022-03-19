import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import SharedBanner from '../../Shared/SharedBanner/SharedBanner';
import Drivers from './Drivers';


import HeroSection from './HeroSection';



import TransportDetails from './TransportDetails';
// tramsport home
const TransportHome = () => {
    return (
        <div>
            <NavigationBar/>
            <SharedBanner pageName={"Transport Details Page"} />
            <HeroSection></HeroSection>
            <TransportDetails/>
            <Drivers/>
            <Footer/>
        </div>
    );
};

export default TransportHome;