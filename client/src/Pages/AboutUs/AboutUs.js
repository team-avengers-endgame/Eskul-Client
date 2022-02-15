import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import AboutUsBanner from './AboutUsBanner';
import AboutUsPhotoGallery from './AboutUsPhotoGallery/AboutUsPhotoGallery';
import OnlineLP from './OnlineLP/OnlineLP';
import OurTeam from './OurTeam/OurTeam';

const AboutUs = () => {
    return (
        <div>
            <Navigation />
            <AboutUsBanner />
            <OnlineLP />
            <OurTeam />
            <AboutUsPhotoGallery />
            <Footer />
        </div>
    );
};

export default AboutUs;