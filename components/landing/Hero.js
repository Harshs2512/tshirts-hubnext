import React, { Fragment, useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

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
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSide = currentIndex === 0;
        const newIndex = isFirstSide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    };
    const nextSlide = () => {
        const isLastSide = currentIndex === slides.length - 1;
        const newIndex = isLastSide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    // useEffect(() => {
    //     setTimeout(() => {
    //         const newIndex = slides.length - 1;
    //         setCurrentIndex(newIndex)
    //         console.log(newIndex)
    //     }, 5000);
    // });

    return (
        <Fragment>
            <div className="max-w-[1400px] h-[780px] pt-12 w-full m-auto relative group">
                <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-xl bg-center bg-cover duration-500"></div>
                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={nextSlide} size={30} className="shadow-4xl" />
                </div>

                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={prevSlide} size={30} />
                </div>
                <div className="flex top-4 justify-center py-2 text-[#7570ff]">
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}
export default Hero;