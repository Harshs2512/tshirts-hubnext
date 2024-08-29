import React, { Fragment, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Hero = () => {
    const slides = [
        {
            url: '/images/1.jpg'
        },
        {
            url: '/images/2.jpg'
        },
        {
            url: '/images/1.jpg'
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <Fragment>
            <div className="h-[500px] sm:h-[600px] md:h-[700px] lg:h-[780px] mt-14 relative group">
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className="w-full h-full bg-center bg-cover duration-500 bg-no-repeat"
                ></div>

                {/* Left Arrow */}
                <div
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white bg-black/50 cursor-pointer"
                    onClick={prevSlide}
                >
                    <BsChevronCompactLeft size={30} />
                </div>

                {/* Right Arrow */}
                <div
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer"
                    onClick={nextSlide}
                >
                    <BsChevronCompactRight size={30} />
                </div>

                {/* Dots */}
                <div className="flex justify-center py-4">
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`cursor-pointer ${slideIndex === currentIndex ? 'text-[#7570ff]' : 'text-gray-400'}`}
                        >
                            <RxDotFilled className="text-2xl" />
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default Hero;