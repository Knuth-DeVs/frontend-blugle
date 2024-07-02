import Banner from '../components/Home/Banner'
import DoctorInfo from '../components/Home/DoctorInfo'
import Footer from '../components/Home/Footer'
import FormSection from '../components/Home/FormSection'
import Hero from '../components/Home/Hero'
import HeroBtn from '../components/Home/HeroBtn'
import Navbar from '../components/Home/Navbar'
import React, { useEffect } from 'react'

const Home = () => {

  useEffect(()=> {
    document.title = "Blugle Medical and Supply Service"
  })
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HeroBtn/>
        <Banner/>
        <DoctorInfo/>
        <FormSection/>
        <Footer/>
    </div>
  )
}

export default Home