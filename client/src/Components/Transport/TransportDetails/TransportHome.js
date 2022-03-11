import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import SharedBanner from '../../Shared/SharedBanner/SharedBanner';
import Driver from './Driver';

import HeroSection from './HeroSection';


import TransportDetails from './TransportDetails';

const TransportHome = () => {
    return (
        <div>
            <NavigationBar/>
            <SharedBanner pageName={"Transport Details Page"} />
            <HeroSection></HeroSection>
            <TransportDetails/>
            <Driver/>
            <Footer/>
        </div>
    );
};

export default TransportHome;