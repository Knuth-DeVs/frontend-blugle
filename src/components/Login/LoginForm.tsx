import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { logo } from "../../assets/images";
import { BiArrowBack } from "react-icons/bi";
import { CgSpinner } from 'react-icons/cg';
import { useUser } from '../../context/UserContext';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { setFullName } = useUser();
  const reqBody = { userEmail, userPassword };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        reqBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

<<<<<<< HEAD
      //handle error 400 status from the server
      if (response.status === 400) {
        console.log(response.data.message); //placeholder message
      } else {
        //handle success status 200 from the server
        if (response.status === 200 && response.data.userRole === "patient") {
          //store token directly from response
          const token = response.data.token;
          const userRole = response.data.userRole;
          console.log("You have signed up successfully");
          console.log(userRole);
          navigate("/patient/dashboard");
          localStorage.setItem("accessToken", JSON.stringify(token));
        } else if (
          response.status === 200 &&
          response.data.userRole === "doctor"
        ) {
          //store token directly from response
          const token = response.data.token;
          const userRole = response.data.userRole;
          console.log("You have signed up successfully");
          console.log(userRole);
          navigate("/doctor/dashboard");
          localStorage.setItem("accessToken", JSON.stringify(token));
        } else if (
          response.status === 200 &&
          response.data.userRole === "admin"
        ) {
          //store token directly from response
          const token = response.data.token;
          const userRole = response.data.userRole;
          console.log("You have signed up successfully");
          console.log(userRole);
          navigate("/doctor/dashboard");
          localStorage.setItem("accessToken", JSON.stringify(token));
=======
      if (response.status === 200) {
        const { token, userRole, fullName } = response.data;
        setFullName(fullName);
        localStorage.setItem("accessToken", JSON.stringify(token));
        if (userRole === "doctor" || userRole === "admin") {
          navigate("/doctor/dashboard");
        } else {
          navigate("/");
>>>>>>> 5b21a06ad32ee8d495d6c42e163d3b35ad522585
        }
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className=" h-[100vh] lg:pr-36 mt-10 md:mt-24 mx-6">
        <div className="w-full px-auto">
          <Link to="/">
            <BiArrowBack className="text-2xl text-blue-600 cursor-pointer lg:hidden" />
          </Link>
          <img src={logo} className="lg:hidden" />
          <h2 className="md:text-xl uppercase ">Start your Journey</h2>
          <p className="md:text-5xl font-bold pt-4 text-2xl">
            Sign In To <span className="text-blue-500">Blugle.</span>
          </p>
          <p className="text-gray-800 py-2">
            Don't have an account?
            <span className="text-blue-500 pl-2">
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <div>
            <div className="mt-7 mb-4">
              <label htmlFor="user-email" id="user-email">
                Email
              </label>
              <br />
              <input
                type="email"
                name="userEmail"
                placeholder="Enter email here"
                id="user-email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="border px-2 py-3 w-full outline-none rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="user-password" id="user-password">
                Password
              </label>
              <br />
              <input
                type="password"
                placeholder="Password"
                id="user-password"
                name="userPassword"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="border px-2 py-3 w-full outline-none rounded-lg"
              />
            </div>
            <button
              onClick={handleLogin}
              type="submit"
              className='bg-navlinks py-2 px-3 mt-8 rounded-md flex gap-2 items-center justify-center text-center text-white cursor-pointer hover:scale-105 duration-300 ease-linear'
              disabled={loading}
            >
              {loading && <CgSpinner size={30} className="animate-spin" />}
              SIGN IN
            </button>
          </div>
        </form>
        <p className='pt-3 text-blue-500 cursor-pointer text-right'>Forgot your password?</p>
      </div>
    </div>
  );
};

export default LoginForm;
