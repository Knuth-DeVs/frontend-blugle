import React from 'react';
import hero from '../../assets/hero.png';
import { Link } from 'react-router-dom';

interface HeroProps {
  onBookAppointment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookAppointment }) => {
  return (
    <div>
      <div className='bg-[rgb(49,111,246)] w-full shadow-lg'>
        <div className='flex flex-col-reverse md:flex-row gap-8 xl:gap-32 items-center justify-evenly h-full lg:px-6'>
          <div className='text-white px-4 lg:px-8 xl:px-16 md:mt-8'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Blugle Medical Services</h1>
            <p className='text-4xl md:text-[42px] leading-none lg:text-[50px] xl:text-6xl font-bold'>Rapid healthcare solutions in the fastest possible way</p>
            <Link to='/'>
            <button
              className='border-2 border-white bg-white rounded-3xl py-1 px-2 lg:py-2 mt-6 lg:px-6 text-md lg:text-xl hover:scale-110 duration-300 ease-linear text-navlinks hover:text-white hover:bg-[rgb(49,111,246)]'
              onClick={onBookAppointment}
            >
              Book Appointment
            </button>
            </Link>
            <p className='mt-3 pl-2 lg:pl-6 pb-4'>We'd love to help</p>
          </div>
          <img src={hero} alt="Hero image" className='lg:w-[550px] w-[350px]' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
