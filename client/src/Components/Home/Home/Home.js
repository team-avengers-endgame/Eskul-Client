import { Box, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Banner from '../Banner/Banner';

import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';
import NurtingEnvironment from '../NurtingEnvironment/NurtingEnvironment';
import Partners from '../Partners/Partners';
import TopList from '../TopList/TopList';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <>
            <NavigationBar />
            <Banner />
        
           <Typography variant='h6' sx={{}}> <a style={{textDecoration:"none"}} href="https://docs.google.com/forms/d/e/1FAIpQLSfvFQyfZbgWwUW8GE8tM1vCa3-44nj1GlDtVRmoM1aaWlediA/viewform" 
            >Student Can find out Covid-19 vaccine form here.Just click</a></Typography>
             
            <NurtingEnvironment />
            <WhyChooseUs />
            <Features />
            <TopList />
            <Gallery />
            <Partners />
            <Footer />
        </>
    );
};

export default Home;
