import Aos from 'aos';
import React, { useEffect } from 'react';

const Featur = ({ featur }) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const { title, img, description } = featur;
    return (


        <div
            data-aos="zoom-in"
        >

            <div class="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-36">
                <img class="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={img} alt="" />
                <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                    <div class="absolute w-full flex place-content-center">
                        <p class="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">{title}</p>
                    </div>
                    <div class="absolute w-full flex place-content-center mt-20">
                        <p class="font-sans text-center w-4/5 text-white mt-5">{description}</p>
                    </div>
                    <button class="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">Explore</button>
                </div>
                {/* <button className="absolute ml-4 left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48 hover:bg-orange-400 hover:text-white">Explore</button> */}
            </div>
        </div>
    );
};

export default Featur;