import Aos from 'aos';
import React, { useEffect } from 'react';

const OnlineLP = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 pt-20 px-3 container'>
            <div className=' flex justify-center items-center'>
                <img
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-anchor-placement="center-bottom"
                    src="https://i.ibb.co/sW8gy22/aboutImg.png" alt="" />
            </div>
            <div >
                <div className=''>
                    <h1 className=' text-4xl font-bold py-5'>Online Learning  PLatform</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh dolor, gravida faucibus dolor consectetur, pulvinar rhoncus risus. Fusce vel rutrum mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh dolor, gravida faucibus dolor consectetur, pulvinar rhoncus risus. Fusce vel rutrum mi.</p>

                    <div className=' pt-8 grid md:grid-cols-1'>
                        <div className=' md:flex '>
                            <div
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className=' p-5 rounded-full w-20 h-20 bg-sky-600 my-2'>
                                <img
                                    data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="4000"
                                    src="https://i.ibb.co/DrSytv1/education.png" alt="" />
                            </div>
                            <div className='ml-4 text-left'>
                                <h1 className=' text-2xl font-bold '>Special Education</h1>
                                <p>Lorem ipsum dolor sit amet, adipiscing elit. Vivamus nibh dolor gravida at eleifend</p>
                            </div>
                        </div>
                        <div className='md:flex'>
                            <div
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className=' p-5 rounded-full w-20 h-20 bg-green-600 my-2'>
                                <img
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    src="https://i.ibb.co/27RR04q/class.png" alt="" />
                            </div>
                            <div className='ml-4 text-left'>
                                <h1 className=' text-2xl font-bold '>Honors classes</h1>
                                <p>Lorem ipsum dolor sit amet, adipiscing elit. Vivamus nibh dolor gravida at eleifend</p>
                            </div>
                        </div>
                        <div className='md:flex'>
                            <div
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className=' p-5 rounded-full w-20 h-20 bg-red-600 my-2'>
                                <img
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    src="https://i.ibb.co/tz2n75n/academy.png" alt="" />
                            </div>
                            <div className='ml-4 text-left'>
                                <h1 className=' text-2xl font-bold '>Traditional academies</h1>
                                <p>Lorem ipsum dolor sit amet, adipiscing elit. Vivamus nibh dolor gravida at eleifend</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OnlineLP;