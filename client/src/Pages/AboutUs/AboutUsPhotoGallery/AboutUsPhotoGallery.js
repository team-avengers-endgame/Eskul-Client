import Aos from 'aos';
import React, { useEffect } from 'react';
import './AboutUsPhotoGallery.css';
const AboutUsPhotoGallery = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className='AboutUsPhotoGallery py-20 mt-20 grid gap-11 md:grid-cols-3 container px-3'>
            <div className='md:col-span-1  text-left flex items-center'>

                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className=' text-justify'>
                    <h1 className=' text-4xl font-bold py-2'>Photo Gallery</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laudantium ad hic ut numquam, quasi labore modi? Pariatur magni dolore vitae!</p>
                </div>

            </div>
            <div className='sm:col-span-3 md:col-span-2  grid  gap-3 md:grid-cols-3'>
                <div
                    data-aos="zoom-out-right"
                >
                    <img src="https://i.ibb.co/fX8tCk7/gallery-1.jpg" alt="" />
                </div>
                <div
                    data-aos="zoom-out-left"
                >
                    <img src="https://i.ibb.co/TYbVBn0/gallery-2.jpg" alt="" />
                </div>
                <div
                    data-aos="zoom-out-right"
                >
                    <img src="https://i.ibb.co/dprBg90/download.jpg" alt="" />
                </div>
                <div
                    data-aos="zoom-out-left"
                >
                    <img src="https://i.ibb.co/T10svb8/download.jpg" alt="" />
                </div>
                <div
                    data-aos="zoom-out-right"
                >
                    <img src="https://i.ibb.co/j5dYhPz/gallery-5.jpg" alt="" />
                </div>
                <div
                    data-aos="zoom-out-left"
                >
                    <img src="https://i.ibb.co/zFK8Hbx/download.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUsPhotoGallery;