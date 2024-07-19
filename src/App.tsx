import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Services from './pages/Services'
import SignUp from './pages/SignUp'
import Appointment from './components/Dashboard/Doctor/DocAppointment'
import Messages from './components/Dashboard/Doctor/Messages'
import Patients from './components/Dashboard/Doctor/Patients'
import Schedule from './components/Dashboard/Doctor/Schedule'
import Profile from './components/Dashboard/Doctor/Profile'
import Doctor from './pages/Doctor'
import Dashboard from './components/Dashboard/Doctor/Dashboard'

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/doctor" element={<Doctor/>}>
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="appointment" element={<Appointment/>} />
          <Route path="messages" element={<Messages/>} />
          <Route path="patients" element={<Patients/>} />
          <Route path="schedule" element={<Schedule/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App