import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    return (


        <div>
            <div class="flex justify-center items-center  space-x-2 mt-20 p-6">
                <div
                    data-aos="fade-up-right"
                    class=" bg-black p-6">
                    <h1 className="text-blue-600">E</h1>
                </div>
                <div
                    data-aos="fade-up-left"
                    class=" bg-black  p-6 animate-fade-out-down">
                    <h1 className="text-yellow-300">S</h1>
                </div>
                <div
                    data-aos="fade-up-right"
                    class=" bg-black  p-6 animate-fade-in-up">
                    <h1 className="text-purple-300">K</h1>
                </div>
                <div
                    data-aos="fade-up-left"
                    class=" bg-black  p-6 animate-fade-out-up">
                    <h1 className="text-orange-700">U</h1>
                </div>
                <div
                    data-aos="fade-up-right"
                    class=" bg-black  p-6 animate-fade-out-up">
                    <h1 className="text-white">L</h1>
                </div>

            </div>




            <div className="container mx-auto md:p-64">
                <div className="grid grid-cols-1  place-items-center p-3  ">
                    <div className="grid md:grid-cols-2  ">
                        <div
                            data-aos="fade-right"
                            className="md:col-span-1">
                            <img src="https://i.ibb.co/sjk9MtL/pexels-photo-5303549.jpg" alt="" />
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
                            <img src="https://i.ibb.co/sjk9MtL/pexels-photo-5303549.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WhyUs;




