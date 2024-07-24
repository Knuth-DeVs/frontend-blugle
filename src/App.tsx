import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";

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
      </Routes>
    </>
  );
};

export default App;
