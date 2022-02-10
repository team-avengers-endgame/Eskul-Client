import React from 'react';

const Slider = ({ content }) => {
    const { image, lable, discription, active } = content;
    return (

        <div className={`carousel-item ${active ? "active" : ""}   relative float-left w-full`}>
            <img
                src={image}
                className="block  w-screen"
                alt="..."
            />
            <div className="carousel-caption  absolute text-left md:mb-40 ">
                <div className="bg-gray-900/[.30] py-4 px-2 rounded-tl-lg rounded-br-lg  md:w-1/2">
                    <h5 className="md:text-4xl sm:text-3xl font-bold text-lime-100">{lable}</h5>
                    <p className="md:text-2xl  text-yellow-200">{discription}</p>
                </div>
                <div class="relative text-lg bg-transparent text-gray-800">
                    <div class="flex items-center  py-2">
                        <input class="  md:mt-10 block md:w-1/2 px-3 py-2 bg-white border border-lime-300 rounded-md text-lg font-semibold shadow-lg placeholder-lime-500 font-mono" type="text" placeholder="Search" />

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Slider;

