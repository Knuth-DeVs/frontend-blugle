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
import Payment from './components/Dashboard/Doctor/Payment'
import Profile from './components/Dashboard/Doctor/Profile'
import Doctor from './pages/Doctor'
import Dashboard from './components/Dashboard/Doctor/Dashboard'
import Patient from './pages/Patient'
import DashboardP from './components/Dashboard/Patient/Dashboard'
import AppointmentP from './components/Dashboard/Patient/Appointment'
import Notification from './components/Dashboard/Patient/Notification'
import Doctors from './components/Dashboard/Patient/Doctors'
import PaymentP from './components/Dashboard/Patient/Payment'
import SuperAdminPage from './pages/SuperAdmin'
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

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
          <Route path="notifications" element={<Messages/>} />
          <Route path="patients" element={<Patients/>} />
          <Route path="payment" element={<Payment/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
        <Route path="/patient" element={<Patient/>}>
          <Route path="dashboard" element={<DashboardP/>} />
          <Route path="appointment" element={<AppointmentP/>} />
          <Route path="notifications" element={<Notification/>} />
          <Route path="doctors" element={<Doctors/>} />
          <Route path="payment" element={<PaymentP/>} />
        </Route>
        <Route path='/admin' element={<SuperAdminPage/>}/>
      </Routes>

    </>
  );
};

export default App;