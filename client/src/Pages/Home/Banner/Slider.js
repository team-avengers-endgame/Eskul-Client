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
                <h5 className="text-4xl font-bold text-lime-900">{lable}</h5>
                <p className="text-2xl  text-lime-900">{discription}</p>
                <div class="relative text-lg bg-transparent text-gray-800">
                    <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
                        <input class="bg-transparent border-none mr-3 px-6 leading-tight focus:outline-none" type="text" placeholder="Search" />
                        <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                            <svg class="h-4 w-4 fill-current" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" >
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Slider;

