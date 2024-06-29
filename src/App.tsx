import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App