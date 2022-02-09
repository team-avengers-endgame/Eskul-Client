import React from 'react';
import './Banner.css'
import Slider from './Slider';
const Banner = () => {
    const slider = [
        {
            image: "https://i.ibb.co/M9gwh73/rsz-1pexels-photo-8363770.png",
            lable: "First slide label",
            discription: "Some representative placeholder content for the first slide.",
            active: true

        },
        {
            image: "https://i.ibb.co/t4f2g37/rsz-1pexels-photo-8363732.png",
            lable: "Second Slide label",
            discription: "Some representative placeholder content for the second slide.",
            active: false
        },
        {
            image: "https://i.ibb.co/V3Cr2nv/rsz-pexels-photo-5212329.png",
            lable: "Third slide label",
            discription: "Some representative placeholder content for the third slide.",
            active: false
        },
    ]

    return (
        <div className="">
            <div className=" relative carousel px-2 flex flex-shrink-0 ">
                <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>

                    <div className="carousel-inner relative w-full overflow-hidden">
                        {
                            slider.map(content => <Slider content={content} />)
                        }
                    </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div >
            <div className=" container ml-44 lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around -m-12">
                <div className=" absolute xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 ">
                    <div className="rounded overflow-hidden shadow-md bg-white ">
                        <div className="absolute -mt-20 w-full flex justify-center">
                            <div className="h-32 w-32">
                                <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="" className="rounded-full object-cover h-full w-full shadow-md transform hover:scale-125 duration-300 ease-in-out" />
                            </div>
                        </div>
                        <div className="px-6 mt-16">
                            <h1 className="font-bold text-3xl text-center mb-1">Andres Berlin</h1>
                            <p className="text-gray-800 text-sm text-center">Chief Executive Officer</p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                            <div className="w-full flex justify-center pt-5 pb-5">
                                <button>kg</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div role="listitem" className=" absolute xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                            <div className="h-32 w-32">
                                <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="" className="rounded-full object-cover h-full w-full shadow-md transform hover:scale-125 duration-300 ease-in-out" />
                            </div>
                        </div>
                        <div className="px-6 mt-16">
                            <h1 className="font-bold text-3xl text-center mb-1">Andres Berlin</h1>
                            <p className="text-gray-800 text-sm text-center">Chief Executive Officer</p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                            <div className="w-full flex justify-center pt-5 pb-5">
                                <button>kg</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div role="listitem" className=" absolute xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                            <div className="h-32 w-32">
                                <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="" className="rounded-full object-cover h-full w-full shadow-md transform hover:scale-125 duration-300 ease-in-out" />
                            </div>
                        </div>
                        <div className="px-6 mt-16">
                            <h1 className="font-bold text-3xl text-center mb-1">Andres Berlin</h1>
                            <p className="text-gray-800 text-sm text-center">Chief Executive Officer</p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                            <div className="w-full flex justify-center pt-5 pb-5">
                                <button>kg</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div role="listitem" className=" absolute xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                            <div className="h-32 w-32">
                                <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="" className="rounded-full object-cover h-full w-full shadow-md transform hover:scale-125 duration-300 ease-in-out" />
                            </div>
                        </div>
                        <div className="px-6 mt-16">
                            <h1 className="font-bold text-3xl text-center mb-1">Andres Berlin</h1>
                            <p className="text-gray-800 text-sm text-center">Chief Executive Officer</p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                            <div className="w-full flex justify-center pt-5 pb-5">
                                <button>kg</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;