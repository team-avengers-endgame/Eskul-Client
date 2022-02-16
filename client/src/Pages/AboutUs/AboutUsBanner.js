import Aos from 'aos';
import React, { useEffect } from 'react';
import './AboutUs.css'
const AboutUsBanner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div
            data-aos="zoom-in"
            className='aboutUs_Banner_Container py-52 '>
            <h1 className=' text-white text-5xl font-bold'>ABOUT US</h1>
        </div>
    );
};

export default AboutUsBanner;