import React from 'react';

const Subscribe = () => {
    return (
        <div className="mt-20">

            <h1 className="underline decoration-orange-400 text-4xl text-orange-400 font-bold">Be a Subscriber</h1>

            {/* <!-- component --> */}
            <div className="2xl:mx-auto 2xl:container mx-4 py-16">
                {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
                <div className="w-full relative flex items-center justify-center">
                    <img src="https://i.ibb.co/gMbMW3D/pexels-photo-8617994.jpg" alt="" className="w-full h-full absolute z-0 hidden xl:block" />

                    <div className="bg-gray-500 bg-opacity-60 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                        <h1 className="text-4xl font-semibold leading-9 text-white text-center">Don’t miss out!</h1>
                        <p className="text-base leading-normal text-center text-white mt-6">
                            Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />
                            a week on every friday so subscribe to get latest news and updates.
                        </p>
                        <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                            <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                            <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;