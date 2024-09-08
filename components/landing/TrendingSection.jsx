import React, { useState } from 'react';
import Slider from 'react-slick';
import { CarouselButtonCard } from 'widgets';

const TrendingSection = () => {
  const [divindex, setDivindex] = useState(0);
  const [selectedDiv, setSelectedDiv] = useState(0);

  const handleDivClick = (index) => {
    setDivindex(index);
    setSelectedDiv(index === selectedDiv ? null : index);
  };

  const getBorderColor = (index) => {
    return selectedDiv === index ? 'border-yellow-500' : 'border-white';
  };

  const getBoxColor = (index) => {
    return selectedDiv === index ? 'bg-white' : 'bg-yellow-500';
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="pb-12" style={bg}>
      <div className="container mx-auto">
        <div className="text-center my-8">
          <h2 className="text-4xl font-bold text-white">
            Discover in-demand <span className="text-gradient">Courses</span> across industries
          </h2>
          <p className="text-white mt-2">Online webinars are amazing opportunities to have fun and learn.</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 p-4 max-h-[690px] overflow-y-auto">
            {alldata.map((item, arrayIndex) => (
              <div key={arrayIndex} className="mx-4">
                <div
                  className={`flex items-center p-2 border-2 ${getBorderColor(divindex)} rounded-lg shadow-lg mb-3 cursor-pointer`}
                  onClick={() => handleDivClick(arrayIndex)}
                >
                  <div className={`text-2xl ${getBoxColor(arrayIndex)} p-2 rounded-full text-black mr-3`}>
                    {arrayIndex + 1}
                  </div>
                  <div>
                    <p className={`${getBorderColor(arrayIndex)} text-lg mb-0`}>{item.title}</p>
                  </div>
                </div>
                {arrayIndex !== 4 && !isMobile && (
                  <span className="block border-l border-dashed border-white mx-8 my-4"></span>
                )}
              </div>
            ))}
          </div>
          <div className="md:w-3/4 px-4">
            <div className="mx-auto px-5 pt-2 rounded-3">
              <div className="relative">
                <Slider {...settings}>
                  {alldata[divindex]?.cards.map((item, index) => (
                    <div key={index} className="lg:w-1/4 md:w-1/2 px-2">
                      <CarouselButtonCard item={item} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
