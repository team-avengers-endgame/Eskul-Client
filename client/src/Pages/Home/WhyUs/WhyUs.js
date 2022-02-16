import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    return (


        <div>
            <div class="flex justify-center items-center  space-x-2 mt-20 p-6 font-bold">
                <div
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    class=" bg-white p-6">
                    <h1 className="text-blue-600 text-7xl">E</h1>
                </div>
                <div
                    data-aos="fade-up-left"
                    class=" bg-white  p-6 animate-fade-out-down">
                    <h1 className="text-yellow-300 text-7xl">S</h1>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    class=" bg-white  p-6 animate-fade-in-up">
                    <h1 className="text-purple-600 text-7xl">K</h1>
                </div>
                <div
                    data-aos="fade-up-left"
                    class=" bg-white p-6 animate-fade-out-up">
                    <h1 className="text-orange-700 text-7xl">U</h1>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    class=" bg-white  p-6 animate-fade-out-up">
                    <h1 className="text-green-700 text-7xl">L</h1>
                </div>

            </div>




            <div className="container mx-auto md:p-64">
                <div className="grid grid-cols-1  place-items-center p-3  ">
                    <div className="grid md:grid-cols-2  ">
                        <div
                            data-aos="fade-right"
                            className="md:col-span-1">
                            <img src="https://i.ibb.co/xFGt0xZ/smiling-students-with-backpacks-1098-1220.jpg" alt="" />
                        </div>
                        <div
                            data-aos="fade-left"
                            className="align-center md:col-span-1 p-6">
                            <h1 className="text-4xl text-yellow-300 font-bold">Welcome to the Most Secure Place!</h1>
                            <p className="">We pride ourselves on being able to provide a happy, safe and inclusive environment in which children aged two and a half to five years old are encouraged to explore their potential!</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 ">
                        <div
                            data-aos="fade-up-right"
                            className="align-center md:col-span-1 p-6">
                            <h1 className="text-4xl text-yellow-300 font-bold">Why we are the Best Start?</h1>
                            <p className=" ">We pride ourselves on being able to provide a happy, safe and inclusive environment in which children aged two and a half to five years old are encouraged to explore their potential!</p>
                        </div>
                        <div
                            data-aos="fade-up-left"
                            className=" md:col-span-1 ">
                            <img src="https://i.ibb.co/qWCH42V/virtual-classroom-study-space-23-2149178640.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WhyUs;




