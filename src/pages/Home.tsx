import Banner from '../components/Home/Banner'
import DoctorInfo from '../components/Home/DoctorInfo'
import FormSection from '../components/Home/FormSection'
import Hero from '../components/Home/Hero'
import HeroBtn from '../components/Home/HeroBtn'
import Navbar from '../components/Home/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HeroBtn/>
        <Banner/>
        <DoctorInfo/>
        <FormSection/>
    </div>
  )
}

export default Home