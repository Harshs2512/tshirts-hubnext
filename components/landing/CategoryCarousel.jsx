import { CategoryCards } from '@/widgets';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const categories = [
    { imgSrc: "/images/logo512.png", name: "Category 1" },
    { imgSrc: "/images/logo512.png", name: "Category 2" },
    { imgSrc: "/images/logo512.png", name: "Category 3" },
    { imgSrc: "/images/logo512.png", name: "Category 4" },
    { imgSrc: "/images/logo512.png", name: "Category 5" },
    { imgSrc: "/images/logo512.png", name: "Category 6" },
    { imgSrc: "/images/logo512.png", name: "Category 7" }
  ];

  return (
    <div className='container mx-auto mt-4 md:mt-10 lg:mt-16 px-10'>
      <h1 className='text-3xl font-bold tracking-widest text-center py-10 text-[#7570ff] mt-9 uppercase'>Categories</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {categories.map((item, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 px-2">
              <CategoryCards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingSection;