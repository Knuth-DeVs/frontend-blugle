import React, { useState } from 'react';
import Health1 from '../../assets/health1.png'
import Health2 from '../../assets/health2.png'

const ScrollData = [
    {
        image: Health1,
        title: 'Customer Support focused on your Health',
        description: 'A dedicated support team ready to assist you with any questions or issues related to your health and medical care.'
    },
    {
        image: Health2,
        title: 'Certified Health Personnels',
        description: 'Certified healthcare professionals ready to provide expert assistance and support for your medical needs.'
    },
    {
        image: Health1,
        title: 'Customer Support focused on your Health',
        description: 'A dedicated support team ready to assist you with any questions or issues related to your health and medical care.'
    },
    {
        image: Health2,
        title: 'Certified Health Personnels',
        description: 'Certified healthcare professionals ready to provide expert assistance and support for your medical needs.'
    },
]

const HomeScrollHorizontal: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0? ScrollData.length - 1 : prevIndex - 1));
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === ScrollData.length - 1? 0 : prevIndex + 1));
  // };

  const renderItems = () => {
    const start = currentIndex;
    const end = start + 2;
    return ScrollData.slice(start, end).map((item, index) => (
      <div key={index} className="flex-shrink-0 w-48 h-48 md:w-60 lg:w-96 lg:h-64 bg-gray-200 rounded-lg shadow-lg">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg" />
        <div className="p-4">
          <h3 className="md:text-lg lg:text-xl font-semibold">{item.title}</h3>
          <p className="text-[12px] lg:text-lg">{item.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className="flex space-x-6 md:space-x-16 lg:space-x-20">
        {/* Content */}
        {renderItems()}
      </div>
      {/* Circle pagination */}
      <div className="absolute flex -bottom-52 md:-bottom-48 justify-center space-x-2 mb-4">
        {ScrollData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`md:w-4 md:h-4 w-2 h-2 rounded-full ${
              currentIndex === index? 'bg-navlinkshover' : 'bg-navlinks'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeScrollHorizontal;