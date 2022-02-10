import React from 'react';

const Featur = ({ featur }) => {
    const { title, img, description } = featur;
    return (
        <div class="relative group overflow-hidden bg-black rounded-lg">
            <img class="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={img} alt="" />
            <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
            <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                <div class="absolute w-full md:mt-10 ">
                    <p class="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white">{title}</p>
                </div>
                <div class="absolute w-full mt-36 text-center">
                    <p class="font-sans text-white mt-5">{description}</p>
                </div>
                <button class="absolute ml-4 left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48 hover:bg-orange-400 hover:text-white">Explore</button>
            </div>
        </div>
    );
};

export default Featur;