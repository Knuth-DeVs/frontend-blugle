import React, { useState } from "react";
import logo from "../../assets/logo.png";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { useUser } from '../../context/UserContext';
// import { CgSpinner } from 'react-icons/cg';

const SignUpForm: React.FC = () => {

  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  const [address, setAddress] = useState("");

  // const { setFullName } = useUser();

  // const [existingUserMessage, setExistingUserMessage] = useState("");

  //useNavigate method


  const { setFullName } = useUser();
  const navigate = useNavigate();

  // request body to send to API
  const reqBody = {
    userFirstName: firstName,
    userLastName: lastName,
    userName: name,
    userPassword: pwd,
    userEmail: email,
    userPhone: phone,
    userAddress: address,
  };

  // API call to the signup endpoint
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Post request to the API for sign up
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        reqBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Get responses from the server
      const responseBody = response?.data;
      // Handle different server response statuses
      if (response?.status === 400) {
        console.log(responseBody.message); // placeholder statement
      } else if (response?.status === 409) {
        console.log(responseBody.existingUserMessage); // placeholder statement
      } else if (response?.status === 500) {
        console.log(responseBody.message); // placeholder statement
      } else if (response.status === 200) {
        console.log("The send was successful");
        setFullName(name);
        navigate('/doctor/dashboard');
      }
      // handle success status 200 from the server
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  // const handleSignUp = () => {
  //   navigate('/doctor/dashboard')
  //   setFullName(name);
  // };


  return (
    <div className="">
      <Link to="/">
        <BiArrowBack className="text-2xl text-blue-600 cursor-pointer lg:hidden m-3" />
      </Link>
      <img src={logo} className="lg:hidden" />
      <div className="w-full mx-4 sm:mx-16 lg:pl-10 md:mt-6 mt-3">
        <div>
          {/* <p>{existingUserMessage}</p> */}
        </div>
        <div>
          <h2 className="text-lg md:text-xl uppercase ">REGISTER</h2>
          <p className="text-4xl md:text-5xl font-bold pt-2">
            Sign Up For Free
          </p>
          <p className="text-gray-800 py-2 text-sm md:text-lg">
            Already have an account?
            <span className="text-blue-500 pl-2">
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-[330px] sm:w-[600px] lg:w-[400px]">
            <div className="mt-2 mb-2">
              <label className="">First Name</label>
              <br />
              <input
                type="text"
                name="userFirstName"
                placeholder="First name"
                className="border px-2 py-3 w-full outline-none rounded-lg"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="">Last Name</label>
              <br />
              <input
                type="text"
                name="userLastName"
                placeholder="Enter Last name"
                className="border px-2 py-3 w-full outline-none rounded-lg"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="">Full Name</label>
              <br />
              <input
                type="text"
                name="userName"
                placeholder="Enter full name"
                className="border px-2 py-3 w-full outline-none rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="">Email</label>
              <br />
              <input
                type="email"
                name="userEmail"
                placeholder="Enter Email"
                className="border px-2 py-3 w-full outline-none rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="">Address</label>
              <br />
              <input
                type="text"
                name="userAddress"
                placeholder="Enter your location here"
                className="border px-2 py-3 w-full outline-none rounded-lg"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mt-2 mb-4">
              <label className="">Phone Number</label>
              <br />
              <input
                type="number"
                name="userPhone"
                pattern="[0-9]+"
                placeholder="Phone Number"
                className="border px-2 py-3 w-full outline-none rounded-lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label className="">Password</label>
              <br />
              <input
                type="password"
                name="userPassword"
                placeholder="Password"
                className="border px-2 py-3 w-full outline-none rounded-lg"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
            <Link to="/doctor/dashboard">
            <div className="bg-navlinks py-2 px-3 mt-8 rounded-md text-center text-white cursor-pointer hover:scale-105 duration-300 ease-linear">
              <button type="submit">
                SIGN UP
              </button>
            </div>
            </Link>
          </div>
        </form>
      </div>
      <p className="pt-3 cursor-pointer text-center lg:pl-20 font-semibold px-2">
        By submitting your information, you agree to our{" "}
        <span className="text-navlinkshover">Privacy Policy</span> and{" "}
        <span className="text-navlinkshover">Terms of use</span>
      </p>
    </div>
  );
};

export default SignUpForm;
