import React from 'react';

const Slider = ({ content }) => {
    const { image, lable, discription, active } = content;
    return (

        <div className={`carousel-item ${active ? "active" : ""}   relative float-left w-full`}>
            <img
                src={image}
                className="block"
                alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-left mb-40 ">
                <h5 className="text-4xl text-gray-200">{lable}</h5>
                <p className="text-2xl text-gray-50">{discription}</p>
            </div>
        </div>

    );
};

export default Slider;

