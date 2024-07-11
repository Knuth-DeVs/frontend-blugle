import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true,  }}
      scrollbar={{ draggable: false, hide: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='md:mx-10 mx-5'
    >
    <div className="relative flex items-center justify-center">
      <div className="">
      {
         ScrollData.map((item, index) => (
          <SwiperSlide key={index} className="flex-shrink-0 bg-gray-200 rounded-lg shadow-lg md:w-44">
            <img src={item.image} alt={item.title} className="w-full lg:h-96 object-cover rounded-lg" />
            <div className="md:p-4 p-2">
              <h3 className="md:text-lg lg:text-xl font-semibold">{item.title}</h3>
              <p className="text-[12px] lg:text-lg">{item.description}</p>
            </div>
          </SwiperSlide>
        ))
      }
      </div>
    </div>
    </Swiper>
  );
};