import Aos from 'aos';
import React, { useEffect } from 'react';

const Partners = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <div>

            <div class="md:py-12 py-8 px-4">
                <div class="flex flex-col items-center justify-center">
                    <h1 class="lg:text-5xl md:text-4xl text-2xl pb-4 font-bold leading-10 text-gray-800">Our Trusted Partners</h1>
                    <p class="text-base leading-normal text-center text-gray-600 mt-4 xl:w-1/2 w-10/12">We just got featured in the following magazines and it has been the most incredible journey. We work with the best fashion magazines across the world</p>
                </div>
                <div class="flex items-center justify-center mt-10">
                    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full">
                        <div data-aos="flip-left" class="md:w-48 w-full h-32 bg-blue-400 flex items-center justify-center">
                            <img src="https://i.ibb.co/TYzcXcq/photo-1573804633927-bfcbcd909acd.jpg" alt="google" />
                        </div>
                        <div data-aos="flip-right" class="md:w-48 w-full h-32 bg-purple-500 flex items-center justify-center">
                            <img src="https://i.ibb.co/PW0S8D8/dribbble-logo.png" alt="dribble" />
                        </div>
                        <div data-aos="flip-left" class="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg3.svg" alt="amazon" />
                        </div>
                        <div data-aos="flip-right" class="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <img src="https://i.ibb.co/1nbn91n/linked-in-3200.jpg" alt="linkedIn" />
                        </div>
                        <div data-aos="flip-left" class="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <img src="https://i.ibb.co/qRjFrGY/download.png" alt="blackberry" />
                        </div>
                        <div data-aos="flip-right" class="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <img src="https://i.ibb.co/DGQzm35/Toyota-Logo-1989-present.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Partners;