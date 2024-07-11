import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const TestimonialData = [
  {
    text: "Thank You! Blugle your comprehensive program helped me reached my weight lose goal",
    name: "Joseph Broni"
  },
  {
    text: "Blugle's wellness workshops are incredibly informative and inspiring. I've learning so much about taking care of my body and mind.",
    name: "Christopher L."
  },
  {
    text: "I am able to save more time with Blugle, it's just faster.",
    name: "Paul Ofori, CEO Of Sukasa"
  },
  {
    text: "Blugle's nutrition coaching has helped me developed healthy habits that I can maintain for life.",
    name: "M. Nyarkoh"
  },
  {
    text: "Your health personals have given me the boost to gain confidence and take control of my health",
    name: "J. Darwin"
  },
  {
    text: "I was hesitant to try online health coaching but Blugle's platform is so convenient and use friendly.",
    name: "Gabby Addo"
  }
] 

const Testimonial: React.FC = () => {
  return (
    <div>
        <h1 className='text-center text-2xl md:text-4xl text-navlinks font-bold'>TESTIMONIALS</h1>
        <p className='text-center text-lg md:text-2xl font-semibold text-gray-700'>This is what people are saying about us</p>
        <div className='border-t border-black/70 border-b my-4 py-4'>
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      pagination={{ clickable: true, }}
      scrollbar={{ draggable: false, hide: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='md:mx-10 mx-5'
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {
        TestimonialData.map((item, id) => {
          return (
            <SwiperSlide key={id} className=' bg-gradient-to-t from-navlinkshover to-navlinks w-32 p-2 md:h-72'>
              <div>
                <p className="text-center text-7xl text-white">"</p>
                <p className='text-sm md:text-lg font-semibold text-white px-3 md:px-6 text-center'>{item.text}</p>
                <p className='text-center text-white absolute bottom-6 px-auto w-full uppercase font-medium'>{item.name}</p>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
    </div>
    </div>
  )
}

export default Testimonial