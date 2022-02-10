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
                            slider.map((content, index) => <Slider key={index} content={content} />)
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
        </div>
    );
};

export default Banner;